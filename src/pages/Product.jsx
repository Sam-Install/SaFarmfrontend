import React from 'react'
import dg from '../assets/dog breeding.jpg'
import fm from '../assets/farming.jpg'
import cf from '../assets/cfarming.jpg'
import { Link } from 'react-router-dom'

const Product = () => {

    const products = [



          {

             title: "Dog breeding",
             img:dg,
             description:"We specialise in breeding of the german shepherds",
             Link:'/product/dog'
          },


          {

              title:"Green Farming",
              img:fm,
              description:"We grow green , fresh farm products",
              Link:'/product/farm'
          },


          {

             title:"Chicken Farming",
             img:cf,
             description:"We Rear chickens",
             Link:'/product/poultry'
          }
    ]

  return (
    <div className='mt-10'>

        <h1 className='text-center text-2xl text-green-500'>What We Deal With</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>

            {
                 products.map((item,index)=>(

                     <div key={index} className='text-center shadow-md bg-white rounded-lg overflow-hidden '>

                        <img src={item.img} alt={item.title} className='w-full h-48 object-cover' />

                        <div className='p-4'>

                            <h1 className='text-green-500'>{item.title}</h1>
                            <p className='mb-2'>{item.description}</p>
                            <Link to={item.Link} className='bg-green-300 px-8 py-2 rounded text-sm mb-6'>
                            
                            Learn More
                            
                            </Link>

                            </div>

                        </div>
                 ))
            }

        </div>

    </div>
  )
}

export default Product