"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import FeatherIcon from "feather-icons-react";
import { CURRENCY } from "@/config/constants";
import Link from 'next/link';

const SingleProduct = ({slug} : {slug: string}) => {
  const [product,setProduct] = useState<any>();
  useEffect(() => {
        const fetchProducts = async () => {
            const prod = await WOOAPI.get(ENDPOINTS.PRODUCT_WITH_SLUG + slug);
            if(prod.status == 200){
                const data = prod.data;
                setProduct(data[0]);
                console.log(data)
            } else {
                console.log('failed to fetch catefories');
            }
        }
        fetchProducts();
        
  },[])

  if(!product) { 
    // products skeleton
    return null;
  }
  return <>
  <div className="text-black container dark:text-white flex flex-col md:flex-row">

        <div className="aspect-[1/1.3] max-w-md cursor-crosshair flex flex-col">
                <div className="">
                    {product?.images[0]?.src ? (
                        <img src={product?.images[0]?.src} alt={product.name} className="aspect-[1/1.3] object-cover inset-0 w-full h-full" />
                    ) : (
                        <Skeleton className="h-full w-full rounded-md" />
                    )}
                </div>
                <div className="flex pt-1 gap-1">
                {product?.images.map((image:any, index:number) => (
                    <div key={index} className="aspect-square rounded-md">
                        {image?.src ? (
                            <img src={image.src} alt={product.name} className="aspect-square object-cover inset-0 w-full h-full" />
                        ) : (
                            <Skeleton className="absolute inset-0 w-full h-full rounded-md" />
                        )}
                    </div>
                ))}
                </div>
                
        </div>

        <div className="border-right">
            {product.name}
        </div>
        
        <div><div className="font-heading font-bold">Releated Products</div></div>
  </div>
  </>;
}
export default SingleProduct;
