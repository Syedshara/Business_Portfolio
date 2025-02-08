import React from 'react'
import Flip from '../Flip';

const Sec2 = () => {

    return (
        <div className="max-w-5xl mx-auto mt-36 mb-24 grid grid-cols-1 md:grid-cols-2 gap-0 items-center justify-center">

            <Flip />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col ">
                    <span className="text-green-500 text-4xl">📄</span>
                    <div className='flex flex-col items-star justify-start'>
                        <h1 className="font-semibold text-2xl">Full Documentation</h1>
                        <p className="text-gray-600 text-sm mt-2">
                            Built by developers for developers. Check the foundation and you will find everything inside our documentation.
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">🖥️</span>
                    <div className='flex flex-col items-star justify-start'>
                        <h3 className="font-semibold text-2xl">Bootstrap 5 Ready</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.
                        </p>
                    </div>
                </div>
                <div className="flex items-startjustify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">💰</span>
                    <div className='flex flex-col items-star justify-start'>
                        <h3 className="font-semibold text-2xl">Save Time & Money</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">📱</span>
                    <div className='flex flex-col items-star justify-start'>
                        <h3 className="font-semibold text-2xl">Fully Responsive</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Regardless of the screen size, the website content will naturally fit the given resolution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec2