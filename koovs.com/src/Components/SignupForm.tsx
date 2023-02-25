import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import fb from "../utils/Images/fbicon.png";
import google from "../utils/Images/googleIcon.png";
import {SignupDetail} from "../utils/types"
import { useDispatch } from "react-redux";


const SignupForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const [signupDetails, setSignupDetails] = React.useState<SignupDetail>({
    fName:"",
    lName:"",
    email:"",
    password:""
  })
  const [insecurePassword, setInsecurePassword] = React.useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = React.useState<boolean>(false);

  const handleDetails = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newDetails:SignupDetail = {
      ...signupDetails,
      [e.target.name]: e.target.value,
    };

    setSignupDetails(newDetails);
    setInvalidEmail(false);
    setInsecurePassword(false);
  }

  const handleSignupFormSubmit = () => {
    let isValid = true;
    Object.keys(signupDetails).forEach((key:string) => {
      const value:string = signupDetails[key];

      if (!value) {
        isValid = false;
      }
    });

    if (!isValid) {
      window.alert("Please fill the form!");
      return;
    } else if (
      signupDetails.email == "" ||
      (signupDetails.email &&
        (!signupDetails.email.includes("@")))
    ) {
      setInvalidEmail(true);
      return;
    } else if (
      signupDetails.password.length >= 8 &&
      signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
    } else if (
      signupDetails.password.length < 8 &&
      signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
      setInsecurePassword(true);
      return;
    } else if (!signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)) {
      setInsecurePassword(true);
      return;
    }

    setInvalidEmail(false);
    setInsecurePassword(false);
    // dispatch(signupSuccess(signupDetails));
  };

  return (
    <VStack
    
      gap={3}
      width={{ base: "90%", md: "50%" }}
      alignItems={"left"}
      padding={"10px"}
    >
      <Heading size={"md"} fontWeight={"semibold"} >Register</Heading>
      <Input type="text" placeholder="First Name" name="fname" onChange={(e)=> handleDetails(e)}/>
      <Input type="text" placeholder="Last Name" name="lname" onChange={(e)=> handleDetails(e)}/>
      <Input type="email" placeholder="Email" name="email" onChange={(e)=> handleDetails(e)}/>
      <Input type="password" placeholder="Password" name="password" onChange={(e)=> handleDetails(e)}/>
      <Text pt={"15px"} fontWeight={"normal"}>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</Text>
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
      <Button
        variant={"outline"}
        bgColor={"white"}
        color={"black"}
        w={"100%"}
        border={"1px solid black"}
        _hover={{  border: "1px solid black",
        bgColor: "black",
        color: "white", transform: "scale(1.03)" }}
        _active={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
      >
        Log In
      </Button>
      <Flex
        alignItems={"center"}
        p={"1px"}
        paddingLeft={"15px"}
        borderRadius={"5px"}
        bgColor={"facebook.400"}
        color={"#fff"}
        fontWeight={"semibold"}
        justifyContent={"space-between"}
        _hover={{opacity:"85%"}}
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
        _hover={{opacity:"85%"}}
      >
        Sign in with Google
        <Image src={google} maxH={"34px"} p="0px" bgColor="red.400" />
      </Flex>
    </VStack>
  );
};

export default SignupForm;
