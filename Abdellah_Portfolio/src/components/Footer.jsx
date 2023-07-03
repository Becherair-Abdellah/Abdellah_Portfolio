import React from 'react'

export default function Footer() {
    return (
        <div className='p-10 lg:p-28 lg:flex  gap-10'>
            <div className='mb-10 ' >
                <h1 className='text-4xl text-gray-700 font-semibold'>Let's make something
                    amazing together.</h1>
                    <h1 className='text-4xl text-gray-700 font-semibold mt-5'>
                    Start by <a href="" className='text-orange-600 underline' > saying hi</a>
                    </h1>
            </div>
            <div>
                <h1 className='text-gray-700 font-semibold text-xl' >Information</h1>
                <ul className='text-gray-700 hvr'>
                    <li>145 New York, FL 5467, USA</li>
                    <li>Services</li>
                    <li>Works</li>
                    <li>Notes</li>
                    <li>Experience</li>
                </ul>
            </div>
        </div>
    )
}
