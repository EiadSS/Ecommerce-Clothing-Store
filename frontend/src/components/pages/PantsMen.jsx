import React from 'react'

import Product from './product'
import Header from '../Header'
import NavBar from '../NavBar'
export default function PantsMen() {

  return (
    <div>
      <Header />
      <NavBar />
      <Product type={"pants/male"} />
      <Footer />
    </div>

  )
}
