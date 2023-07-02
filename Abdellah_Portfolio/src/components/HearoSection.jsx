
import img from '../assets/person.png'
import img2 from '../assets/splash.png'
import img3 from '../assets/certificate.png'
import React from 'react';
import { Link } from 'react-router-dom';
export default function HearoSection() {
    return (
        <div className='bg-[#f8f7f1] py-10 relative top-[81px]'  >
            <div className='w-[90%] mx-auto' >
                <div className="text-start sm:text-start sm:flex sm:justify-between md:items-center">
                    <h1 className='font-bold text-4xl mb-3 flex flex-col gap-5' >
                        <span>
                            Hey There,
                        </span>
                        <span>
                            I'm Abdellah
                        </span>
                    </h1>
                    <h2 className='text-lg text-gray-500 mb-20 sm:mb-0 flex flex-col gap-5'>

                        <span>I design beautiful simple</span>
                        <span>things, And I love what i do</span>

                    </h2>
                </div>
                <div className="relative h-[380px] overflow-hidden">
                    <img className='absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={img} alt="" />
                    <img className='mx-auto' src={img2} alt="" />
                    <a href="/email" className='text-gray-600 hidden md:block underline absolute top-1/2 left-0'>abdellah.becherair@gmail.com</a>
                </div>
                <div className=" mt-10 flex flex-col md:flex-row items-start justify-between md:items-center">
                    <h1 className='mt-10 flex items-center gap-2 text-xl font-bold justify-start md:mt-0 mb-2'>
                        <span className='text-5xl font-bold text-gray-800' >10</span>
                        <span>
                            Years
                            Experience
                        </span>
                    </h1>
                    <h2 className='mt-10 flex flex-col items-start md:items-center  gap-2 text-xl font-bold justify-start md:mt-0 mb-2'>
                        <span>
                            <img src={img3} alt="" />
                        </span>
                        <span className='text-lg font-normal'>
                            CERTIFIED PROFATIONALUI/UX DESIGNER</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
