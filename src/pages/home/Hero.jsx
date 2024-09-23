import React from 'react'
import bannerImg from '../../assets/banner.png';

const Hero = () => {
  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className='relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8'>
        <h1 className="text-4xl lg:text-6xl lg:leading-tight leading-snug font-medium">Make your interior more minimalistic & modern</h1>
        <p className='text-xl lg:w-1/2 mx-auto '>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <div className="relative inline-block z-30">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 px-6 py-2  bg-white/25 rounded-full border border-gray-300 text-white focus:outline-none"
          />
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer'>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero