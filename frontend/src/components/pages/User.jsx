import { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import ProductView from "./ProductView";


const User = ({ user, setUser, setCart }) => {


  let payemnt = {
    1: "Visa",
    2: "Master Card",
    3: "American Express"
  }

  const histroy = useNavigate()

  const [products, setProducts] = useState([]);

  const handleOut = () => {
    histroy('/')
    setUser(null)
    setCart([])
  }

  useEffect(() => {
    fetch("https://tasteful-soda-production.up.railway.app/api/orders/user/" + user.id)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, []);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Flex justifyContent="space-between" width="350px">
          <Heading color="teal.400">Welcome {user.firstName} </Heading>
          <Button
            borderRadius={0}
            variant="solid"
            colorScheme="teal"
            width="20"
            onClick={handleOut}
          >
            Sign Out
          </Button>
        </Flex>
        <Tabs align="center">
          <TabList>
            <Tab>Orders</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table variant='simple' colorScheme="blackAlpha">
                  <TableCaption>Summary Of Orders Placed</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Order Id</Th>
                      <Th>Products</Th>
                      <Th>Date</Th>
                      <Th>Shiping Adress</Th>
                      <Th>Method of Payment</Th>
                    </Tr>
                  </Thead>
                  <Tbody >
                    {products.map((product, index) => (
                      <Tr key={index}>
                        <Td>{product.id}</Td>
                        <Td><ProductView id={product.id}/></Td>
                        <Td>{product.date}</Td>
                        <Td>{product.shippingAddress}</Td>
                        <Td>{payemnt[product.methodOfPayment]}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Flex>
  )
}

export default User