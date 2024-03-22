import { Box, Flex, Heading, Card, CardBody, Image, Stack, Text, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import Order from './Order';

const Cart = ({ cart, setCart }) => {

  function handleRemove(itemToRemove) {
    // Filter out the item to remove from the cart array
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    // Update the cart state with the new array
    setCart(updatedCart);
  }

  return (
    <Box paddingBottom="80px" backgroundColor="gray.200" minHeight="100vh"> {/* Set background color and min height */}
      <Flex  justifyContent="center" alignItems="center" align="center" height="100%"> {/* Center content vertically */}
        <Stack align="center" marginTop="20">
          <ButtonGroup alignItems="center" spacing='10' marginBottom="10">
            <Heading color="teal.400">My Cart</Heading>
            <Order cart={cart}/>
          </ButtonGroup>
          <Box>
            <Stack spacing="10">
              {cart.map((c) => (
                <Card key={c.id} maxW='sm' maxH='sm' align='center'>
                  <CardBody>
                    <Image
                      src={c.picture}
                      alt={c.name}
                      borderRadius='sm'
                      objectFit='cover'
                      align='center'
                      boxSize='250'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading size='sm'>{c.name}</Heading>
                      <Flex width='100%' justifyContent='space-around'>
                        <Text color='blue.600' fontSize='2xl'>
                          ${c.price}
                        </Text>
                        <Button colorScheme='teal' onClick={() => handleRemove(c)}>Remove</Button>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Cart
