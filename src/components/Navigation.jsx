import React from 'react'

const Navigation = () => {
    return (
        <nav className="max-w-6xl mx-auto rounded-xl bg-white  py-2 px-2 flex justify-between items-center relative z-20 bg-opacity-95 m-3 mt-0 ">
            <h1 className="text-md font-medium px-2">Material Kit 3</h1>
            <div className="space-x-4 text-sm">
                <button className="text-gray-700 font-normal">Pages</button>
                <button className="text-gray-700 font-normal">Sections</button>
                <button className="text-gray-700 font-normal">Docs</button>
                <button className="bg-slate-800 text-white px-4  rounded-md shadow-md shadow-slate-400 py-3 ">Free Download</button>
            </div>
        </nav>
    )
}

export default Navigation