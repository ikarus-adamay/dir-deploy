import React from 'react'
import CarouselCard from './CarouselCard'

const Slider = () => {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                <CarouselCard />
            </div>
        </div>
    );
}

export default Slider
