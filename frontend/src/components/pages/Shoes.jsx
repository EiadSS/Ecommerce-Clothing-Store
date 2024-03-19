import React from "react";
import Product from "./product";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
export default function Shoes({user}) {
  return (
    <div>
      <Header />
      <NavBar user={user}/>
      <Product type={"shoes"} />
      <Footer />
    </div>

  )
}
