import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import FarmingPractice from '../pages/FarmingPractice.jsx'
import News from '../pages/News.jsx'
import OurProduct from '../pages/OurProduct.jsx'
import Contact from '../pages/Contact.jsx'
import Expot from '../components/Expot.jsx'



const AppRoutes = () => {
    const location = useLocation(); 

  return (
    <Routes key={location.pathname}>
        <Route path='/' element={<Home/>}/>    
        <Route path='/about/' element={<About/>}/>   
        <Route path='/farmingpractice' element={<FarmingPractice/>}/> 
        <Route path='/news' element={<News/>}/>
        <Route path='/ourproduct' element={<OurProduct/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/expot" element={<Expot />} />
    </Routes>  
  )
}

export default AppRoutes