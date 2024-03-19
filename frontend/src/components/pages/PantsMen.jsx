import React from 'react'

import Product from './product'
import Header from '../Header'
import NavBar from '../NavBar'
import Footer from '../Footer'
export default function PantsMen({user}) {

  return (
    <div>
      <Header />
      <NavBar user={user}/>
      <Product type={"pants/male"} />
      <Footer />
    </div>

  )
}
