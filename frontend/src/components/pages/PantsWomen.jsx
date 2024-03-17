import React from 'react'
import Header from '../Header'
import Product from './product'
import NavBar from '../NavBar'

export default function PantsWomen() {

  return (
    <>
      <Header />
      <NavBar />
      <Product type={"pants/female"} />
      <Footer />
    </>
  )
}
