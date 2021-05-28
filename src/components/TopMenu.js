import React from 'react'

import { BrowserRouter, Route, Router,Link } from "react-router-dom";



function TopMenu() {
    return (
        <div>
            <ul className="flex flex-row justify-center bg-gray-700">
                <li className="hover:bg-white">
                    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-10 text-blue-700 font-semibold" to="/Home">Home</Link>
                </li>
                <li>
                    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-10 text-blue-700 font-semibold" to="/Course">Khoa Hoc</Link>
                </li>
                <li>
                    <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-10 text-blue-700 font-semibold" to="/Course">Ngoai Khoa</Link>
                </li>
            </ul>
    </div>
  
    )
}

export default TopMenu

