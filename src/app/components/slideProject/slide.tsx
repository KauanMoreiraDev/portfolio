'use client'

import Data from "../data/data.json";
import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface ProjectProps {
    position?: boolean;
    whatProject: "eezycare" | "hotel" | "barbearia";
    isFigma: boolean;
}

const { eezycare, hotel, barbearia } = Data

export default function SlideProjects({ position, whatProject, isFigma = false }: ProjectProps) {

    const projeto = whatProject === "eezycare" ? eezycare : whatProject === "hotel" ? hotel : barbearia;

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const fromHabilidades = () => {
        window.location.href = ("#habilidades")
    }

    const [open, setOpen] = useState(false);

    const modal = () => {
        setOpen(!open)
    };

    return (
        <div className={`mx-auto w-full h-full rounded-3xl shadow-xl`}>

            {projeto.map((item, index) => (

                <div key={index} className="min-w-full h-full p-5">

                    {position ?
                        <div className="flex flex-col sm:flex-row">
                            <div className="bg-slate-300 w-full h-full rounded-3xl">
                                <Image src={item.image} alt="" width={500} height={500} className="w-full h-full rounded-3xl" ></Image>
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2 h-full p-3">
                                <div className="w-full h-1/6 text-xl text-primary py-2">{item.title}</div>
                                {/* label com apenas 276 caracteres, nada mais */}
                                <div className="w-full h-48 overflow-hidden">{item.label}</div>
                                <div className="w-full h-full py-2">
                                    <div onClick={fromHabilidades} className="flex flex-row justify-start cursor-pointer">
                                        {isFigma ? <div className="flex flex-row h-full space-x-2">
                                            <div className="tailwindCss w-1/12 h-1/6 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128"><path fill="#840090" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" /></svg>
                                            </div>
                                            <div className="figma w-1/12 h-1/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="90%" viewBox="0 0 256 384"><path fill="#840090" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" /><path fill="#840090" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" /><path fill="#840090" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" /><path fill="#840090" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" /><path fill="#840090" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" /></svg>
                                            </div>
                                        </div> :
                                            <div className="flex flex-row h-full space-x-2">
                                                <div className="nextJs w-1/12 h-1/6 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="#840090" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z" /></svg>
                                                </div>
                                                <div className="typescript w-1/12 h-1/6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="#840090" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z" /></svg>
                                                </div>
                                                <div className="tailwindCss w-1/12 h-1/6 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128"><path fill="#840090" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" /></svg>
                                                </div>
                                                <div className="figma w-1/12 h-1/6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="90%" viewBox="0 0 256 384"><path fill="#840090" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" /><path fill="#840090" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" /><path fill="#840090" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" /><path fill="#840090" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" /><path fill="#840090" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" /></svg>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <button onClick={modal} className="bg-secoundary rounded-3xl p-1 text-white">Ver projeto completo</button>
                            </div>
                            {open && (

                                <div className="fixed inset-0 z-30 flex flex-col justify-center items-center h-screen">
                                    <div className="absolute inset-0 backdrop-blur-md"></div>
                                    <div className="relative z-40">
                                        <button onClick={modal} className="flex flex-row justify-end w-full p-1 pr-0"><X className="active:animate-spin" /></button>
                                        {item.link.endsWith('.png') ?
                                            <div className="h-[80vh] overflow-y-scroll">
                                                <Image alt="" src={item.link} width={1024} height={1000} loading="lazy" className="bg-white" />
                                            </div>
                                            :
                                            <div className="h-[80vh] w-[95vw] overflow-y-hidden">
                                                <iframe src={item.link} width={1024} height={1000} loading="lazy" className="bg-white w-full" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>

                        :

                        <div className="flex flex-col sm:flex-row">
                            <div className="bg-slate-300 w-full h-full rounded-3xl block sm:hidden">
                                <Image src={item.image} alt="" width={500} height={500} className="w-full h-full rounded-3xl" />
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2 h-full p-3">
                                <div className="w-full h-1/6 text-xl text-primary py-2">{item.title}</div>
                                {/* label com apenas 276 caracteres, nada mais */}
                                <div className="w-full h-48 overflow-hidden">{item.label}</div>
                                <div className="w-full h-full py-2">
                                    <div onClick={fromHabilidades} className="flex flex-row justify-start cursor-pointer">
                                    {isFigma ? <div className="flex flex-row h-full space-x-2">
                                            <div className="tailwindCss w-1/12 h-1/6 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128"><path fill="#840090" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" /></svg>
                                            </div>
                                            <div className="figma w-1/12 h-1/6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="90%" viewBox="0 0 256 384"><path fill="#840090" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" /><path fill="#840090" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" /><path fill="#840090" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" /><path fill="#840090" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" /><path fill="#840090" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" /></svg>
                                            </div>
                                        </div> :
                                            <div className="flex flex-row h-full space-x-2">
                                                <div className="nextJs w-1/12 h-1/6 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="#840090" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z" /></svg>
                                                </div>
                                                <div className="typescript w-1/12 h-1/6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><path fill="#840090" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0" /><path fill={theme === "dark" ? "#020617" : "#94a3b8"} d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z" /></svg>
                                                </div>
                                                <div className="tailwindCss w-1/12 h-1/6 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128"><path fill="#840090" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0" /></svg>
                                                </div>
                                                <div className="figma w-1/12 h-1/6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="90%" viewBox="0 0 256 384"><path fill="#840090" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" /><path fill="#840090" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" /><path fill="#840090" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" /><path fill="#840090" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" /><path fill="#840090" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" /></svg>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <button onClick={modal} className="bg-secoundary rounded-3xl p-1 text-white">Ver projeto completo</button>
                            </div>

                            {open && (
                                <div className="fixed inset-0 z-30 flex flex-col justify-center items-center h-screen">
                                    <div className="absolute inset-0 backdrop-blur-md"></div>
                                    <div className="relative z-40">
                                        <button onClick={modal} className="flex flex-row justify-end w-full p-1 pr-0"><X className="active:animate-spin" /></button>
                                        {item.link.endsWith('.png') ?
                                            <div className="h-[80vh] overflow-y-scroll">
                                                <Image alt="" src={item.link} width={1024} height={1000} loading="lazy" className="bg-white" />
                                            </div>
                                            :
                                            <div className="h-[80vh] w-[95vw] overflow-y-hidden">
                                                <iframe src={item.link} width={1024} height={1000} loading="lazy" className="bg-white w-full" />
                                            </div>
                                        }
                                    </div>
                                </div>
                            )}

                            <div className="bg-slate-300 w-full h-full rounded-3xl hidden sm:block">
                                <Image src={item.image} alt="" width={500} height={500} className="w-full h-full rounded-3xl" ></Image>
                            </div>
                        </div>
                    }

                </div>

            ))}

        </div>
    );
}