'use client'

import Link from "next/link";
import Image from "next/image";
import Data from "@/app/components/data/data.json";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function Header() {

    const { id } = Data

    const [open, setOpen] = useState(true)

    const Close = () => {
        setOpen(true)
    }

    return (
        <header className="sticky top-0 z-10">
            <div className="block sm:hidden">
                <div className="bg-slate-800">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="flex flex-row justify-between items-center mx-4">
                            <Image src={"/logo.png"} alt="" width={40} height={40} className={!open ? "hidden" : "" } />


                            <button onClick={() => setOpen(!open)} className="z-10 flex items-center justify-center w-10 h-10 fixed -top-3 right-0 m-4">
                                <div className={`transition-transform duration-1000 ${open ? 'rotate-180' : ''}`}>
                                    {open ? <HamburgerMenuIcon className="w-10 h-10" /> : <Cross1Icon className="w-10 h-10" />}
                                </div>
                            </button>
                            {!open && (
                                <div className="flex flex-col items-center">
                                    <div className="w-screen h-screen">
                                        <div className="bg-blue-300 opacity-70 absolute inset-0">

                                            <nav className="space-y-6">
                                                {id.map((idfn, index) => (
                                                    <div key={index} className="flex flex-col items-center">
                                                        <Link href={idfn.srcId} onClick={Close}>{idfn.nameId}</Link>
                                                    </div>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </div>)}


                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block">
                <div className="bg-slate-800">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="flex flex-row justify-between items-center">
                            <Image src={"/logo.png"} alt="" width={40} height={40} />
                            <nav className="text-white">
                                <div className="space-x-6">
                                    {id.map((idfn, index) => (
                                        <Link key={index} href={idfn.srcId}>{idfn.nameId}</Link>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
