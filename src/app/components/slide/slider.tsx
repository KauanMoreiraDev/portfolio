"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = [
    '/videos/0802.mp4',
    '/images/slider/eezycare V2.png',
    '/images/slider/marina do lago v2.png',
    '/images/slider/portifolio.png',
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative overflow-hidden w-full h-full">
            <div className="flex w-full h-full transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, index) => (
                    <video key={index} controls src={src} typeof='video/mp4' width={400} height={200} className=" object-cover flex-shrink-0 h-full w-full"/>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-300 p-2 rounded-full">
                <Image src={'/images/seta-direita.png'} alt='seta' width={10} height={10} className='transform rotate-180'/>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-300 p-2 rounded-full">
            <Image src={'/images/seta-direita.png'} alt='seta' width={10} height={10}  className=''/>
            </button>
        </div>
    );
};


export default Carousel;