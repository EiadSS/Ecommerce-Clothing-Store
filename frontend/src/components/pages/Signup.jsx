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

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [userName, setUserName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")
  const [address, serAddress] = useState("")
  const [postalCode, setPostalCode] = useState("")


  const handleShowClick = () => setShowPassword(!showPassword);

  const handleFirst = (event) => setFirstName(event.target.value)

  const handleLast = (event) => setFirstName(event.target.value)

  const handleUserName = (event) => setFirstName(event.target.value)

  const handleEmail = (event) => setEmailAddress(event.target.value)

  const handdkeSign = () => {

  }
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
                  <Input value = {firstName} onChange={handleFirst} placeholder="First Name" />
                  <Input value = {lastName} onChange={handleLast} placeholder="Last Name" />
                  <Input value = {userName} onChange={handleUserName} placeholder="User name" />
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
                  <Input value = {emailAddress} onChange={handleEmail} type="email" placeholder="email address" />
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
                  <Input placeholder="Number" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <Input placeholder="Address" />
                  <Input placeholder="Postal code" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Stack direction="row" spacing='10' justifyContent="center">
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Gender
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Male</MenuItem>
                      <MenuItem>Female</MenuItem>
                    </MenuList>
                  </Menu>
                  <Button
                    borderRadius={0}
                    type="submit"
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
          Login
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Signup;
