import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
<<<<<<< HEAD
=======
import {Link} from "react-router-dom"
import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/layout";

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
import React from "react";
import fb from "../utils/Images/fbIcon.png";
import google from "../utils/Images/googleIcon.png";
import { SignupDetail } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { signupSuccess, signupUserApi } from "../Redux/Auth/signup.actions";
import { useToast } from "@chakra-ui/react";

const SignupForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [signupDetails, setSignupDetails] = React.useState<SignupDetail>({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [insecurePassword, setInsecurePassword] =
    React.useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = React.useState<boolean>(false);
  const state = useAppSelector((store) => store.signupReducer);
  const toast = useToast();

<<<<<<< HEAD
=======
  React.useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = React.useState<boolean>(false);
  const state = useAppSelector((store) => store.signupReducer);
  const toast = useToast()


>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
  const handleDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDetails: SignupDetail = {
      ...signupDetails,
      [e.target.name]: e.target.value,
    };
<<<<<<< HEAD
=======

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
    setInsecurePassword(false);
    setInvalidEmail(false);
    setSignupDetails(newDetails);
  };
<<<<<<< HEAD

  console.log(state);
  // console.log(signupDetails);

  const handleSignupFormSubmit = () => {
    if (
      signupDetails.email === "" ||
      signupDetails.fName === "" ||
      signupDetails.lName === "" ||
=======
  console.log(state);
  // console.log(signupDetails);
  const handleSignupFormSubmit = () => {
    if (
      signupDetails.email == "" ||
      signupDetails.fName == "" ||
      signupDetails.lName == "" ||
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      signupDetails.password === ""
    ) {
      toast({
        title: "Warning! Form Incomplete",
        description: "Please fill all the details",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!signupDetails.email.includes("@")) {
      setInvalidEmail(true);
      return;
    }
    if (
      signupDetails.password.length < 8 &&
      !signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {

    setInsecurePassword(false)
    setInvalidEmail(false)
    setSignupDetails(newDetails);
  };

  console.log(state);
  // console.log(signupDetails);

  const handleSignupFormSubmit = () => {
    
    if(signupDetails.email=="" || signupDetails.fName== "" || signupDetails.lName == "" || signupDetails.password === ""){
      toast({
        title: 'Warning! Form Incomplete',
        description: "Please fill all the details",
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position:"top"
      })
      return;
<<<<<<< HEAD
=======
    }

    if( !signupDetails.email.includes("@")){
      setInvalidEmail(true);
      return;
    }
    if( signupDetails.password.length < 8 && !signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/) ){

      setInsecurePassword(true);
      return;
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
    }

    dispatch(signupUserApi(signupDetails));
    toast({
      status: "success",
      title: "Congratulations!",
      description: "Your account has been created successfully",
      duration: 3000,
      isClosable: true,
    });
<<<<<<< HEAD
=======
      isClosable: true
    })
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
  };

  return (
    <VStack
      mb={"80px"}
<<<<<<< HEAD
=======
    mb={"80px"}

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      width={{ base: "90%", md: "50%" }}
      alignItems={"left"}
      padding={"10px"}
    >
<<<<<<< HEAD
      <Heading size={"md"} fontWeight={"semibold"}>
=======

      <Heading size={"md"} fontWeight={"semibold"}>
      <Heading size={"md"} 
       fontWeight={"semibold"}>

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
        Register
      </Heading>
      <Input
        type="text"
        placeholder="First Name"
        name="fName"
        onChange={(e) => handleDetails(e)}
<<<<<<< HEAD
=======

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      />
      <Text fontSize={"xs"} color={"white"}>
        Email should be valid and must have '@' special characters
      </Text>

<<<<<<< HEAD
=======
        
      />
      <Text fontSize={"xs"} color={"white"}>Email should be valid and must have '@' special characters</Text>


>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      <Input
        type="text"
        placeholder="Last Name"
        name="lName"
        onChange={(e) => handleDetails(e)}
      />
<<<<<<< HEAD
      <Text fontSize={"xs"} color={"white"}>
        Email should be valid and must have '@' special characters
      </Text>
=======

      <Text fontSize={"xs"} color={"white"}>
        Email should be valid and must have '@' special characters
      </Text>
      <Text fontSize={"xs"} color={"white"}>Email should be valid and must have '@' special characters</Text>
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      <Input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => handleDetails(e)}
<<<<<<< HEAD
=======

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      />
      <Text fontSize={"xs"} color={invalidEmail ? "red.500" : "white"}>
        Email should be valid and must have '@' special characters
      </Text>
<<<<<<< HEAD
=======

        />
        <Text fontSize={"xs"} color={invalidEmail?"red.500":"white"}>Email should be valid and must have '@' special characters</Text>

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handleDetails(e)}
<<<<<<< HEAD
=======

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      />
      <Text fontSize={"xs"} color={insecurePassword ? "red.500" : "white"}>
        Password should be minimum 8 characters long and must have special
        characters like: !@#$%^
      </Text>
<<<<<<< HEAD
=======

        />
        <Text fontSize={"xs"} color={insecurePassword?"red.500":"white"}>Password should be minimum 8 characters long and must have special characters like: !@#$%^</Text>
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      <Text pt={"15px"} fontWeight={"normal"}>
        Sign up for early Sale access plus tailored new arrivals, trends and
        promotions. To opt out, click unsubscribe in our emails.
      </Text>
      <Button
        onClick={handleSignupFormSubmit}
        variant={"solid"}
        bgColor={"black"}
        color={"white"}
        w={"100%"}
        padding={"2px"}
        _hover={{ transform: "scale(1.03)" }}
        _active={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
      >
        Register
      </Button>
<<<<<<< HEAD
=======

>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      <Link to="/login">
        <Button
          variant={"outline"}
          bgColor={"white"}
          color={"black"}
          w={"100%"}
          border={"1px solid black"}
          _hover={{
            border: "1px solid black",
            bgColor: "black",
            color: "white",
            transform: "scale(1.03)",
          }}
          _active={{
            border: "1px solid black",
            bgColor: "white",
            color: "black",
          }}
        >
          Log In
        </Button>
      </Link>
<<<<<<< HEAD
=======
      <Link to="/login"><Button
        variant={"outline"}
        bgColor={"white"}
        color={"black"}
        w={"100%"}
        border={"1px solid black"}
        _hover={{
          border: "1px solid black",
          bgColor: "black",
          color: "white",
          transform: "scale(1.03)",
        }}
        _active={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
      >
        Log In
      </Button></Link>
>>>>>>> a770d649361f078b9049fd7cb8d9a09281f9d9c9
      <Flex
        alignItems={"center"}
        p={"1px"}
        paddingLeft={"15px"}
        borderRadius={"5px"}
        bgColor={"facebook.400"}
        color={"#fff"}
        fontWeight={"semibold"}
        justifyContent={"space-between"}
        _hover={{ opacity: "85%" }}
      >
        Sign in with Facebook
        <Image src={fb} maxH={"40px"} p="0px" />
      </Flex>
      <Flex
        alignItems={"center"}
        p={"3px"}
        paddingLeft={"15px"}
        borderRadius={"5px"}
        bgColor={"red.500"}
        color={"#fff"}
        fontWeight={"semibold"}
        justifyContent={"space-between"}
        _hover={{ opacity: "85%" }}
      >
        Sign in with Google
        <Image src={google} maxH={"34px"} p="0px" bgColor="red.400" />
      </Flex>
    </VStack>
  );
};
export default SignupForm;
