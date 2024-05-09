"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import Slider from "./slider";

const CategorySlider = () => {
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
  return <Slider type="rounded" data={categories} width={192} height={192}/>;
}
export default CategorySlider;