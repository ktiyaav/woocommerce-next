"use client";
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import { Skeleton } from "../../ui/skeleton";
import FeatherIcon from "feather-icons-react";
import { CURRENCY, TAX_STATUS } from "@/config/constants";
import Link from "next/link";
 
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import RelatedGrid from "../RelatedGrid";
import RelatedList from "../RelatedList";
import SingleProductSkeleton from "./skeleton";
import RelatedListSkeleton from "../RelatedList/skeleton";
import { useUI } from "@/contexts/ui";
import { Description } from "./product-details";

const SingleProduct = ({ slug }: { slug: string }) => {
  const [product, setProduct] = useState<any>();
  const [selectedImage, setImage] = useState<any>();
  const [variations, setVariations] = useState<any>();
  const [selected, setSelected] = useState<any>();
  const [selectedVariation, setSelectedVariation] = useState<any>();
  const [qty, setQty] = useState<number>(1);

  const { cart, addToCart } = useUI();

  useEffect(() => {
    const fetchProducts = async () => {
      const prod = await WOOAPI.get(ENDPOINTS.PRODUCT_WITH_SLUG + slug);
      if (prod.status == 200) {
        const data = prod.data;
        if (data[0].variations.length > 0) {
          Promise.all(
            data[0].variations.map(async (variationId: number) => {
              const variationProduct = await WOOAPI.get(
                ENDPOINTS.PRODUCT + variationId
              );
              if (variationProduct.status === 200) {
                return variationProduct.data;
              } else {
                return null;
              }
            })
          )
            .then((variationProducts) => {
              const filteredVariations = variationProducts.filter(Boolean);
              console.log(filteredVariations);
              setVariations((prevVariations: any) => [
                prevVariations,
                filteredVariations,
              ]);
            })
            .catch((error) => {
              console.error("Error fetching variation products:", error);
            });
        }
        setProduct(data[0]);
        data[0]?.images[0]?.src ? setImage(data[0]?.images[0]?.src) : '';
        console.log(data);
      } else {
        console.log("failed to fetch catefories");
      }
    };
    fetchProducts();
  }, []);

  const handleAddItem = () => {
    addToCart({
      product_id: product.id,
      variation_id: null,
      quantity: qty
    })
    console.log(cart)
  }
  const handleQty = (qty:number) => {
    setQty(qty);
    console.log(cart)
  }
  const handleVariationSelect = (variation_details: { id: number, value: any}) => {
    console.log(selectedVariation);
    setSelectedVariation((prevVariations: any) => {
      const newData = prevVariations?.filter((variation: any) => variation.id !== variation_details.id);
      const updatedVariations = newData ? [...newData, variation_details] : [variation_details];
      return updatedVariations;
    });
  }

  if (!product) {
    return <div className="text-black md:container dark:text-white flex flex-col md:flex-row gap-5">
      
      <div className="basis-9/12 border-r-2 p-4">
          <SingleProductSkeleton/>
      </div>
      <div className="font-heading font-medium basis-3/12 p-4">
          <div className="pb-4">Releated Products</div>
          <RelatedListSkeleton/>
      </div>
      </div>;
  }
  return (
    <div className="flex md:container flex-col items-center">
      <div className="text-black dark:text-white flex flex-col md:flex-row gap-5 pb-24 border-b-2">
        <div className="aspect-[1/1.3] cursor-crosshair flex flex-col basis-4/12">
          <div className=" overflow-hidden">
            {/* Will replace by image carousel later on */}
            {selectedImage
             ? (
              <img
                src={selectedImage}
                alt={product.name}
                className="aspect-[1/1.3] object-cover inset-0 w-full h-full hover:scale-150 transition-all ease-in duration-150"
              />
            ) : (
              <Skeleton className="h-full w-full rounded-md" />
            )}
          </div>
          <div className="hidden md:flex pt-1 gap-1 overflow-scroll">
            {product?.images.map((image: any, index: number) => (
              <div key={index} className="aspect-square rounded-md cursor-pointer">
                {image?.src ? (
                  <img
                    src={image.src}
                    alt={product.name}
                    className="aspect-square object-cover inset-0 w-full h-full"
                    onClick={() => setImage(image.src)}
                  />
                ) : (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className=" basis-5/12 p-4 border-r-2 flex flex-col  md:pr-10">

          <div className="text-xs hidden md:block font-heading font-normal text-gray-500 dark:text-slate-300 pb-4">
            Home
            <FeatherIcon
              icon="chevrons-right"
              strokeWidth={1}
              size={12}
              className="inline"
            />{" "}
            Shop
            <FeatherIcon
              icon="chevrons-right"
              strokeWidth={1}
              size={12}
              className="inline"
            />{" "}
            {product.name}
          </div>

          <Link href="#">
            <div className=" text-2xl font-heading font-medium text-pink-500">
              {product.name}
            </div>
          </Link>

          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: product.short_description }}
              className="text-sm font-heading font-thin pt-4 list-disc"
            />
            <Description short={product.short_description} long={product.description} />
            <div className="flex mt-3 items-center">
              {[...Array(Math.floor(product.average_rating))].map(
                (_, index) => (
                  <div key={index} className="">
                    <FeatherIcon
                      icon="star"
                      strokeWidth={1}
                      size={12}
                      fill="#ffb22d"
                      className="text-[#ffb22d]"
                    />
                  </div>
                )
              )}
              {product.average_rating % 1 >= 0.5 && (
                <div className="">
                  <FeatherIcon
                    icon="star"
                    strokeWidth={3}
                    size={11}
                    fill="#fff"
                    className="text-[#ffb22d]"
                  />
                </div>
              )}
              <div className="text-xs pl-2">
                {product.rating_count} customer review(s)
              </div>
            </div>
          </div>

          <div className="text-3xl font-heading font-normal pt-6">
            {CURRENCY}
            {product.price}{" "}
            <span className="text-sm font-body">
              <span className="line-through">{product.regular_price}1499</span>{" "}
              {TAX_STATUS}
            </span>
          </div>

          <div className="pt-6">
            {product.type === "variable" && (
              <>
                {product.attributes.map((item: any, idx: number) => {
                  if (item.variation) {
                    return (
                      <>
                        <div
                          className="uppercase font-heading font-medium text-sm"
                          key={idx}
                        >
                          {item.name}
                        </div>
                        <div className="flex">
                          {item.options.map((variation: any, idx: number) => (
                            <div
                              className={`text-xs font-body font-bold p-2 mt-2 mr-2 rounded shadow-md shadow-slate-100 dark:shadow-gray-800 cursor-pointer hover:bg-slate-100 hover:text-black transition-all duration-300 ${selectedVariation?.filter((v:any) => v.id ===item.id && v.value == variation ).length > 0  ? 'bg-pink-500 text-white' : ''}`}
                              key={idx}
                              onClick={() => handleVariationSelect({id:item.id, value:variation})}
                            >
                              {variation}
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  }
                })}
              </>
            )}
          </div>

          <div className="pt-6 flex gap-2 items-center justify-center">
            <div className="basis-2/12">
            <Select onValueChange={(value) => handleQty(value)}>
              <SelectTrigger className="w-[80px] h-[55px] focus:ring-slate-50 hover:ring-slate-500">
                  <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent className="">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
              </SelectContent>
          </Select>
            </div>
            <div className="basis-5/12 text-center py-4 px-4 w-full shadow-sm cursor-pointer uppercase font-heading bg-pink-500 text-white text-sm font-medium hover:bg-pink-700 transition-all duration-300" onClick={() => handleAddItem()}>Add to Cart</div>
            <div className="basis-5/12 text-center py-4 px-4 shadow-sm cursor-pointer uppercase font-heading bg-black dark:bg-slate-100 dark:text-black dark:hover:bg-pink-500 dark:hover:text-white text-white text-sm font-medium hover:bg-pink-500 transition-all duration-300">Buy Now</div>
          </div>

          <div className="flex text-xs font-bold font-body pt-8 items-center justify-between gap-2 uppercase">
            <div className="flex gap-2 cursor-pointer items-center"><FeatherIcon icon="heart" size={14} strokeWidth={3}></FeatherIcon> Add to Wishlist</div>
            <div className="flex gap-2 cursor-pointer items-center"><FeatherIcon icon="share-2" size={14} strokeWidth={3}></FeatherIcon> Share</div>
          </div>
          <div className=" text-xs pt-10 flex flex-col font-heading uppercase">
            <span>SKU : {product.sku} </span>
            <span>Category : {product.categories.map((item:any,idx:number) => <>{item.name}</>)} </span>
          </div>
        </div>

        <div className="font-heading font-medium basis-3/12 p-4">
          Releated Products
          <div className="hidden md:block pt-6"><RelatedList ids={product.related_ids}/></div>
          <div className="md:hidden pt-6"><RelatedGrid ids={product.related_ids}/></div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
