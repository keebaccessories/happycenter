import React from 'react'

function Sale(props) {
    return (
        <div {...props} className="absolute flex flex-col top-0 right-4 items-center">
            <p className="absolute text-white text-center font-medium pt-3">10%</p>
            <img className="w-10" src="./assets/images/Sale.png"></img>
        </div>
    )
}

export default Sale
