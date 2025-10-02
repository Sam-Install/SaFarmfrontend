import React from 'react'
import kk from '../assets/kuku.jpg'

const Hero = () => {
  return (
    <div className='relative w-full h-[70vh] md:h-[90vh] mt-2 flex items-center justify-center'>

        <img src={kk} alt="" className='absolute inset-0 w-full h-full object-cover' />

        <div className='absolute inset-0 bg-black/30'></div>



          <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to SaFarm
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Sustainable Dog Breeding, Poultry Farming & Green Farming
        </p>
        <a
          href="/product"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-md transition"
        >
          View Products
        </a>
      </div>


    </div>
  )
}

export default Hero