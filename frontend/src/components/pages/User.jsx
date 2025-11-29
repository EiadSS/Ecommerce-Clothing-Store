import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Avatar,
  HStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProductView from "./ProductView";

const User = ({ user, setUser, setCart }) => {
  const payment = {
    1: "Visa",
    2: "Master Card",
    3: "American Express",
  };

  const history = useNavigate();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("date-desc"); // default: newest first

  const handleOut = () => {
    history("/");
    setUser(null);
    setCart([]);
  };

  const handleHome = () => {
    // just navigate, keep user + cart
    history("/");
  };

  useEffect(() => {
    if (!user) return;
    fetch(
      "https://tasteful-soda-production.up.railway.app/api/orders/user/" +
        user.id
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user]);

  if (!user) return null;

  // sort logic
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "id-asc":
        return a.id - b.id;
      case "id-desc":
        return b.id - a.id;
      case "date-asc":
        return new Date(a.date) - new Date(b.date);
      case "date-desc":
      default:
        return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <Box bg="gray.200" minH="100vh" py={10}>
      <Box maxW="1200px" mx="auto" px={6}>
        {/* HEADER CARD */}
        <Box bg="white" borderRadius="md" boxShadow="sm" px={6} py={4} mb={6}>
          <Flex align="center" justify="space-between">
            <HStack spacing={3}>
              <Avatar bg="teal.500" />
              <Box>
                <Text fontSize="sm" color="gray.500">
                  Logged in as
                </Text>
                <Heading size="md" color="teal.500">
                  {user.firstName}
                </Heading>
              </Box>
            </HStack>

            <HStack spacing={3}>
              <Button
                borderRadius={0}
                variant="outline"
                colorScheme="teal"
                onClick={handleHome}
              >
                Home
              </Button>
              <Button
                borderRadius={0}
                variant="solid"
                colorScheme="teal"
                onClick={handleOut}
              >
                Sign Out
              </Button>
            </HStack>
          </Flex>
        </Box>

        {/* ORDERS CARD */}
        <Box bg="white" borderRadius="md" boxShadow="sm" px={6} py={4}>
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">Orders</Heading>

            <HStack spacing={4}>
              <Text fontSize="sm" color="gray.500">
                {sortedProducts.length} order
                {sortedProducts.length !== 1 ? "s" : ""}
              </Text>
              <Select
                size="sm"
                width="220px"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date-desc">Date – Newest first</option>
                <option value="date-asc">Date – Oldest first</option>
                <option value="id-asc">Order ID – Low to High</option>
                <option value="id-desc">Order ID – High to Low</option>
              </Select>
            </HStack>
          </Flex>

          <TableContainer
            w="100%"
            maxH="70vh"
            overflowY="auto"
            overflowX="auto"
          >
            <Table variant="simple" size="sm" colorScheme="blackAlpha">
              <TableCaption>Summary Of Orders Placed</TableCaption>
              <Thead>
                <Tr>
                  <Th>ORDER ID</Th>
                  <Th>PRODUCTS</Th>
                  <Th>DATE</Th>
                  <Th>SHIPPING ADDRESS</Th>
                  <Th>METHOD OF PAYMENT</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedProducts.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.id}</Td>
                    <Td>
                      <ProductView id={product.id} />
                    </Td>
                    <Td>{product.date}</Td>
                    <Td>{product.shippingAddress}</Td>
                    <Td>{payment[product.methodOfPayment]}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default User;
