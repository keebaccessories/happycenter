import React from 'react'

function CardSlide() {
    return (
            <div className="flex items-center pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="object-left w-1/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    <div className="flex flex-row w-8/10">
                        <img className="w-1/4 p-1" src="./assets/images/image.jpg"></img>
                        <img className="w-1/4 p-1" src="./assets/images/image.jpg"></img>
                        <img className="w-1/4 p-1" src="./assets/images/image.jpg"></img>
                        <img className="w-1/4 p-1" src="./assets/images/image.jpg"></img>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="object-right w-1/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
    )
}

export default CardSlide
