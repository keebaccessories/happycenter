import React from 'react'
import LayoutCenter from '../layout/LayoutCenter'
import About from './About'
 
const Home = () => {
    return (
        <div>
            <LayoutCenter>
                <section>
                    <About/>
                </section>
            </LayoutCenter>
        </div>
    )
}

export default Home



// function Home() {
//     return (
//         <div className="flex flex-col bg-blue-100 h-full">

//             <div className="flex justify-center pt-20 pb-20">
//                 <img className="w-1/4" src="./assets/images/text.png"/>
//             </div>
//             <SearchBox/>
//             <Tab/>
//         </div>
//     )
// }

// export default Home
