import { Box, Flex, Heading } from "@chakra-ui/layout";
// import React from "react";
import LoginForm from "../Components/LoginForm";
import Register from "../Components/Register";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";

const Login = ():JSX.Element => {
  const {isAuth} = useAppSelector((store)=> store.loginReducer);

  if(isAuth){
    <Navigate to={"/"} replace={true}/>
  }
  return (
    <Box>
      <Heading mt={"80px"} fontWeight={"semibold"} textAlign={"center"}>
        Log In
      </Heading>
      <Flex justifyContent={"center"} gap={{base: "10px", md:"80px"}} mt={"100px"} flexDirection={{base: "column", md: "row"}}>
      <LoginForm />
        <Register />
      </Flex>
    </Box>
  );
};

export default Login;
