import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {

const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 '>

        <h1 className='text-sm text-green-500 ml-4'>SaFarm</h1>

        <ul className='hidden  sm:flex gap-5 text-sm text-blue-800 '>

            <NavLink to='/' className='flex flex-col items-center gap-1'>

            <p>Home</p>

            <hr className='w-2/4 border-none bg-green-500 h-[1.5px] hidden'/>

            </NavLink>


            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 bg-green-500 h-[1.5px] hidden'/>
            </NavLink>


            <NavLink to='/product' className='flex flex-col items-center gap-1'>
                <p>Product</p>
                <hr className='w-2/4 bg-green-500 h-[1.5px] hidden'/>
            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact Us</p>
                <hr className='w-2/4 bg-green-500 h-[1.5px] hidden'/>
            </NavLink>

        </ul>

        <div className='flex justify-between gap-2'>

            <div className='group relative'>

                <CgProfile className='text-2xl cursor-pointer' />

                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

                    <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-green-400 text-black rounded'>

                        <p className='cursor-pointer hover:text-white'>Admin</p>
                        <p className='cursor-pointer hover:text-white'>User</p>

                    </div>

                </div>

            </div>

            <TiThMenu onClick={()=>setVisible(true)} className='text-2xl cursor-pointer sm:hidden' />

        </div>


        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-green-300 transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>

            <div className='flex flex-col text-black'>

                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>

                    <FaArrowLeft className='text-2xl h-4 rotate-360' />
                    <p>Back</p>
                </div>


                    <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border'>About</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/product' className='py-2 pl-6 border'>Product</NavLink>
                    <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border'>Contact</NavLink>


            </div>

        </div>



    </div>
  )
}

export default Navbar