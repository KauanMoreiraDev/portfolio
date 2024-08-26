"use client";

import Data from "@/app/components/data/data.json"
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import useSlider from "../useSlide/functionsSlide";

interface SliderProps{
    size?: string;
}

const handleClick = () => {
    console.log('você entrou em contato')
}

const Slider = ({size} : SliderProps) => {

    const { current, nextSlide, prevSlide, Images } = useSlider();
    
    return (
        <div className={`relative mx-auto overflow-hidden w-full h-full shadow-xl`}> 
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {Images.map((items, index) => (
                    <Image key={index} src={items.src} alt={`Slide`} width={1500} height={1500} className="w-full h-full object-cover flex-shrink-0"/>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 flex justify-start items-center w-1/12 h-full opacity-100 "><ChevronLeft className="text-black " /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 flex justify-end items-center w-1/12 h-full opacity-100 "><ChevronRight className="text-black " /></button>
        </div>
    );
};


export default Slider;