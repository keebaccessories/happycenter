import React from 'react'
import CardFull from '../../components/Card/CardFull'
import LayoutMaster from '../../layout/LayoutMaster'



const Activities = () => {
    return (
       <LayoutMaster>
           <section className="relative">
            <div className="flex flex-col justify-items-center	">
                <div>
                    {[...Array(5)].map((item, key)=> (
                        <CardFull/> 
                    ))}
                </div>
            </div>
           </section>
       </LayoutMaster>
        
    )
}

export default Activities