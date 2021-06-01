import React from 'react'
import Search from '../components/Search';
import TopMenu from '../components/TopMenu';

function Home() {
    return (
        <div className="bg-blue-100 h-full">

            <div className="flex justify-center pt-20 pb-20">
                <img className="w-1/4" src="./assets/images/text.png"/>
            </div>
            <Search/>
            <TopMenu/>
        </div>
    )
}

export default Home
