import {
  Box,
  Flex,
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Order from "./Order";

const Cart = ({ cart, setCart, user }) => {
  const navigate = useNavigate();

  // remove exactly the clicked item
  const handleRemove = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Box paddingBottom="80px" backgroundColor="gray.200" minHeight="100vh">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Stack align="center" marginTop="20">
          <ButtonGroup alignItems="center" spacing="6" marginBottom="10">
            <Heading color="teal.400">My Cart</Heading>
            <Button variant="outline" colorScheme="teal" onClick={handleHome}>
              Home
            </Button>
            <Order cart={cart} user={user} setCart={setCart} />
          </ButtonGroup>

          <Box>
            <Stack spacing="10">
              {cart.map((c, index) => (
                <Card
                  key={`${c.id}-${index}`}   // 👈 unique per row, even for same product
                  maxW="sm"
                  maxH="sm"
                  align="center"
                >
                  <CardBody>
                    <Image
                      src={c.picture}
                      alt={c.name}
                      borderRadius="sm"
                      objectFit="cover"
                      boxSize="250"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="sm">{c.name}</Heading>
                      <Flex width="100%" justifyContent="space-around">
                        <Text color="blue.600" fontSize="2xl">
                          ${c.price}
                        </Text>
                        <Button
                          colorScheme="teal"
                          onClick={() => handleRemove(index)} // 👈 remove that exact entry
                        >
                          Remove
                        </Button>
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
  );
};

export default Cart;
