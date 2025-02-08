import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 50) {
                console.log("scrolling");
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="max-w-7xl mx-auto rounded-xl bg-white py-2 px-2 flex justify-between items-center   bg-opacity-95 m-3 mt-3 transition-all duration-300 fixed z-50 top-0 left-0 right-0 w-full shadow-lg">
            <h1 h1 className="text-md font-medium px-2" > Material Kit 3</h1 >
            <div className="space-x-4 text-sm">
                <button className="text-gray-700 font-normal">Pages</button>
                <button className="text-gray-700 font-normal">Sections</button>
                <button className="text-gray-700 font-normal">Docs</button>
                <button className="bg-slate-800 text-white px-4 rounded-md shadow-md shadow-slate-400 py-3">Free Download</button>
            </div>
        </nav >
    );
};

export default Navigation;
