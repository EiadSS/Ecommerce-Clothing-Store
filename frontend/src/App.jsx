import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Footer from './components/Footer'
import './components/stylesheet.css'
const App = () => {
  return (
    <div className='overlay'>
      <Header />
      <NavBar />
      <Footer />
    </div>
  )
}

export default App
