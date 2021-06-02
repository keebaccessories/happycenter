import React from 'react'
import SearchBox from '../components/Search/SearchBox'




const LayoutCenter = ({children}) => {
    return (
        <div>
            <div className="flex flex-col bg-blue-100 h-full">

                <div className="flex justify-center pt-20 pb-20">
                    <img className="w-1/4" src="./assets/images/text.png"/>
                </div>
                    <SearchBox/>
            </div>
            {children}
        </div>
    );
};

export default LayoutCenter
