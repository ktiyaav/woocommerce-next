import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@public/assets/globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { UIProvider } from "@/contexts/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          <Navbar background="bg-white" />
          <div className="pt-24 min-h-screen bg-white dark:bg-black">{children}</div>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
