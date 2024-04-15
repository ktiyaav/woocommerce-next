"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";
import CategorySlider from "../ui/carousel/catslider";
import { useUI } from '@/contexts/ui';
import Banner from "../ui/banner";
import BannerSliderBlock from "../ui/carousel/bannerslider";
import Space from "../ui/space";

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
    {<BannerSliderBlock banners={bannerSlider} width={200} height={500} boxed={true} />}
    {<Banner layout="three" items={banners} href="" width={200} height={340} boxed={true}/>} 
    {<Space px={10}/>}
   </div>
   </>
  );
}

const banners = [
  {
    name:'Banner',
    image: {
      src: '/assets/images/features/1.png'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/features/features2.png'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/features/features3.png'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/features/features4.png'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/features/features5.png'
    }
  },
  {
    name:'Banner',
    image: {
      src: '/assets/images/features/features7.png'
    }
  }
]
const bannerSlider = [
  [{
    name:'Banner',
    image: {
      src: '/assets/images/slider/1.jpg'
    }
  }],
  [{
    name:'Banner',
    image: {
      src: '/assets/images/slider/2.jpg'
    }
  }],
  [{
    name:'Banner',
    image: {
      src: '/assets/images/slider/3.jpg'
    }
  }]
]