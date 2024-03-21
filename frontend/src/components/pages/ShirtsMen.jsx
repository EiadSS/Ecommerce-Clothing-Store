import React from 'react'

import Product from './product'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'


export default function ShirtsMen({user, setCart}) {

  return (

    <div>
      <Header user={user}/>
      <NavBar user={user}/>
      <Product type={"shirts/male"} user={user} setCart={setCart}/>
      <Footer />
    </div>
  )
}
