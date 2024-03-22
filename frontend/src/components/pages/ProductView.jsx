import React, { useState, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, Button } from '@chakra-ui/react'

import { Card, Stack, Heading, Image, Text, CardBody } from '@chakra-ui/react'

const ProductView = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  const [bought, setBought] = useState()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://tasteful-soda-production.up.railway.app/api/boughts/order/" + id)
      .then((response) => response.json())
      .then((data) => {
        setBought(data);
        // Loop through each "bought" item and fetch its associated product information
        const fetchProductPromises = data.map((boughtItem) => {
          return fetch("https://tasteful-soda-production.up.railway.app/api/products/" + boughtItem.productId)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Failed to fetch product data');
              }
              return response.json();
            });
        });
        // Wait for all fetch requests to complete
        Promise.all(fetchProductPromises)
          .then((productDataArray) => {
            // Set the fetched product data to the state
            setProducts(productDataArray);
          })
          .catch((error) => {
            console.error('Error fetching product data:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching bought data:', error);
      });
  }, []); // Add 'id' to the dependency array to refetch when 'id' changes


  return (
    <>
      <Button mt={3} ref={btnRef} onClick={onOpen} colorScheme="teal">
        View Order
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {products.map((product) => (
              <Card key={product.id} maxW='sm'>
                <CardBody>
                  <Image
                    src={product.picture}
                    alt={product.name}
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.name}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                      ${product.price}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}

export default ProductView