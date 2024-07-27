"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = [
    '/images/eezycare V1.png',
    '/images/eezycare V2.png',
    '/images/marina do lago v2.png',
    '/images/portifolio.png',
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
        <div className="relative mx-auto overflow-hidden w-1000 h-400">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, index) => (
                    <Image key={index} src={src} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" style={{ maxHeight: '400px' }} />
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