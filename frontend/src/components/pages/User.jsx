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


const User = ({ user, setUser }) => {


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
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/orders/user/" + user.id)
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
            <Tab>Profile</Tab>
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
                        <Td><ProductView /></Td>
                        <Td>{product.date}</Td>
                        <Td>{product.shippingAddress}</Td>
                        <Td>{payemnt[product.methodOfPayment]}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <Box minW={{ base: "90%", md: "468px" }}>
                <form>
                  <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                  >
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"

                        />
                        <Input type="email" placeholder="email address" onChange={(event) => (setEmail(event.target.value))} />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                        />
                        <Input
                          placeholder="Password"
                          onChange={(event) => (setPassword(event.target.value))}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm">
                            hello
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <FormHelperText textAlign="right">
                        <Link>forgot password?</Link>
                      </FormHelperText>
                    </FormControl>
                    <Button
                      borderRadius={0}
                      variant="solid"
                      colorScheme="teal"
                      width="full"
                    >
                      Update
                    </Button>
                  </Stack>
                </form>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Flex>
  )
}

export default User