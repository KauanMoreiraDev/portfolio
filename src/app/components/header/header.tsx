'use client'

import Link from "next/link";
import Image from "next/image";
import Data from "@/app/components/data/data.json";
import { useState } from "react";

export default function Header() {

    const { id } = Data

    const [open, setOpen] = useState(true)

    return (
        <header className="sticky top-0 z-10">
            <div className="block sm:hidden">
                <div className="bg-slate-800">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="flex flex-row justify-between items-center">
                            <Image src={"/favicon.png"} alt="" width={40} height={40} />
                            <button onClick={() => setOpen(!open)}>
                                {open ? <div className="bg-lime-500 w-10 h-10"></div> :
                                    <div>
                                        <div className="flex flex-col items-center">
                                            <div className="w-screen h-screen">
                                                <div className="bg-blue-300 opacity-70 absolute inset-0">
                                                    <div className="flex flex-col items-end w-full">
                                                        <div className="bg-pink-500 w-10 h-10" />
                                                    </div>
                                                <nav className="space-y-6">
                                                    {id.map((idfn, index) => (
                                                        <div className="flex flex-col items-center">
                                                            <Link key={index} href={idfn.srcId}>{idfn.nameId}</Link>
                                                        </div>
                                                    ))}

                                                </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block">
                <div className="bg-slate-800">
                    <div className="mx-auto max-w-screen-lg">
                        <div className="flex flex-row justify-between items-center">
                            <Image src={"/favicon.png"} alt="" width={40} height={40} />
                            <nav className="text-white">
                                <div className="space-x-6">
                                    {id.map((idfn, index) => (
                                        <Link href={idfn.srcId}>{idfn.nameId}</Link>
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
