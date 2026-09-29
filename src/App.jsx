import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import FarmingPractice from './pages/FarmingPractice.jsx'
import News from './pages/News.jsx'
import OurProduct from './pages/OurProduct.jsx'
import Contact from './pages/Contact.jsx'
import Expot from './components/Expot.jsx'
import './App.css'


const App = () => {
  
  return (
    <BrowserRouter>
      <AppRoutes />   
    </BrowserRouter>
  )
}
export default App
