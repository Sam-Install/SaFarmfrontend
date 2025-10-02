import React, { useState } from 'react'
import h1 from '../assets/kienyeji.jpg'
import h2 from '../assets/broilers.jpg'
import h3 from '../assets/turkeia.jpg'
import h4 from '../assets/layers.jpg'

const Poultry = () => {

const images = [h1,h2,h3,h4]

const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className='mt-10'>


        <div className='flex flex-col sm:flex-row mt-6 gap-6'>


            <div className='w-full sm:w-1/2 flex flex-col items-center'>

            <img src={selectedImg} alt="poultry-farming" className='w-full h-96 object-cover' />


            <div className='flex gap-2 mt-4'>

                {

                     images.map((img,index)=>(

                        <img key={index} src={img} alt={`poultry-${index}`} 
                        
                        
                        onClick={()=>setSelectedImg(img)} className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${selectedImg === img ?  'border-green-400' : 'border-transparent'}`}
                        
                        />

                           
                     ))
                }

            </div>

            </div>


            <div className='w-full sm:w-1/2'>

            <h1 className='text-green-400 text-center'>Our Poultry Rearing Program</h1>

            <p>At SaFarm, poultry rearing is one of our core farming activities, and we are committed to raising healthy, well-fed, and productive birds. Our poultry program focuses on turkeys, broiler chickens, and layer chickens, each reared under strict care and best farming practices to guarantee quality meat and eggs for our customers.

Turkeys - We rear strong, healthy turkeys that provide lean, protein-rich meat. With proper feeding and spacious housing, our turkeys grow steadily and develop excellent flavor, making them ideal for both family meals and commercial supply.

Broiler Chickens-Our broilers are raised for their tender, juicy meat. By ensuring balanced diets, clean water, and proper housing, we produce fast-growing broilers that are not only healthy but also flavorful and affordable for households and businesses alike.

Layer Chickens - We specialize in keeping layers for consistent egg production. Through careful management of nutrition, lighting, and housing, our layers produce high-quality eggs with rich yolks, ensuring both freshness and nutritional value.

We emphasize biosecurity, hygiene, and animal welfare across all our poultry units. By combining modern practices with traditional care, SaFarm ensures that every bird is raised in a healthy, sustainable environment. Our mission is to supply fresh eggs, quality meat, and reliable poultry products to the community, while building trust through consistency and ethical farming.</p>

            </div>

        </div>

    </div>
  )
}

export default Poultry