"use client";
import FeatherIcon from "feather-icons-react";
import React, { useEffect, useState } from "react";
import RelatedList from "@/components/Products/RelatedList";

const ThankyouPage = ({data} : {data:any}) => {
    console.log(data)
    return (
        <div className="pb-24  max-w-5xl m-auto ">
            <div className="flex font-heading flex-col items-center border-b py-4 sm:flex-row">
                <h4 className="text-xl font-medium text-green-500 flex items-center space-x-2 uppercase">
                    <FeatherIcon icon="gift" className="text-green-500" /> <span>Thanks for your order</span>
                </h4>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="flex items-center justify-start space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <FeatherIcon icon="check" className="text-white" size={16} />
                        </div>
                        <span className="text-base font-heading font-medium uppercase">Shop</span>
                        <FeatherIcon icon="chevrons-right" size={19}></FeatherIcon>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <FeatherIcon icon="check" className="text-white" size={16} />
                        </div>
                        <span className="text-base font-heading font-medium uppercase">Delivery</span>
                        <FeatherIcon icon="chevrons-right" size={19}></FeatherIcon>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <FeatherIcon icon="check" className="text-white" size={16} />
                        </div>
                        <span className="text-base font-heading font-medium uppercase">Payment</span>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="px-6 pt-8 md:basis-2/3 flex flex-col bg-white shadow-xl pb-20">

                    <h4 className="font-heading text-xl font-medium">Your order has been placed!</h4>
                </div>

                <div className="mt-10 px-4 pt-8 lg:mt-0 hidden  md:flex md:flex-col md:basis-1/3 space-y-4 bg-pink-100 shadow-xl pb-20">
                    <span className="font-heading text-xl font-medium text-black">Most Bought Products</span>
                    <RelatedList ids={[12078, 12076, 12306, 12077]} />
                    <div className="font-heading italic  text-red-800 capitalize font-bold text-center border-b border-red-800 mt-10 pt-10">
                        We Respect your privacy
                    </div>
                    <span className="font-heading text-sm text-center pb-10">
                        Every single bit of your information is 100% safe with us. We won't trade or share the
                        information which you provide online with anyone.
                    </span>
                    <div className="bg-white p-6 mt-10 flex flex-col text-center">
                        <span className="text-red-700 font-heading font-medium text-xl">
                            Need Help? Email us at
                        </span>
                        <span className="text-black font-heading font-medium text-base">
                            hello@shaktisaurav.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankyouPage;
