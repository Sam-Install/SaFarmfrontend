import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dog from './pages/Dog'
import Poultry from './pages/Poultry'
import Farm from './pages/Farm'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Navbar/>

<Routes>

<Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/product' element={<Product/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/product/dog' element={<Dog/>} />
<Route path='/product/poultry' element={<Poultry/>} />
<Route path='/product/farm' element={<Farm/>} />


</Routes>

<Footer/>


    </div>
  )
}

export default App