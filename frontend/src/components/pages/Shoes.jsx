import React from "react";
import Product from "./product";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
export default function Shoes({user, setCart, cart}) {
  return (
    <div>
      <Header user={user}/>
      <NavBar user={user}/>
      <Product type={"shoes"} user={user} setCart={setCart} cart={cart}/>
      <Footer />
    </div>

  )
}
