"use client"
import { ENDPOINTS } from "@/config/routes";
import WOOAPI from "@/utils/woo";
import { useEffect, useState } from "react";

const ProductsGrid = () => {
  const [products,setProducts] = useState<any>();
  useEffect(() => {
        const fetchProducts = async () => {
            const prod = await WOOAPI.get(ENDPOINTS.PRODUCTS);
            if(prod.status == 200){
                const data = prod.data;
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
  <div className="grid grid-cols-4">
    
  </div>
  </>;
}
export default ProductsGrid;