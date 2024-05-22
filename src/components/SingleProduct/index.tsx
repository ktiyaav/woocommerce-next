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
                // console.log(data)
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
  <div className="text-black container dark:text-white justify-stretch flex">
        <div></div>
        <div>{product.name}</div>
        <div></div>
  </div>
  </>;
}
export default SingleProduct;
