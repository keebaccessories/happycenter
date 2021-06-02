import React from 'react'

const CommentInput = () => {
    return (
        <div className="relative flex flex-row px-80">
            <input className="w-full p-3 pl-5 border-2 rounded-xl " type="text" placeholder="Viết đánh giá ..."/>
            <div className="flex justify-end items-center text-blue-500 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 absolute object-right" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"/></svg>
            </div>
        </div>
    )
}

export default CommentInput
