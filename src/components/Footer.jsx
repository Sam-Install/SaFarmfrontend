import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='mt-20'>


  <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-black bg-green-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                   <h1 className='text-green-700 text-2xl'>SaFarm</h1>
                    <p className="mt-6 text-sm">
   Our farm in Diani Ukunda is dedicated to sustainable agriculture and quality animal care. We specialize in poultry farming, German Shepherd breeding, and green farming, offering fresh produce, healthy poultry, and well-trained dogs. With trust, ethics, and timely delivery as our foundation, we proudly serve the Ukunda community and beyon

                        </p>
                </div>
                <div className="flex-1 flex flex-col sm:flex-row  items-start sm:justify-end gap-10 sm:gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Navigation</h2>
                        <ul className="text-sm space-y-2">
                         
                          <NavLink to='/' className='flex flex-col gap-1'>Home</NavLink>
                          <NavLink to='/about' className='flex flex-col gap-1'>About</NavLink>
                          <NavLink to='/product' className='flex flex-col gap-1'>Product</NavLink>
                          <NavLink to='/contact' className='flex flex-col gap-1'>Contact</NavLink>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+254757854308</p>
                            <p>safarm@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 ©  All Right Reserved.
            </p>
        </footer>


    </div>
  )
}

export default Footer