"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import FeatherIcon from "feather-icons-react";
import { CURRENCY } from "@/config/constants";

const ProductsGrid = () => {
  const [products,setProducts] = useState<any>();
  const [hoveredProduct, setHoveredProduct] = useState<any>(null);
  useEffect(() => {
        const fetchProducts = async () => {
            const prod = await WOOAPI.get(ENDPOINTS.PRODUCTS);
            if(prod.status == 200){
                const data = prod.data;
                setProducts(data);
            } else {
                
                console.log('failed to fetch catefories');
            }
        }
        fetchProducts();
  },[])

  if(!products) { 
    // products skeleton
    return null;
  }
  return <>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5 text-black container dark:text-white">
    {console.log(products)}
    {products.map((item: any, idx: number) => (
        <div 
            className="text-black shadow-sm mb-4 lg:mb-8 cursor-pointer hover:shadow-xl rounded-md transition-all duration-500 ease-in-out pb-3" 
            key={idx}
            onMouseEnter={() => setHoveredProduct(idx)}
            onMouseLeave={() => setHoveredProduct(null)}
        >
            <div className="aspect-square">
                {item?.images[0]?.src ? (
                    <img src={item?.images[0]?.src} alt={item.name} className="object-cover inset-0 w-full h-full" />
                ) : (
                    <Skeleton className="h-full w-full rounded-md" />
                )}
            </div>
            <div className="p-2 lg:p-4">
                <div className="text-sm font-heading font-normal p-2 pt-3">{item.name}</div>
                <div className="text-sm font-body font-bold pl-2 flex items-center gap-2">{CURRENCY} {item.price} <span className="text-xs font-medium">inclusive of taxes</span></div>
            </div>
            {hoveredProduct === idx && (
                <div className="pl-4 lg:pl-6 m-auto align-bottom start">
                    <div className="font-body text-sm uppercase font-extrabold">
                        {item.variations.length > 0 ? 'Select Options' : 'Add to Cart'}
                    </div>
                </div>
            )}
        </div>
    ))}
  </div>
  </>;
}
export default ProductsGrid;