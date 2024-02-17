import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import './components/stylesheet.css'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Shirts from './components/pages/Shirts'
import Pants from './components/pages/Pants'
import Shoes from './components/pages/Shoes'
const App = () => {
  return (
    <div className='overlay'>
      <Header />
      <NavBar />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/shirts' element={<Shirts />} />
       <Route path='/pants' element={<Pants />} />
       <Route path='/shoes' element={<Shoes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
