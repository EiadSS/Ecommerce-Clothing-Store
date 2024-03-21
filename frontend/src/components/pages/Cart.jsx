import { Box, Flex, Heading, Card, CardBody, Image, Stack, Text, Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const Cart = ({ cart, setCart }) => {
  
  function handleRemove(itemToRemove){
    // Filter out the item to remove from the cart array
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    // Update the cart state with the new array
    setCart(updatedCart);
  }
  
  return (
    <Flex height="100%" width="100%" backgroundColor="gray.200" justifyContent="center" alignItems="center" align="center">
        <Stack align="center" marginTop="20"> 
        <ButtonGroup spacing='10' marginBottom="10">
          <Heading color="teal.400">My Cart</Heading>
          <Button colorScheme='teal'>Make Order</Button>
        </ButtonGroup>
          <Box>
            <Stack >
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
  )
}

export default Cart