import React from 'react'
import { data } from '../utils/data'
export default function Expert() {
    return (
        <div className='relative top-[81px] py-10 w-[90%] mx-auto' >
            {/* main div  */}
            <div className='lg:grid lg:grid-cols-2 lg:gap-3'>
                {/* div one  */}
                <div className='' >
                    {
                        data.map((ele, i) => {
                            return (
                                <div className='flex mt-8 items-center justify-start gap-5 p-8 border-[1px] rounded-3xl border-gray-200 hover:shadow-gray-100 hover:shadow-lg duration-300 cursor-pointer w-full' key={i} >
                                    <div className='mr-3' >
                                        <span style={{ background: ele.bg }} className='block p-3 rounded-full' >
                                            <ele.icon size={35} color='white' />
                                        </span>
                                    </div>
                                    {/* div with spans */}
                                    <div className='flex flex-col items-start justify-between' >
                                        <span className='text-2xl font-semibold' >
                                            {ele.name}
                                        </span>
                                        <span className='text-lg text-gray-700 font-[500] mt-5' >
                                            {ele.projects} Projects
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* div two  */}
                <div className='text-center mt-5 p-4' >
                    <h1 className='text-gray-900 text-4xl font-bold mb-8' >What do I help?</h1>
                    <p className='text-gray-700 mb-10 text-lg leading-10 font-[500]' >I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.</p>
                    <p className='text-gray-700 mb-10 text-lg leading-10 font-[500]' >We use process design to create digital products. Besides that also help their business</p>
                    <div className='flex justify-between items-center' >
                        <span className='flex flex-col gap-3' >
                            <div className='text-gray-800 text-5xl font-bold'>285+
                            </div>
                        <div className='text-lg text-gray-800 font-[500]' >Project Completed</div>
                        </span>

                        <span className='flex flex-col gap-3' >
                            <div className='text-gray-800 text-5xl font-bold'>190+</div>
                            <div className='text-lg text-gray-800 font-[500]'>Happy Clients</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
