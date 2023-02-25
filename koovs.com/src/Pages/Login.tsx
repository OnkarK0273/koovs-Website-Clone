import { Box, Flex, Heading } from "@chakra-ui/layout";
// import React from "react";
import LoginForm from "../Components/LoginForm";
import Register from "../Components/Register";

const Login = ():JSX.Element => {
  return (
    <Box>
      <Heading mt={"80px"} fontWeight={"semibold"} textAlign={"center"}>
        Log In
      </Heading>
      <Flex justifyContent={"center"} gap={"80px"} mt={"100px"}>
      <LoginForm />
        <Register />
      </Flex>
    </Box>
  );
};

export default Login;
