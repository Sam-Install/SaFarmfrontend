import React, { useState } from 'react'
import g1 from '../assets/gsd1.jpg'
import g2 from '../assets/black.jpg'
import g3 from '../assets/pair.jpg'
import g4 from '../assets/sable.jpg'
import g5 from '../assets/puppy.jpg'

const Dog = () => {

const images = [g1,g2,g3,g4]

const [selectedImg, setSelectedImg] = useState(images[0])

  return (
    <div className='mt-10'>

        <h1 className='text-center text-green-400'>Our Dog Breeding Programme</h1>

        <div className='flex flex-col sm:flex-row mt-6 gap-6'>

            <div className='w-full sm:w-1/2 flex flex-col items-center '>

            <img src={selectedImg} alt="dog-breeding" className='w-full h-96 object-cover rounded shadow' />


            <div className='flex gap-2 mt-4'>

                {images.map((img,index)=>(
                   
                   <img key={index} src={img} alt={`dog-${index}`}

                   onClick={()=>setSelectedImg(img)} className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${selectedImg === img ? 'border-green-500 '  : 'border-transparent'}`}

                   />
                     
                ))}

            </div>



            </div>


            <div className='w-full sm:w-1/2 text-center justify-between'>

            <p>At SaFarm, we specialize exclusively in the breeding and training of German Shepherd working lines. Unlike show-line German Shepherds, the working line has been carefully developed for strength, endurance, and intelligence. Our breeding program is focused on producing dogs with the ideal temperament, size, and working ability suited for families, security, and specialized training.

We carefully select our breeding pairs to ensure that every pup is born with a balanced temperament—confident, alert, and loyal, without unnecessary aggression. Size and structure are also important; our German Shepherds are bred to be strong, agile, and durable, reflecting the classic working line standard.

Beyond physical traits, we emphasize trainability and working drive. These dogs are excellent for guard duties, police work, farm security, or loyal companionship, making them versatile and dependable partners.

At SaFarm, every German Shepherd is raised in a healthy, ethical environment, with early socialization and care to ensure they grow into trustworthy and capable companions.</p>


 <button className='bg-green-400 px-8 py-2 text-sm p-2 rounded mt-4'>Enquire</button>

            </div>

           

        </div>

    </div>
  )
}

export default Dog