/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, HStack, Heading } from "@chakra-ui/layout";
import React from "react";
import LoginForm from "../Components/LoginForm";
import { JSXElement } from "@babel/types";
import Register from "../Components/Register";
import SignupForm from "../Components/SignupForm";

const SignUp = (): JSX.Element => {
  return (
    <>
      {/* <Navbar/> */}
      <Box>
        {/* <Navbar1/> */}
        <Heading mt={"80px"} fontWeight={"semibold"} textAlign={"center"}>
          Register
        </Heading>
        <Flex justifyContent={"center"} gap={"80px"} mt={"100px"}>
          <SignupForm />
        </Flex>
      </Box>
    </>
  );
};

export default SignUp;
