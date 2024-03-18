import React, { useState } from 'react'
import Footer from './components/Footer'
import './components/stylesheet.css'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Shoes from './components/pages/Shoes'
import ShirtsMen from './components/pages/ShirtsMen'
import ShirtsWomen from './components/pages/ShirtsWomen'
import PantsMen from './components/pages/PantsMen'
import PantsWomen from './components/pages/PantsWomen'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
const App = () => {
  
  const [user, setUser] = useState()
  const [orders, setOrders] = useState()
  
  
  return (
    <div className='overlay'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shirts/men' element={<ShirtsMen />} />
        <Route path='/shirts/women' element={<ShirtsWomen />} />
        <Route path='/pants/men' element={<PantsMen />} />
        <Route path='/pants/women' element={<PantsWomen />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
