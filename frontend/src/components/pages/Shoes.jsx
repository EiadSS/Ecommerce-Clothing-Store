import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text} from '@chakra-ui/react'


export default function Shoes() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/shoes")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, []);
  return (
    <SimpleGrid  className={"shoes-grid"} spacing={150} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {products.map((product) => {
        return (
          <Card backgroundColor={'black'} height={"400px"} width={"350px"}>
            <CardHeader>
              <Heading size='md'>{product.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
            </CardBody>
            <CardFooter>
              <Button>Buy</Button>
            </CardFooter>
          </Card>
        )
      })}
    </SimpleGrid>
  )
}
