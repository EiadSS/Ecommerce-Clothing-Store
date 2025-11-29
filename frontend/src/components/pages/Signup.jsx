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
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = ({ setUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const history = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const isPasswordValid = (pw) =>
    pw.length >= 8 &&
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /\d/.test(pw);

  const handdkeSign = async () => {
    // 1) Check all required fields
    const missing = [];
    if (!firstName.trim()) missing.push("First name");
    if (!lastName.trim()) missing.push("Last name");
    if (!userName.trim()) missing.push("User name");
    if (!emailAddress.trim()) missing.push("Email");
    if (!password.trim()) missing.push("Password");
    if (!number.trim()) missing.push("Phone number");
    if (!address.trim()) missing.push("Address");
    if (!postalCode.trim()) missing.push("Postal code");
    if (!date.trim()) missing.push("Date of birth");
    if (!gender) missing.push("Gender");

    if (missing.length > 0) {
      alert(
        "Please fill in the following:\n\n- " + missing.join("\n- ")
      );
      return;
    }

    // 2) Check password strength
    if (!isPasswordValid(password)) {
      alert(
        "Password must contain:\n" +
          "- at least 8 characters\n" +
          "- one or more UPPERCASE letters\n" +
          "- one or more lowercase letters\n" +
          "- at least one number"
      );
      return;
    }

    // 3) Call API
    try {
      const response = await fetch(
        "https://tasteful-soda-production.up.railway.app/api/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email: emailAddress,
            address,
            postalCode,
            userName,
            dateOfBirth: date,
            number,
            gender,
            password,
          }),
        }
      );

      if (!response.ok) {
        alert("There is already an account with that email, try logging in");
      } else {
        const res = await fetch(
          "https://tasteful-soda-production.up.railway.app/api/users/" +
            emailAddress +
            "/" +
            password
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setUser(data);
        history("/");
      }
    } catch (error) {
      console.log(error.message);
      alert("Something went wrong. Please try again.");
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
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
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
                  <Input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  <Input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="User name"
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    type="email"
                    placeholder="email address"
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Flex paddingLeft="350">
                <Text color="teal">Date of Birth</Text>
              </Flex>

              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Phone number"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <Input
                    placeholder="yyyy-mm-dd"
                    size="md"
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <InputGroup>
                  <Input
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Input
                    placeholder="Postal code"
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <Stack direction="row" spacing="10" justifyContent="center">
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      {gender || "Select gender"}
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => setGender("Male")}>
                        Male
                      </MenuItem>
                      <MenuItem onClick={() => setGender("Female")}>
                        Female
                      </MenuItem>
                    </MenuList>
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
        <ChakraLink
          as={ReactRouterLink}
          to="/login"
          colorScheme="white"
          variant="ghost"
          color="teal.500"
        >
          Login.{" "}
        </ChakraLink>
        or{" "}
        <ChakraLink
          as={ReactRouterLink}
          to="/"
          colorScheme="white"
          variant="ghost"
          color="teal.500"
        >
          Take me back home!
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Signup;
