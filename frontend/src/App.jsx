import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import './components/stylesheet.css'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Shoes from './components/pages/Shoes'
import ShirtsMen from './components/pages/ShirtsMen'
import ShirtsWomen from './components/pages/ShirtsWomen'
import PantsMen from './components/pages/PantsMen'
import PantsWomen from './components/pages/PantsWomen'
const App = () => {
  return (
    <div className='overlay'>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shirts/men' element={<ShirtsMen />} />
        <Route path='/shirts/women' element={<ShirtsWomen />} />
        <Route path='/pants/men' element={<PantsMen />} />
        <Route path='/pants/women' element={<PantsWomen />} />
        <Route path='/shoes' element={<Shoes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
