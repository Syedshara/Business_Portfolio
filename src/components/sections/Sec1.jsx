import React from 'react'
import Counter from '../Counter'

const Sec1 = () => {
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y   md:divide-x md:divide-y-0   divide-slate-200 text-center ">
            <div className="p-3 m-3">
                <h2 className="text-5xl font-bold">
                    <Counter number={70} />+</h2>
                <p className="text-2xl text-gray-600 mt-3 font-semibold">Coded Elements</p>
                <span className="text-gray-950 font-thin text-sm mt-2 block">
                    From buttons, to inputs, navbars, alerts or cards, you are covered
                </span>
            </div>
            <div className="p-6">
                <h2 className="text-5xl font-bold"><Counter number={15} />+</h2>
                <p className="text-2xl text-gray-600 mt-3 font-semibold">Design Blocks</p>
                <span className="text-slate-950 font-thin text-sm mt-2 block">
                    Mix the sections, change the colors and unleash your creativity
                </span>

            </div>
            <div className="p-6">
                <h2 className="text-5xl font-bold"><Counter number={4} /></h2>
                <p className="text-2xl text-gray-600 mt-3 font-semibold">Pages</p>
                <span className="text-slate-950 font-thin text-sm mt-2 block">
                    Save 3-4 weeks of work when you use our pre-made pages for your websit
                </span>
            </div>
        </div>
    )
}

export default Sec1