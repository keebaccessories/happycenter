import React from 'react'
import CardFull from '../components/Card/CardFull'
import CarouselCard from '../components/Card/CarouselCard'
import Carousel from '../components/Card/CarouselCard'
import LayoutCenter from '../layout/LayoutCenter'



const Activities = () => {
    return (
       <LayoutCenter>
            <div className="bg-gray-100 w-full h-full">
            <div>
                {[...Array(1)].map((item, key)=> (
                    <CardFull/> 
                ))}
            </div>
            <div>
                <CarouselCard/>
            </div>
        </div>
       </LayoutCenter>
        
    )
}

export default Activities