import type { Metadata } from "next";
import "@public/assets/globals.css";
import { UIProvider } from "@/contexts/ui";
import { Quicksand, Jost } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Script from 'next/script';

const jost = Jost({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-jost",
});
const qs = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-qs",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${jost.variable}  
        ${qs.variable}`}
      >
        <UIProvider>
          <div className="pt-20 md:pt-24 min-h-screen antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900">
            {children}
          </div>
        </UIProvider>
        <Toaster 
          position="top-center" 
          richColors 
          // closeButton 
        />
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
      </body>
    </html>
  );
}
