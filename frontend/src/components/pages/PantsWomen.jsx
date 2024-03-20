import React from 'react'
import Header from '../Header'
import Product from './product'
import NavBar from '../NavBar'
import Footer from '../Footer'

export default function PantsWomen({user}) {

  return (
    <>
      <Header user={user}/>
      <NavBar user={user}/>
      <Product type={"pants/female"} />
      <Footer />
    </>
  )
}
