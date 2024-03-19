import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";

import { ChevronDownIcon } from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = ({ setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [date, setDate] = useState("")
  const [gender, setGender] = useState()
  const history = useNavigate();
  const handleShowClick = () => setShowPassword(!showPassword);

  const handdkeSign = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: emailAddress,
          address: address,
          postalCode: postalCode,
          userName: userName,
          dateOfBirth: date,
          number: number,
          gender: gender,
          password: password
        }),
      });
      if (!response.ok) {
        alert("There is already an account with that email, try logging in")
      } else {
        setUser(
          {
            firstName: firstName,
            lastName: lastName,
            email: emailAddress,
            address: address,
            postalCode: postalCode,
            userName: userName,
            dateOfBirth: date,
            number: number,
            gender: gender,
            password: password
          }
        )
        history('/')
      }
    } catch (error) {
      console.log(error.message)
    }
  };

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
        <Heading color="teal.400">Welcome</Heading>
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
                  <Input value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First Name" />
                  <Input value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last Name" />
                  <Input value={userName} onChange={(event) => setUserName(event.target.value)} placeholder="User name" />
                </InputGroup>
              </FormControl>
              <FormControl>

              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input placeholder="Phone number" onChange={(event) => setNumber(event.target.value)} />
                  <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    onChange={(event) => setDate(event.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input placeholder="Address" onChange={(event) => setAddress(event.target.value)} />
                  <Input placeholder="Postal code" onChange={(event) => setPostalCode(event.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Stack direction="row" spacing='10' justifyContent="center">
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                          {isOpen ? 'Close' : 'Open'}
                        </MenuButton>
                        <MenuList>
                          <MenuItem onClick={(event) => setGender("Male")}>Male</MenuItem>
                          <MenuItem onClick={(event) => setGender("Female")}>Female</MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                  <Button
                    borderRadius={0}
                    variant="solid"
                    colorScheme="teal"
                    width="50%"
                    onClick={handdkeSign}
                  >
                    Sign up
                  </Button>
                </Stack>
              </FormControl>

            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        already have an account?{" "}
        <ChakraLink as={ReactRouterLink} to="/login" colorScheme='white' variant='ghost' color="teal.500">
          Login. {" "}
        </ChakraLink>
        or {" "}
        <ChakraLink as={ReactRouterLink} to="/" colorScheme='white' variant='ghost' color="teal.500">
          Take me back home!
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Signup;
