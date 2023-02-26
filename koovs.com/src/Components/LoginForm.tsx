import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import fb from "../utils/Images/fbIcon.png";
import google from "../utils/Images/googleIcon.png";
import { LoginDetail, SignupDetail } from "../utils/types";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { loginError, loginRequest, loginSuccess } from "../Redux/Auth/login.action";
import { Navigate } from "react-router-dom";
import App from "../App";



const LoginForm = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const {isAuth} = useAppSelector((store)=> store.loginReducer);
  

  const [loginDetails, setLoginDetails] = React.useState<LoginDetail>({
    email:"",password:""
  });
  const [allUsers, setAllUsers] = React.useState<SignupDetail[] | undefined>()
  
  useEffect(()=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/allUsers`)
    .then((res)=> setAllUsers(res.data))
    .catch((err)=>dispatch(loginError()))
  },[])
  
  



  //  login functions

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const newDetails:LoginDetail = {...loginDetails,
      [e.target.name]: e.target.value 
    }
    setLoginDetails(newDetails);

  };
  // console.log(loginDetails)

   const handleFormSubmit = ():void => {
    dispatch(loginRequest())
     if (loginDetails.email == "" || loginDetails.password=="") {
      toast({
        title: 'Warning! Form Incomplete',
        description: "Please fill all the details",
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position:"top"
      });
       return;
    }
    else {
      allUsers?.forEach((el)=>{
        if(el.email == loginDetails.email && el.password == loginDetails.password ){
          dispatch(loginSuccess(el))
        }

      }
      )
    }

  }

  if(isAuth){
    return <Navigate to={"/account"} replace={true}/>
  }
  
  return (
    <VStack
      mb={"80px"}
      gap={3}
      width={{ base: "100%", md: "30%" }}
      alignItems={"left"}
      padding={"10px"}
    >
        <Heading size={"md"}>Log In</Heading>
      <Input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)}/>
      <Input type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e)}/>
      <Text pt={"15px"} textDecoration={"underline"}>Forgot Your Password?</Text>
      <Button
       onClick={handleFormSubmit}
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
