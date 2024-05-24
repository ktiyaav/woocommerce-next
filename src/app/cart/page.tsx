"use client"
import { ENDPOINTS } from '@/config/routes';
import { useUI } from '@/contexts/ui';
import WOOAPI from '@/utils/woo';
import React, { useEffect, useState } from 'react';

export default function CartPage() {
    const [data, setData] = useState<any>();
    const { cart } = useUI();
    useEffect(() => {
        const fetchProducts = async() => {
            Promise.all(
                cart.map(async (item:any) => { 
                    const res = await WOOAPI.get(
                    ENDPOINTS.PRODUCT + item.product_id
                  )
                  if (res.status === 200) {
                    return res.data;
                  } else {
                    return null;
                  }}
                )
            )
            .then((data) => {
                setData((prevData: any) => [
                    prevData,
                    data,
                ]);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
        } 
        fetchProducts();
    })
  return (
    <div className="flex justify-around container">
        {data && console.log(data)}
        <div className=''>Product</div>
        <div className=''>Price</div>
        <div className=''>Quantity</div>
        <div className=''>Subtotal</div>
    </div>
  );
}