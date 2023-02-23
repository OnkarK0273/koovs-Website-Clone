import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import fb from "../Utils/fbIcon.png";
import google from "../Utils/googleIcon.png";

const SignupForm = (): JSX.Element => {
  return (
    <VStack
    
      gap={3}
      width={{ base: "90%", md: "50%" }}
      alignItems={"left"}
      padding={"10px"}
    >
        <Heading size={"md"} fontWeight={"semibold"}>Register</Heading>
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Text pt={"15px"} fontWeight={"normal"}>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</Text>
      <Button
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
