import React from 'react'
import { Link } from 'react-router-dom'

function Botton() {
    return (
        <Link to="/Register">
            <div>
                <button class="bg-yellow-400 hover:bg-yellow-500 text-white shadow-xl font-bold text-sm p-1 m-1 rounded-lg w-1/3">Button</button>
            </div>
        </Link>
        
    )
}

export default Botton
