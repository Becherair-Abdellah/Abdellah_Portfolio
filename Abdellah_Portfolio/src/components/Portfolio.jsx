import img from '../assets/showCase3.png'

export default function Portfolio() {
  return (
    <div className='lg:px-20' >
      <div className='w-[90%] py-10 mx-auto' >
        <h1 className='text-[#0D2F3F] text-4xl font-semibold' >My Latest Works</h1>
        <p className='text-gray-600 mt-5 text-lg' >Perfect solution for digital experience</p>
        <a href="" className='text-orange-500 text-xl underline block mt-5' >Explore More Works</a>
        {/* my work  */}
      <div className='p-5' >
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
            <img src={img} className='rounded-lg' alt="" />
            <img src={img} className='rounded-lg' alt="" />
            <img src={img} className='rounded-lg' alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}
