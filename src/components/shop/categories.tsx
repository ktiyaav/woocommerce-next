"use client"
import { ROUTES } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";

export default function AllCategories() {
  const [categories,setCategories] = useState<any>();
  useEffect(() => {
        const fetchCategories = async () => {
            console.log('fetchcat')
            const cat = await WOOAPI.get(ROUTES.CATEGORIES);
            console.log(cat)
            if(cat.status == 200){
                const data = cat.data;
                console.log(data)
                setCategories(data);
            }
        }
        fetchCategories();
  },[])
  return (
    <>
   <div className="">
    <p className="">All Categories</p>
    {console.log('hello')}
    {categories && categories.map((cat: any ,idx: number) => (
        <div className="" key={idx}>
            {console.log('now')}
            {cat.name}
            {cat.description}
            <img src={cat.image?.src} alt="" title = ""/>
        </div>
    ))}
   </div>
   </>
  );
}
