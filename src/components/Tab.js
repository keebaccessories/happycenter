import React from 'react'
import About from '../pages/About'
import { BrowserRouter, Route, Router,Link } from "react-router-dom";

function Tab () {
    return (
        <div className="pt-10">
            <ul className="flex flex-row justify-center bg-blue-100">
                <li className="bg-none inline-block border-l border-t border-r rounded-t py-2 px-10 text-gray-500 font-semibold hover:bg-white">
                    <Link className="" to="/About">Giới thiệu</Link>
                </li>
                <li className="bg-none inline-block border-l border-t border-r rounded-t py-2 px-10 text-gray-500 font-semibold hover:bg-white">
                    <Link className="" to="/Course">Khóa học</Link>
                </li>
                <li className="bg-none inline-block border-l border-t border-r rounded-t py-2 px-10 text-gray-500 font-semibold hover:bg-white">
                    <Link className="" to="/Activities">Ngoại khóa</Link>
                </li>
            </ul>
    </div>
  
    )
}

export default Tab

