import React from "react";
import Product from "./product";
import NavBar from "../NavBar";
import Header from "../Header";
export default function Shoes() {
  return (
    <div>
      <Header />
      <NavBar />
      <Product type={"shoes"} />
      <Footer />
    </div>

  )
}
