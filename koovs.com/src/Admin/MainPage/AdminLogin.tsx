import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Navigate } from "react-router-dom";
import { adminLogin, getAdminAdmin } from "../../Redux/admin/admin.action";
import { getAdminAPI } from "../../Redux/admin/admin.api";
import { loginRequest, loginSuccess } from "../../Redux/Auth/login.action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import adminImg from "../../utils/Images/admin.png";
import { AdminLoginDetails } from "../../utils/types";


const AdminLogin = () => {
  
  const isAdmin = useAppSelector((store) => store.adminReducer.isAdmin);

  // if (isAdmin) {
  //   return <Navigate to={"/admin"} replace={true} />;
  // }

  const dispatch = useAppDispatch();
  const {admin} = useAppSelector((store)=> store.adminReducer)
  const toast = useToast()

  const [loginDetailsAdmin, setLoginDetailsAdmin] = React.useState<AdminLoginDetails>({
    email: "",
    password: "",
    isAdmin: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDetails: AdminLoginDetails = {
      ...loginDetailsAdmin,
      [e.target.name]: e.target.value,
    };
    setLoginDetailsAdmin(newDetails)
  };
    

    React.useEffect(()=>{
      const adminnnn = getAdminAPI()
      adminnnn.then((res)=> dispatch(getAdminAdmin()))
      
    },[])


    const handleFormSubmit = ():void => {
      dispatch(loginRequest());
      if(admin.EmailId == loginDetailsAdmin.email && admin.Password == loginDetailsAdmin.password){
        dispatch(adminLogin());
        admin.isAdmin && admin.isAuth && sessionStorage.setItem("KoolAdmin", JSON.stringify(true));
        return;
      }
      if (loginDetailsAdmin.email === "" || loginDetailsAdmin.password === "") {
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
      
    }


  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={"100px"}
      alignItems={"center"}
      mt={"50px"}
    >
      <Box pb={"100px"}>
        <Heading size={"md"}>Hi, Admin.</Heading>
        <Text mb={2} color={"gray.500"}>
          Login to get your super powers...
        </Text>
        <Image src={adminImg} p="0px" bgColor="blue.100" width={"450px"} />
      </Box>
      <>
        <VStack
          mb={"80px"}
          gap={3}
          width={{ base: "100%", md: "30%" }}
          alignItems={"left"}
          padding={"10px"}
        >
          <Heading size={"md"}>Log In</Heading>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <Text pt={"15px"} textDecoration={"underline"}>
            Forgot Your Password?
          </Text>
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
        </VStack>
      </>
    </Box>
  );
};

export default AdminLogin;
