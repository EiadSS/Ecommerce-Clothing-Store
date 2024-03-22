import React from 'react'
import Header from '../Header'
import Product from './product'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function PantsWomen({user, setCart, cart}) {

  return (
    <>
      <Header user={user}/>
      <NavBar user={user}/>
      <Product type={"pants/female"} user={user} setCart={setCart} cart={cart}/>
      <Footer />
    </>
  )
}
