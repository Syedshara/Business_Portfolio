import React from 'react'

const Flip = () => {
    const url2 = "https://images.pexels.com/photos/1367105/pexels-photo-1367105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    const url3 = "https://images.pexels.com/photos/1559402/pexels-photo-1559402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    return (
        <div className="group h-72 w-72 md:w-96 md:h-96 [perspective:1000px] animate-floating">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-4 md:px-6 text-center text-slate-200 [backface-visibility:hidden]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full mx-auto rounded-xl object-cover shadow-xl shadow-black/40" src={url2} alt="Front" />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                    <div className="w-full h-full text-white text-center flex flex-col gap-2 justify-center items-center relative z-10">
                        <span className="text-3xl sm:text-2xl font-extrabold">📎</span>
                        <h2 className="text-2xl md:text-3xl font-semibold mt-4">Feel the <br /> Material Kit</h2>
                        <p className="p-2 text-sm md:text-md font-light mt-5 mx-auto">All the Bootstrap components that you need in a development have been re-designed with the new look.</p>
                    </div>
                </div>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/40 px-6 sm:px-4 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] z-40">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={url3} alt="Back" />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                    <div className="absolute inset-0 w-full h-full flex flex-col gap-2 justify-center items-center z-20 text-white">
                        <h2 className="text-2xl md:text-3xl font-semibold mt-4">Discover More</h2>
                        <p className="p-2 px-4 text-sm md:text-md font-light mt-5 mx-auto">You will save a lot of time going from prototyping to full-functional code because all elements are implemented.</p>
                        <button className="bg-white text-black px-6 text-sm sm:text-xs mt-4 rounded-md py-2">Start with headers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flip
