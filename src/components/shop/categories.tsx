"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import CategorySlider from "../ui/carousel/catslider";
import { useUI } from '@/contexts/ui';
import BannerCard from "../ui/banner";

export default function AllCategories() {
  const { theme } = useUI();
  const [categories,setCategories] = useState<any>();
  useEffect(() => {
        const fetchCategories = async () => {
            const cat = await WOOAPI.get(ENDPOINTS.CATEGORIES + '?per_page=100');
            if(cat.status == 200){
                const data = cat.data;
                setCategories(data);
            } else {
                console.log('failed to fetch catefories');
            }
        }
        fetchCategories();
  },[])

  if(!categories) { 
    // categories skeleton
    return null;
  }
  return (
    <>
   <div className="">
    {categories && <CategorySlider type="rounded" data={categories}/>}   
    {<BannerCard banner={banner} href="" width={200} height={192}/>} 
   </div>
   </>
  );
}

const banner = {
  name:'Banner',
  image: {
    src: '/assets/images/slider/3.jpg'
  }
}