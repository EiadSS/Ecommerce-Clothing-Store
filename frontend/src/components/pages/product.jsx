import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Stack, Divider, ButtonGroup, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

export default function Product({ type, user, setCart, cart }) {

  const history = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products/" + type)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, []);

  function handleAdd(product) {
    if (user) {
      setCart([...cart, product]);
    } else {
      history("/login")
    }
  }

  return (
    <SimpleGrid className={"shoes-grid"} spacing={150} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {products.map((product) => {
        return (
          <Card maxW='sm' color='black'>
            <CardBody>
              <Image
                src={product.picture}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='50'>
                <Button colorScheme='blue' onClick={() => handleAdd(product)}>
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
