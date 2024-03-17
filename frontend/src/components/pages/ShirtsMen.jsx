import React from 'react'

import Product from './product'
import Header from '../Header'
import NavBar from '../NavBar'


export default function ShirtsMen() {

  return (

    <div>
      <Header />
      <NavBar />
      <Product type={"shirts/male"} />
      <Footer />
    </div>
  )
}
