import React from 'react'
import ag from '../assets/agri.jpg'

const About = () => {
  return (
    <div className='mt-10'>

        <div className='flex flex-col sm:flex-row'>

            <div className='w-full sm:w-1/2'>

<h1 className='text-center font-bold text-2xl'>About SaFarm</h1>
<p className="p-6 text-gray-700 leading-relaxed">
  At SaFarm, located in the heart of Diani Ukunda, we are committed to
  sustainable agriculture and ethical farming practices. Our work spans
  poultry farming, dog breeding, and green farming, all driven by a passion
  for providing quality and freshness. We take pride in raising poultry
  responsibly, cultivating healthy farm produce, and breeding German Shepherd
  dogs with care and expertise. Beyond farming, our promise is to build trust
  with every client by ensuring transparency, affordability, and timely
  delivery. Whether you are looking for fresh produce, healthy poultry, or a
  loyal canine companion, SaFarm is dedicated to serving you with honesty and
  reliability. Our vision is not only to grow food and animals but also to
  grow relationships rooted in trust, integrity, and community impact.
</p>



            </div>


            <div className='w-full sm:w-1/2'>

            <img src={ag} alt="agriculture" className='w-full h-full object-cover' />

            </div>

        </div>

    </div>
  )
}

export default About