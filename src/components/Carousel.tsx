import React, { useState } from "react";
import left from '../assets/left.svg';
import right from '../assets/right.svg';

interface CarouselProps {
    items: string[]; // Array of carousel items (e.g., image URLs or text)
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle Previous Button Click
    const handlePre = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    // Handle Next Button Click
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (

        <div className="flex justify-between my-4">
            <button onClick={handlePre} aria-label="Previous Slide">
                <img src={left} alt="Previous" />
            </button>

            <div className="flex items-center space-x-2">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-[#603AE5]" : "bg-[#F0ECFD]"}`}
                    ></div>
                ))}
            </div>


            <button onClick={handleNext} aria-label="Next Slide">
                <img src={right} alt="Next" />
            </button>
        </div>
    );
};

export default Carousel;
