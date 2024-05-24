"use client"
import * as React from "react"
import Link from "next/link"
import Logo from "@public/assets/images/logo.png";
// import LogoLight from "@/assets/images/logo-white.png";
import { Button } from "@/components/ui/button"
import FeatherIcon from "feather-icons-react";
import useTheme, { updateTheme } from "@/utils/theme";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { useUI } from "@contexts/ui";
interface NavbarProps {
    background: string;
}
const Navbar: React.FC<NavbarProps> = ({ background }) => {
  const { theme, setTheme, cart } = useUI();
    
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        updateTheme(savedTheme);
    }
  },[theme])
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateTheme(newTheme);
  };

  return (
    <>
   <div className={` font-body shadow-md shadow-slate-100 dark:shadow-gray-950 h-16 fixed w-full p-3 px-10 lg:px-10 m-auto z-50 bg-white dark:bg-gray-950 dark:border-slate-300/10 text-black dark:text-slate-200`}>
        <div className=" flex items-center justify-between md:container">
                <div className="">
                    {theme === 'dark' ? 
                    <Link href="/"><img src={Logo.src} alt="Logo" className="h-4 w-auto sm:h-[1.3rem] pl-2" /></Link>
                    :
                    <Link href="/"><img src={Logo.src} alt="Logo" className="h-5 w-auto sm:h-6" /></Link>}
                </div>

                
                <div className="hidden md:block">
                    <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-2">
                                <NavigationMenuLink asChild>
                                <a
                                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                    <FeatherIcon icon="shopping-bag"/>
                                    <div className="mb-2 text-lg font-medium">
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                    Shop xyz
                                    </p>
                                </a>
                                </NavigationMenuLink>
                            </li>
                            <Link href="/hosting">
                                <ListItem title="Shirts">
                                    Abxyz
                                </ListItem>
                            </Link>
                            <Link href="/hosting">
                                <ListItem title="Shirts">
                                    Abxyz
                                </ListItem>
                            </Link>
                            
                            
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-2">
                                <NavigationMenuLink asChild>
                                <a
                                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                >
                                    <FeatherIcon icon="shopping-bag"/>
                                    <div className="mb-2 text-lg font-medium">
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                    Shop xyz
                                    </p>
                                </a>
                                </NavigationMenuLink>
                            </li>
                            <Link href="/hosting">
                                <ListItem title="Shirts">
                                    Abxyz
                                </ListItem>
                            </Link>
                            <Link href="/hosting">
                                <ListItem title="Shirts">
                                    Abxyz
                                </ListItem>
                            </Link>
                            
                            
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="hidden md:flex items-center">
                    <Link href="/cart" className=" mr-4"><div className=""><FeatherIcon icon="shopping-cart" className="p-[3px] " strokeWidth="2" size="24"/></div><span className="text-xs bg-slate-100 rounded-[100%] absolute w-[4px] h-[4px] top-[18px] l-[10px] r-[10px] ml-6 mt-4">{cart.length}</span></Link>
                    <Button variant="outline" className="shadow-md"><Link href="/login">Login</Link></Button>
                    {
                        theme === 'dark' ? 
                        <div onClick={toggleTheme} className="border p-[6px] ml-3 rounded-md shadow-md cursor-pointer hover:bg-slate-100 dark:hover:text-black ">
                        <FeatherIcon icon="sun" className="p-[3px]" strokeWidth="1" size="24"/>
                        </div>
                        : 
                        <div onClick={toggleTheme} className="border p-[6px] ml-3 rounded-md shadow-md cursor-pointer  hover:bg-slate-100 dark:hover:text-black">
                        <FeatherIcon icon="moon" className="p-[3px]" strokeWidth="1" size="24"/>
                        </div>
                    }
                </div>
                <div className="flex md:hidden">
                <Link href="/cart" className=" mr-4"><div className=""><FeatherIcon icon="shopping-cart" className="p-[3px] " strokeWidth="2" size="24"/></div></Link>
                    <Drawer>
                        <DrawerTrigger><FeatherIcon icon="menu"/>  </DrawerTrigger>
                        <DrawerContent className="h-[80vh]">
                            <DrawerHeader>
                            <DrawerTitle>Hi There!</DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                            </DrawerHeader>
                            <div className="flex justify-center flex-col">
                                <Link href="/login" className="p-4 rounded-sm shadow-sm w-full font-semibold flex justify-between items-center">
                                    Login
                                    <FeatherIcon icon="chevrons-right" size="15" className=""/>
                                </Link>
                            </div>
                            
                            <DrawerFooter>
                            <DrawerClose>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                        </Drawer>

                </div>
    </div>
    </div>
    </>
  )
}

const ListItem = React.forwardRef< React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> >(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
            <a
            ref={ref}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            {...props}
            >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
            </p>
            </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar;