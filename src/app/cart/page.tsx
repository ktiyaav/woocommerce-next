"use client";
import { CURRENCY } from "@/config/constants";
import { ENDPOINTS } from "@/config/routes";
import { useUI } from "@/contexts/ui";
import WOOAPI from "@/utils/woo";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [data, setData] = useState<any>([]);
  const { cart } = useUI();
  useEffect(() => {
    const fetchProducts = async () => {
      Promise.all(
        cart.map(async (item: any) => {
          const res = await WOOAPI.get(ENDPOINTS.PRODUCT + item.product_id);
          if (res.status === 200) {
            return res.data;
          } else {
            return null;
          }
        })
      )
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };
    fetchProducts();
  }, [cart.length]);

  if (data.length < 1) {
    return null;
  }
  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="relative shadow-md sm:rounded-lg w-full  max-w-[100vw]">
        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
          <thead className="text-xs text-black uppercase font-heading bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3 hidden md:table-cell"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: any, idx: number) => {
              const product = data.find((p: any) => p.id === item.product_id);
              if (product) {
                return (
                  <tr
                    key={idx}
                    className=" items-center odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="max-w-20">
                          <img
                            src={product.images[0]?.src}
                            alt=""
                            className=" aspect-square object-cover"
                          />
                        </div>
                        <div className="text-sm font-body max-w-xs sm:max-w-sm  md:max-w-md text-wrap">
                          {product.name}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4 hidden md:table-cell font-heading font-bold">
                      {CURRENCY}
                      {product.price}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col md:flex-row border items-center m-auto justify-between p-2 group hover:border-black">
                        <FeatherIcon
                          icon="plus"
                          size={18}
                          className="cursor-pointer"
                        />{" "}
                        {item.quantity}{" "}
                        <FeatherIcon
                          icon="minus"
                          size={18}
                          className="cursor-pointer"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell items-center m-auto font-heading font-bold">
                      {CURRENCY}
                      {Number(product.price) * Number(item.quantity)}
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <FeatherIcon icon="trash" size="20" />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <Link
        href="/checkout"
        className="border p-4 mt-10 rounded shadow-sm items-center justify-center uppercase max-w-md bg-pink-500 text-white cursor-pointer flex font-heading font-medium"
      >
        Proceed To Checkout
        <FeatherIcon
          icon="external-link"
          size="18"
          className="ml-2"
          strokeWidth={3}
        />
      </Link>
    </div>
  );
}
