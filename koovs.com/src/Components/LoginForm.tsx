// import { Button } from "@chakra-ui/button";
// import { Image } from "@chakra-ui/image";
// import { Input } from "@chakra-ui/input";
// import { Box, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";
// import React from "react";
// import fb from "../Utils/Images/fbIcon.png";
// import google from "../Utils/Images/googleIcon.png";
// import { LoginDetail } from "../utils/types";

// interface StoreLoginDetail  {
//   login: false;
//   details: LoginDetail
// }

// const LoginForm = (): JSX.Element => {

//   const [loginDetails, setLoginDetails] = React.useState<StoreLoginDetail>({
//     login: false,
//     details: {email:"",password:""}
//   });
//   const [passIsEmpty, setPassIsEmpty] = React.useState<boolean>(false);
//   const [emailIsEmpty, setEmailIsEmpty] = React.useState<boolean>(false);

//   // login functions

//   const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
//     const newDetails = {
//       ...loginDetails,
//       details: { ...loginDetails.details, [e.target.name]: e.target.value },
//     };
//     setLoginDetails(newDetails);
//     setPassIsEmpty(false);
//     setEmailIsEmpty(false);
//   };

//   const handleFormSubmit = () => {
//     if (loginDetails == null) {
//       window.alert("Please fill the form!");
//       return;
//     } else if (
//       loginDetails.details.email == undefined ||
//       loginDetails.details.email == ""
//     ) {
//       setEmailIsEmpty(true);
//       return;
//     } else if (
//       loginDetails.details.password == undefined ||
//       loginDetails.details.password == ""
//     ) {
//       setPassIsEmpty(true);
//       return;
//     }
//     setPassIsEmpty(false);
//     setEmailIsEmpty(false);

//     // signupStore.details.map((el:any) => {
//     //   if (
//     //     el.email == loginDetails.details.email ||
//     //     el.mobile == loginDetails.details.email
//     //   ) {
//     //     if (el.password == loginDetails.details.password) {
//     //       dispatch(loginSuccess(el));
//     //       onLoginClose();
//     //       toast({
//     //         title: "Login Successfull",
//     //         status: "success",
//     //         duration: 9000,
//     //         isClosable: true,
//     //       });
//     //       location.reload();
//     //       return;
//     //     }
//     //   }
//     // });
//   };
//   return (
//     <VStack

//       gap={3}
//       width={{ base: "90%", md: "30%" }}
//       alignItems={"left"}
//       padding={"10px"}
//     >
//         <Heading size={"md"}>Log In</Heading>
//       <Input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)}/>
//       <Input type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e)}/>
//       <Text pt={"15px"} textDecoration={"underline"}>Forgot Your Password?</Text>
//       <Button
//       onClick={handleFormSubmit}
//         variant={"solid"}
//         bgColor={"black"}
//         color={"white"}
//         w={"100%"}
//         _hover={{ transform: "scale(1.03)" }}
//         _active={{
//           border: "1px solid black",
//           bgColor: "white",
//           color: "black",
//         }}
//       >
//         Sign In
//       </Button>
//       <Flex
//         alignItems={"center"}
//         p={"1px"}
//         paddingLeft={"15px"}
//         borderRadius={"5px"}
//         bgColor={"facebook.400"}
//         color={"#fff"}
//         fontWeight={"semibold"}
//         justifyContent={"space-between"}
//         _hover={{opacity:"85%"}}
//       >
//         Sign in with Facebook
//         <Image src={fb} maxH={"40px"} p="0px" />
//       </Flex>
//       <Flex
//         alignItems={"center"}
//         p={"3px"}
//         paddingLeft={"15px"}
//         borderRadius={"5px"}
//         bgColor={"red.500"}
//         color={"#fff"}
//         fontWeight={"semibold"}
//         justifyContent={"space-between"}
//         _hover={{opacity:"85%"}}
//       >
//         Sign in with Google
//         <Image src={google} maxH={"34px"} p="0px" bgColor="red.400" />
//       </Flex>
//     </VStack>
//   );
// };

// export default LoginForm;

// import React from 'react'

// import React from 'react'

const LoginForm = () => {
  return <div>LoginForm</div>;
};

export default LoginForm;
