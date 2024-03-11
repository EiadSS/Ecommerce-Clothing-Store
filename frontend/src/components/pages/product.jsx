import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Stack, Divider, ButtonGroup, Image } from '@chakra-ui/react'


export default function Product({ type }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/" + type)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, []);
  return (
    <SimpleGrid className={"shoes-grid"} spacing={150} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {products.map((product) => {
        return (
          <Card maxW='sm' color='black'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
                <Text color='blue.600' fontSize='2xl'>
                  ${product.price}
                </Text>
              </ButtonGroup>
            </CardFooter>
          </Card>
        )
      })}
    </SimpleGrid>
  )
}
