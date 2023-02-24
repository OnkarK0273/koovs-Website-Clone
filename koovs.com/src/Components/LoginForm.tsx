import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import fb from "../Utils/fbIcon.png";
import google from "../Utils/googleIcon.png";

const LoginForm = (): JSX.Element => {
  return (
    <VStack
    
      gap={3}
      width={{ base: "90%", md: "30%" }}
      alignItems={"left"}
      padding={"10px"}
    >
        <Heading size={"md"}>Log In</Heading>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Text pt={"15px"} textDecoration={"underline"}>Forgot Your Password?</Text>
      <Button
        variant={"solid"}
        bgColor={"black"}
        color={"white"}
        w={"100%"}
        _hover={{ transform: "scale(1.03)" }}
        _active={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
      >
        Sign In
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

export default LoginForm;
