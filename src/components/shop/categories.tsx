"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import Carousel from "../ui/carousel/embla";
import CategoryBlock from "./categories/slider";
import { useUI } from '@/contexts/ui';

export default function AllCategories() {
  const { theme } = useUI();
  const [categories,setCategories] = useState<any>();
  useEffect(() => {
        const fetchCategories = async () => {
            console.log('fetch')
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
    {categories && <CategoryBlock type="rounded" data={categories}/>}
    
   </div>
   </>
  );
}
