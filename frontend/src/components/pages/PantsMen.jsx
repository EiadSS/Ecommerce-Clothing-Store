import React from 'react'

import Product from './product'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
export default function PantsMen({user, setCart, cart}) {

  return (
    <div>
      <Header user={user}/>
      <NavBar user={user}/>
      <Product type={"pants/male"} user={user} setCart={setCart} cart={cart}/>
      <Footer />
    </div>

  )
}
