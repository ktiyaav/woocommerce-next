"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import CategorySlider from "../ui/carousel/catslider";
import { useUI } from '@/contexts/ui';
import BannerCard from "../ui/banner";
import BannerSliderBlock from "../ui/carousel/bannerslider";

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
    {categories && <CategorySlider type="rounded" data={categories} width={192} height={192}/>}   
    {<BannerCard banner={banner} href="" width={200} height={192} boxed={true}/>} 
    {<BannerSliderBlock banners={banners} width={200} height={192} boxed={true} />}
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
const banners = [
  {
    name:'Banner',
    image: {
      src: '/assets/images/slider/1.jpg'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/slider/2.jpg'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/slider/3.jpg'
    }
  }
]