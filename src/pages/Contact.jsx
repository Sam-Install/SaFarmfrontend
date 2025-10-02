import React from 'react'
import cc from '../assets/center.png'

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted");
  };


  return (
    <div className='mt-10'>

        <div className='flex flex-col sm:flex-row gap-4'>

            <div className='w-full sm:w-1/2'>

 <img src={cc} alt="contact-us" className='w-full h-full object-cover' />
            </div>


            <div className='w-full sm:w-1/2'>

            <h1 className='text-center font-bold'>Contact Us</h1>
            <p className='text-center mb-4'>We value your feedback , enquiries and suggestions</p>

            <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-6 '>

            <div className='flex flex-col'>
                 
                 <label htmlFor="" className='mb-1 font-medium'>First Name</label>
                <input type="text" name="firstName" id="" className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'/>

            </div>


             <div className='flex flex-col'>
                 
                 <label htmlFor="" className='mb-1 font-medium'>Second Name</label>
                <input type="text" name="secondName" id="" className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'/>
                
            </div>


             <div className='flex flex-col'>
                 
                 <label htmlFor="" className='mb-3 font-medium'>Email</label>
                <input type="email" name="email" id="" className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400'/>
                
            </div>

             <div className='flex flex-col'>
                 
                 <label htmlFor="" className='mb-3 font-medium'>Phone Number</label>
                <input type="tel" name="phone" id="" className='border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400'/>
                
            </div>

            <button type='submit' className='text-sm bg-green-400 px-8 py-2 rounded '>Submit</button>

            </form>

            </div>

        </div>

    </div>
  )
}

export default Contact