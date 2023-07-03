import React from 'react'
import { workExp } from '../utils/data'
export default function Workexper() {
  return (
    <div className='mt-[81px] py-10 bg-[#f8f7f1]'>
      <div className='w-[90%] mx-auto'>
        {/* divs  */}
        {workExp.map((ele,i)=>{
            return <div className='grid grid-cols-2 mt-5 gap-10 relative' key={i}>
                <span className='bg-transparent  border-r-2 border-gray-600 border-dashed h-full absolute left-[45%]'></span>
                <span className='absolute ro-b top-3 w-6 h-6 rounded-full' style={{background:ele.bg}} ></span>
                <div className='flex flex-col gap-2 items-start' >
                    <span className='text-gray-700 text-xl font-bold leading-8'>{ele.place}</span>
                    <span className='text-gray-700 text-lg font-[400] leading-8'>{ele.tenure}</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl font-semibold text-gray-700'  >{ele.role}</span>
                    <span className='text-gray-700 text-[16px] leading-8' >{ele.detail}</span>
                </div>
            </div>
        })}
        
      </div>
    </div>
  )
}
