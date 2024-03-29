import React, { useState, useEffect } from 'react'
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
import Cart from './components/pages/Cart'
import User from './components/pages/User'



const App = () => {
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage on initial render
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  // Update localStorage whenever the user state changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div className='overlay'>
      <Routes>
        <Route path='/' element={<Home user={user}/>} />
        <Route path='/shirts/men' element={<ShirtsMen user={user} setCart={setCart} cart={cart}/>} />
        <Route path='/shirts/women' element={<ShirtsWomen user={user} setCart={setCart} cart={cart}/>} />
        <Route path='/pants/men' element={<PantsMen user={user} setCart={setCart} cart={cart}/>} />
        <Route path='/pants/women' element={<PantsWomen user={user} setCart={setCart} cart={cart}/>} />
        <Route path='/shoes' element={<Shoes user={user} setCart={setCart} cart={cart}/>} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} user={user}/>} />
        <Route path='/user' element={<User user={user} setUser={setUser} setCart={setCart}/>} />
      </Routes>
    </div>
  )
}

export default App
