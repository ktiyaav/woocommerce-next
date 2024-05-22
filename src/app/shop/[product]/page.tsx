// pages/products/[productId].js
"use client"
import SingleProduct from '@/components/SingleProduct';
import { usePathname, useRouter, useParams, useSearchParams } from 'next/navigation';
const Product = ({product}:{product:any}) => {
  let slug = usePathname();
  slug = slug.substring(5);
  return (
    <div>
      <SingleProduct slug={slug}/>
    </div>
  );
};

export default Product;
