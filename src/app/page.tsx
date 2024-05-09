import React from 'react';
import dynamic from 'next/dynamic';
import { data } from '@/config/data';

// Define the type for component mapping
interface ComponentsMap {
  [key: string]: React.ComponentType<any>;
}

const components: ComponentsMap = {
  ShopCategory: dynamic(() => import('@/components/shop/categories')),
  BannerSlider: dynamic(() => import('@/components/ui/carousel/bannerslider')),
  Banner: dynamic(() => import('@/components/ui/banner')),
  Spacer: dynamic(() => import('@/components/ui/spacer'))
};

export default function Home() {
  return (
    <div className="">
      {data.map((item, idx) => {
        const Component = components[item.component];
        if (!Component) {
          // Handle the case where the component is not found
          return null;
        }
        return <Component key={idx} {...item} />;
      })}
    </div>
  );
}
