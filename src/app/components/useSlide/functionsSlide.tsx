import { Props } from 'next/script';
import { useState, useEffect } from 'react';

export default function useSlider( initialIndex = 0, autoPlay = false, intervalTime = 3000) {

    const [current, setCurrent] = useState(initialIndex);

    const images = [
        {src: "/images/slider/eezycarePortfolio.png"},
        {src: "/images/slider/hotelv3Portfolio.png"},
        {src: "/images/slider/eezycarePortfolio.png"}
    ]

    const numberImagens = images

    const nextSlide = () => {
        setCurrent((prev) => (prev === numberImagens.length - 1 ? 0 : prev + 1));
        console.log(current);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? numberImagens.length - 1 : prev - 1));
        console.log(current);

    };

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(nextSlide, intervalTime);
            return () => clearInterval(interval);
        }
    }, [autoPlay, intervalTime]);

    return {
        current,
        nextSlide,
        prevSlide,
        Images: numberImagens
    };
}