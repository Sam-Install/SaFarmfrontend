import React from 'react'
import Hero from '../components/Hero'
import tk from '../assets/turkeia.jpg'
import { Link } from 'react-router-dom'
import cf from '../assets/cfarming.jpg'
import dg from '../assets/dog breeding.jpg'
import f from '../assets/farming.jpg'
import Product from './Product'
import tr from '../assets/trust.jpg'
import mny from '../assets/money.jpg'
import tt from '../assets/time.jpg'


const Home = () => {

const productx = [


     {

         title:"Poultry Farming",
         image: cf,
         description: "We indulge in ornamental, kienyeji, improved kienyeji and brolier chicken farming"
          
     },


     {
         
         title:"Dog Breeding",
         image:dg,
         description: "We specifically deal in training and breeding of the working line german shepherd"
     },


     {
         title:"Farming",
         image:f,
         description: "We sell seedlings, farm produce like greens, tomatoes"
     }
]


const values = [

      {

          title:"Trustworthy",
          img:tr,
          description:"Our goal is to be transparent to all our clients and deliver exactly what you ordered "
      },


      {

         title:"Save Money",
         img:mny,
         description:"All our dealings we ensure that you will save your money"
      },

      {

          title:"Timely Delivery",
          img:tt,
          description:"We ensure timely delivery of anything you ordered"
      }
]

  return (
    <div className='mt-10'>
        <Hero/>


        <div className='flex  flex-col sm:flex-row gap-2 mt-10'>

            <div className='w-full sm:w-1/2'>

            <img src={tk} alt="" className='w-full h-full object-cover' />

            </div>

            <div className='w-full sm:w-1/2 flex flex-col justify-center text-center p-6'>

            <h1 className='font-bold'>AboutUs</h1>
            <p className='text-gray-700 mb-6'>
      We are committed to sustainable farming with a focus on dog breeding,
      poultry, and green farming practices. Our goal is to provide quality and
      eco-friendly products.
    </p>

 <Link to='/about'> <button className='bg-green-300 px-8 py-2 text-sm rounded'>Learn More</button></Link> 

            </div>

        </div>

        <div className='mt-10'>

            <h1 className='text-center text-3xl mt-4 text-green-500'>Our Products</h1>
            <p className='text-center mt-2 text-gray-700'>What Our Farm Deals with</p>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4'>
 
               {


                      productx.map((item,index)=>(

                           <div key={index} className='text-center shadow-md rounded-lg overflow-hidden bg-white'>

                            <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />

                            <div className='p-4'>

                                <h1 className='font-medium'>{item.title}</h1>
                                <p className='mb-4'>{item.description}</p>

                                </div>

                            </div>

                            
                      ))
               }
      
            </div>

        </div>

        <div className='mt-10'>

            <h1 className='text-center text-green-500 text-2xl'>Our Values</h1>
            <p className='mb-4 text-center'>What drives our Farm and why you should choose Us</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4'>


                {
                     values.map((value, index)=>(

                          <div key={index} className='bg-white text-center shadow-md overflow-hidden rounded-lg'>

                            <img src={value.img} alt={value.title} className='w-full h-48 object-cover' /> 

                            <div className='p-4'>

                                <h1 className='font-medium'>{value.title}</h1>
                                <p className='mb-4'>{value.description}</p>


                                </div>

                            </div>
                     ))
                }

            </div>

        </div>

    </div>
  )
}

export default Home