"use client";
import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextInput } from "@components/ui/inputs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CURRENCY } from "@/config/constants";
import RelatedList from "@/components/Products/RelatedList";
import Link from "next/link";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [checkoutState, setCheckoutState] = useState(1);
  const [DeliveryMethod, setDeliveryMethod] = useState("standard-delivery");
  const [coupon, setCouponUsed] = useState("");

  const fields = [
    {
      step: 1,
      type: "text",
      name: "email",
      onchange: setEmail,
      label: "Email",
      icon: "mail",
      placeholder: "Enter billing email",
    },
    {
      step: 1,
      type: "text",
      name: "firstname",
      onchange: setfirstName,
      label: "Firstname",
      icon: "user",
      placeholder: "Enter First name",
    },
    {
      step: 1,
      type: "text",
      name: "lastname",
      onchange: setlastName,
      label: "Enter Last name",
      icon: "user",
      placeholder: "Enter last name",
    },
    {
      step: 2,
      type: "text",
      name: "street",
      onchange: setStreet,
      label: "Street Address",
      icon: "map-pin",
      placeholder: "Enter Street name",
    },
    {
      step: 2,
      type: "text",
      name: "town",
      onchange: setTown,
      label: "Town/City",
      icon: "map",
      placeholder: "Enter City name",
    },
    {
      step: 2,
      type: "text",
      name: "postcode",
      onchange: setZip,
      label: "Postcode",
      icon: "hash",
      placeholder: "Enter City name",
    },
    {
      step: 2,
      type: "text",
      name: "state",
      onchange: setState,
      label: "State",
      icon: "globe",
      placeholder: "Enter City name",
    },
    {
      step: 1,
      type: "text",
      name: "phone",
      onchange: setNumber,
      label: "Phone Number",
      icon: "phone-call",
      placeholder: "Enter your contact number",
    },
  ];
  const deliveryMethods = [
    {
      name: "standard-delivery",
      label: "Standard Delivery",
      price: "50",
    },
    {
      name: "express-delivery",
      label: "Express Delivery",
      price: "100",
    },
  ];
  const paymentMethods = [
    {
      name: "cod",
      label: "Cash On Delivery",
      description: "Pay online to get Free delivery",
    },
    {
      name: "razorpay",
      label: "UPI / Debit / Credit Card / Net Banking",
      description: "Pay via Razorpay secure Payment Gateway",
    },
  ];

  const handleStateChange = (step: number) => {
    setCheckoutState(step);
  };
  const handleDelivery = (way: string) => setDeliveryMethod(way);
  const handlePayment = () => null;
  const applyCoupon = () => null;

  return (
    <div className="pb-24  max-w-5xl m-auto ">
      <div className="flex font-heading flex-col items-center border-b py-4 sm:flex-row">
        <a
          href="#"
          className="text-xl font-medium text-green-500 flex items-center space-x-2 uppercase"
        >
          <FeatherIcon icon="check-circle" className="text-green-500" />{" "}
          <span>Secure Order Form</span>
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="flex items-center justify-start space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <FeatherIcon icon="check" className="text-white" size={16} />
            </div>{" "}
            <span className="text-base font-heading font-medium uppercase">Shop</span>
            <FeatherIcon icon="chevrons-right" size={19}></FeatherIcon>
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white font-medium text-sm font-heading">
              2
            </div>
            <span className="text-base font-heading font-medium uppercase">Delivery</span>
            <FeatherIcon icon="chevrons-right" size={19}></FeatherIcon>
            <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white font-medium text-sm font-heading">
              3
            </div>
            <span className="text-base font-heading font-medium uppercase">Payment</span>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="px-6 pt-8 md:basis-2/3 flex flex-col bg-white shadow-xl pb-20">
          {checkoutState > 1 && (
            <div
              className="pb-4 flex space-x-0 items-center cursor-pointer hover:text-blue-800"
              onClick={() => handleStateChange(checkoutState - 1)}
            >
              <FeatherIcon icon="chevrons-left" size={20} /> <span>Back</span>
            </div>
          )}

          <span className=" font-heading text-xl font-medium text-black">
            {checkoutState === 1 ?? "Customer Details"}
            {checkoutState === 1 && "Customer Details" }
            {checkoutState === 2 && "Delivery Address"}
          </span>
          <div className="max-w-md">
            {fields.map((item: any, idx: number) => {
              if (item.step === checkoutState)
                return (
                  <TextInput
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    onchange={item.onchange}
                    icon={item.icon}
                  />
                );
            })}
          </div>

          {checkoutState === 2 && (
            <>
              <h3 className="mt-10 font-heading text-xl font-medium text-black pb-2">
                Select Delivery Method
              </h3>
              <span className="pb-5 font-heading text-sm">
                Use coupon GTFIRST on payment page to get free delivery
              </span>
              <ul className="flex flex-col space-y-5 max-w-md font-heading">
                {deliveryMethods.map((item: any) => (
                  <li>
                    <input
                      type="radio"
                      id={item.name}
                      name="delivery"
                      value={item.name}
                      className="hidden peer"
                      required
                      onClick={() => handleDelivery(item.name)}
                    />
                    <label
                      htmlFor={item.name}
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">{item.label}</div>
                        <div className="w-full">
                          {CURRENCY}
                          {item.price}
                        </div>
                      </div>
                      <FeatherIcon icon="truck" />
                    </label>
                  </li>
                ))}
              </ul>
            </>
          )}

          {checkoutState === 3 && (
            <Accordion type="single" collapsible className="w-full border p-2">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex justify-start space-x-3">
                  <FeatherIcon icon="shopping-cart" size={20} />
                  <span className="text-base font-heading text-black font-normal ">
                    Show order summary
                  </span>
                </AccordionTrigger>
                <AccordionContent>Show list of products added</AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          {checkoutState === 3 && (
            <>
              <span className="mt-10 font-heading text-xl font-medium text-black">
                Got Coupons?
              </span>
              <div className=""></div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="flex justify-start space-x-3">
                        <span className="text-base font-heading text-blue-700 font-normal ">
                        Have a coupon? Click here to enter your code!
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                    <div className="flex space-x-3 items-end">
                        <input className="border p-[0.9rem] rounded w-full" onChange={(e) => setCouponUsed(e.target.value)}></input>
                        <div className="bg-red-500 px-20 py-4 rounded text-white font-heading uppercase cursor-pointer"
                        onClick={() => applyCoupon()}>Apply</div>
                    </div>
                    
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}
          {checkoutState === 3 && (
            <>
              <h3 className="mt-10 font-heading text-xl font-medium text-black pb-2">
                Select Payment Method
              </h3>
              <span className="pb-5 font-heading text-sm">
              All transactions are secure and encrypted. Credit card information is never stored on our servers.
              </span>
              <ul className="flex flex-col space-y-5 max-w-md font-heading">
                {paymentMethods.map((item: any) => (
                  <li>
                    <input
                      type="radio"
                      id={item.name}
                      name="delivery"
                      value={item.name}
                      className="hidden peer"
                      required
                      onClick={() => handleDelivery(item.name)}
                    />
                    <label
                      htmlFor={item.name}
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">{item.label}</div>
                        <div className="w-full">
                          {item.description}
                        </div>
                      </div>
                      <FeatherIcon icon="check-square" />
                    </label>
                  </li>
                ))}
              </ul>

              <span className="pb-5 font-heading text-sm pt-4">
              Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </span>
              <p className="">
				<label className="">
				<input type="checkbox" className="" name="terms" id="terms" />
					<span className="font-heading text-sm pt-4 pl-1">I have read and agree to the website <Link href="/terms-conditions/" className="">terms and conditions</Link></span>
				</label>
				<input type="hidden" name="terms-field" value="1" />
			</p>
            </>
          )}

          <div
            onClick={() => {
              checkoutState === 1 && handleStateChange(2);
              checkoutState === 2 && handleStateChange(3);
              checkoutState === 3 && handlePayment();
            }}
            className={`border p-4 mt-10 rounded shadow-sm items-center justify-center uppercase max-w-md ${checkoutState === 3 ? 'bg-green-500' : 'bg-pink-500'} text-white cursor-pointer flex font-heading font-medium ${checkoutState === 3 ? 'hover:bg-green-700' : 'hover:bg-pink-700'} transition-all ease-in duration-300`}
          >
            {checkoutState === 1 && "Proceed to Delivery" }
            {checkoutState === 2 && "Proceed to Payment"}
            {checkoutState === 3 && "Order Now"}
            
            <FeatherIcon icon="arrow-right-circle" size="18" className="ml-2" strokeWidth={3} />
          </div>
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

export default CheckoutPage;
