'use client'

import Data from "@/app/components/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/app/context/ThemeContext";

const { menu } = Data

const Header = () => {
    
    const {theme ,setTheme} = useTheme();

    const [open ,setOpen] = useState(true);
    
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    
    const menuMobile = () => {
        setOpen(!open)
    }

    const Close = () => {
        setOpen(!open)
    }

    return (
        
        <header className={`w-screen sticky top-0 z-50 ${theme === "dark" ? "bg-slate-800" : "bg-gray-300"}`}>
            
            <div className="Mobile">
                <div className="block sm:hidden">
                    <div className="w-full h-full ">
                        <div className="flex flex-row items-center justify-evenly">
                            <Link href={menu[0].srcLink}>
                                <Image src={"/logo.png"} alt="logo Kdev" width={400} height={400} className="w-10"/>
                            </Link>

                            <button onClick={menuMobile} className="z-30 pl-5">
                                {open ? <Menu/> : <X/>}
                            </button>
                            {!open && (
                                <div className={`w-screen h-screen absolute top-0 ${theme === "dark" ? "text-white bg-slate-900" : "text-black bg-slate-400" }`}>
                                    <div className="flex flex-col items-center justify-between py-20">
                                    {menu.map((items, index) => (
                                        <Link key={index} href={items.srcLink} className="py-3" onClick={menuMobile}>{items.nameLink}</Link>
                                    ))}
                                    </div>
                                </div>
                            )}

                            <button onClick={toggleTheme} className="w-2/12 h-full">
                                <div className="relative bg-transparent w-full h-full rounded-full border-black border p-1">
                                    <div className={`absolute top-[0.15rem] flex justify-center h-full w-[44%] transition-transform ease-in-out duration-1000 ${theme === "dark" ? "translate-x-0" : "translate-x-full"}`}>
                                        <div className="bg-slate-500 rounded-full w-4/5 h-4/5 shadow-md border-black border"/>
                                    </div>
                                    <div className="flex flex-row justify-between items-center h-full px-2">
                                        <Moon className="w-4 h-4"/>
                                        <Sun className="w-4 h-4"/>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="desktop">
                <div className="hidden sm:block">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="flex flex-row items-center justify-between">
                            <Link href={menu[0].srcLink}>
                                <Image src={"/logo.png"} alt="logo Kdev" width={400} height={400} className="w-1/12" />
                            </Link>
                            <div className="Links">
                                {menu.map((item, index) => (
                                    <Link key={index} href={item.srcLink} className={`${theme === "dark" ? "text-white" : "text-black"} px-3`}>{item.nameLink}</Link>
                                ))}
                            </div>
                            <button onClick={toggleTheme} className="w-1/12 h-full">
                                <div className="relative bg-transparent w-full h-full rounded-full border-black border p-1">
                                    <div className={`absolute top-[0.15rem] flex justify-center h-full w-[45%] transition-transform ease-in-out duration-1000 ${theme === "dark" ? "translate-x-0" : "translate-x-full"}`}>
                                        <div className="bg-slate-500 rounded-full w-4/5 h-4/5 shadow-md border-black border"/>
                                    </div>
                                    <div className="flex flex-row justify-between items-center h-full px-2">
                                        <Moon className="w-4 h-4"/>
                                        <Sun className="w-4 h-4"/>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;