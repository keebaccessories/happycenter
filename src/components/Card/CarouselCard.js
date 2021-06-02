import React from 'react'
import CardSmall from './CardSmall'

function CarouselCard() {
    return (
        <div>
            <CardSmall/>
        </div>
        // <div className="flex">
        //     {[...Array(5)].map((item, key)=> (
        //                 <CardSmall/> 
        //     ))}
        // </div>
    )
}

export default CarouselCard
