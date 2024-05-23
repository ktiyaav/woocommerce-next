"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import { Skeleton } from "../../ui/skeleton";
import FeatherIcon from "feather-icons-react";
import { CURRENCY } from "@/config/constants";
import Link from 'next/link';

const RelatedList = ({ids}: {ids : Array<number>}) => {
  const [products,setProducts] = useState<any>();

  useEffect(() => {
        const fetchProducts = async () => {
            const prod = await WOOAPI.get(ENDPOINTS.PRODUCTS + '?include=' + ids);
            if(prod.status == 200){
                const data = prod.data;
                console.log(data)
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
  
  <div className="flex text-black dark:text-white justify-stretch flex-col">
    {products.map((item: any, idx: number) => (
        <Link href={`/shop/${item.slug}`} key={idx}>
        <div className="text-black border bg-white dark:bg-gray-800 dark:text-white shadow-md md:shadow-sm mb-4 lg:mb-8  cursor-pointer hover:shadow-xl rounded-md transition-all duration-300 ease-in-out group flex" 
        >
            <div className="aspect-square max-w-24">
                {item?.images[0]?.src ? (
                    <img src={item?.images[0]?.src} alt={item.name} className=" aspect-square object-cover inset-0 h-full w-full" />
                ) : (
                    <Skeleton className="h-full rounded-md w-24" />
                )}
            </div>
            
            <div className="p-1 bg-white  dark:bg-gray-800 dark:text-white  transition-all duration-300 ">
                <div className="text-sm font-heading font-normal p-1 pl-2">{item.name}</div>
                <div className="text-sm font-body font-bold pl-2 flex items-center gap-2 pt-0">{CURRENCY} {item.price} <span className="text-xs font-medium">inclusive of taxes</span></div>
                <div className="flex pl-2 p-1 items-center">
                    {[...Array(Math.floor(item.average_rating))].map((_, index) => (
                        <div key={index} className="">
                            <FeatherIcon icon="star" strokeWidth={1} size={12} fill="#ffb22d" className="text-[#ffb22d]" />
                        </div>
                    ))}
                    {item.average_rating % 1 >= 0.5 && (
                        <div className="">
                            <FeatherIcon icon="star" strokeWidth={3} size={11} fill="#fff" className="text-[#ffb22d]" />
                        </div>
                    )}
                </div>
                {/* <div className="pl-1 gap-4 flex md:hidden group-hover:flex static justify-stretch  items-center ">
                    <div className="font-heading text-xs md:text-sm uppercase font-extrabold">
                        {item.variations.length > 0 ? 'Select Options' : 'Add to Cart'}
                    </div>
                    <div className="ml-auto mr-1"><FeatherIcon icon="heart" size={15}></FeatherIcon></div>
                </div> */}
            </div>
        </div>
        </Link>
    ))}
  </div>
  </>;
}
export default RelatedList;
