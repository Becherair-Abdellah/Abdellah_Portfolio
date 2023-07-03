import React from 'react'
import Slider from 'react-slick';
import {settings,comments} from '../utils/data'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function People() {
    return (
        <div className='bg-[#f8f7f1] py-16'>
            <div className='md:text-center p-10 '>
                <h1 className='text-4xl text-gray-800 font-semibold mb-10'>People talk about us</h1>
                <p className='text-gray-700 text-[16px] leading-8' >I got a job that was in accordance with the salary and field of work The process of submitting an appilication was quite cosy</p>
                </div>
                {/* comments of people  */}
                <Slider {...settings}>
                    {comments.map((ele,i)=>{
                        return <>
                            <img src={ele.img} className='absolute -translate-x-1/2 w-14 h-14 rounded-full left-1/2 top-[-2rem] mx-auto' alt="" />
                            <p className='text-gray-700 text-[14px] leading-7 mt-5 mb-2 ' >{ele.comment}</p>
                            <div className='border-t-[1px] py-2' >
                                <h1 className='font-semibold text-gray-800 text-lg' >{ele.name}</h1>
                                <h2 className='text-gray-400 text-[13px]'>{ele.post}</h2>
                            </div>
                        </>
                    })}
                    {/* Add more slides as needed */}
                </Slider>
            </div>
    )
}
