import React from 'react'
import Flip from '../Flip';

const Sec2 = () => {

    return (
        <div className="max-w-6xl mx-auto mt-20 md:mt-36 mb-24 grid grid-cols-1 md:grid-cols-2 gap-5  px-4 sm:px-2   ">

            <div className="w-full flex justify-center">
                <Flip />
            </div>


            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14  md:mt-0">
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">📄</span>
                    <div className='flex flex-col items-start justify-start'>
                        <h1 className="font-semibold text-2xl sm:text-xl">Full Documentation</h1>
                        <p className="text-gray-600 text-sm mt-2">
                            Built by developers for developers. Check the foundation and you will find everything inside our documentation.
                        </p>

                    </div>
                    <div className='md:hidden w-full flex justify-center items-center'>
                        <span className='w-72 border-t '></span>

                    </div>
                </div>
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">🖥️</span>
                    <div className='flex flex-col items-start justify-start'>
                        <h3 className="font-semibold text-2xl sm:text-xl">Bootstrap 5 Ready</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            The world’s most popular front-end open source toolkit, featuring Sass variables and mixins.
                        </p>
                    </div>
                    <div className='md:hidden w-full flex justify-center items-center'>
                        <span className='w-72 border-t '></span>

                    </div>
                </div>
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">💰</span>
                    <div className='flex flex-col items-start justify-start'>
                        <h3 className="font-semibold text-2xl sm:text-xl">Save Time & Money</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.
                        </p>
                    </div>
                    <div className='md:hidden w-full flex justify-center items-center'>
                        <span className='w-72 border-t '></span>

                    </div>
                </div>
                <div className="flex items-start justify-start space-x-1 gap-3 flex-col">
                    <span className="text-green-500 text-4xl">📱</span>
                    <div className='flex flex-col items-start justify-start'>
                        <h3 className="font-semibold text-2xl sm:text-xl">Fully Responsive</h3>
                        <p className="text-gray-600 text-sm mt-2">
                            Regardless of the screen size, the website content will naturally fit the given resolution.
                        </p>
                    </div>
                    <div className='md:hidden w-full flex justify-center items-center'>
                        <span className='w-72 border-t '></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec2
