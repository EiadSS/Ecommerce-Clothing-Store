import React, { useEffect, useState } from 'react'



export default function Shoes(){
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
    .then((response) => response.json())
    .then((data) => {
      setProducts(data._embedded.users)
    })
  }, []);
  return (
    <h1>{console.log(products)}</h1>
  )
}
