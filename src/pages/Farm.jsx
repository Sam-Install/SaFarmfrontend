import React, { useState } from 'react'
import f1 from '../assets/onions.jpg'
import f2 from '../assets/tomatoes.jpg'
import f3 from '../assets/cabbages.jpg'
import f4 from '../assets/skuma.jpg'


const Farm = () => {

const images = [f1,f2,f3, f4]

const [selectedImg, setSelectedImg] = useState(images[0])

  return (
    <div className='mt-10'>


        <div className='mt-10'>

            <div className='flex flex-col sm:flex-row gap-6 mt-6'>

                <div className='w-full sm:w-1/2'>

                <h1 className='text-center text-green-400 mt-2'>Our Farming Schedule</h1>

                <p>At SaFarm, we are dedicated to producing fresh, healthy, and affordable vegetables that nourish our community. Our farming program focuses on high-demand, nutritious crops such as spinach, onions, tomatoes, and sukuma wiki/collard greens. Each crop is grown with care, using sustainable and eco-friendly methods that protect the soil and ensure long-term productivity.

Spinach - Rich in vitamins and minerals, our spinach is cultivated organically to retain its natural flavor and nutritional value.

Onions - We grow onions with the right balance of sweetness and pungency, harvested at peak maturity for long shelf life and rich taste.

Tomatoes - Our tomatoes are grown under careful monitoring to ensure juiciness, firmness, and freshness, making them perfect for both household and commercial use.

Sukuma Wiki - A staple in many homes, our sukuma wiki is lush, tender, and packed with nutrients, grown to support everyday family meals.

By practicing green farming, we not only focus on feeding families but also on protecting the environment. With every harvest, SaFarm delivers quality, freshness, and trust straight from the farm to your table.</p>

                </div>


                <div className='w-full sm:w-1/2 flex flex-col items-center '>

                <img src={selectedImg} alt="dog-breeding" className='w-full h-96 object-cover' />


                <div className='flex gap-2 mt-4'>

                    {
                        images.map((img,index)=>(
                    

                    <img key={index} src={img} alt={`farm-${index}`} 

                    onClick={()=>setSelectedImg(img)} className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${selectedImg === img ? 'border-green-500' : 'border-transparent' }`}
                    
                  />

                ))}

                </div>


                </div>

            </div>

        </div>

    </div>
  )
}

export default Farm