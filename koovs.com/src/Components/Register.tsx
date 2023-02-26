<<<<<<< HEAD
// import React from 'react'
// import { Button } from "@chakra-ui/button";
// import { Image } from "@chakra-ui/image";
// import { Input } from "@chakra-ui/input";
// import { Box, Divider, Flex, Heading, Link, Text, VStack } from "@chakra-ui/layout";

// const Register = () => {
//   return (
//     <VStack

//       gap={3}
//       width={{ base: "90%", md: "35%" }}
//       alignItems={"left"}
//       padding={"10px"}
//     >
//         <Heading size={"md"}>New Customer</Heading>

//       <Text pt={"5px"} fontSize={"15px"}>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</Text>
//       <Button
//         variant={"solid"}
//         bgColor={"black"}
//         color={"white"}
//         width={"150px"}

//         _hover={{ transform: "scale(1.03)" }}
//         _active={{
//           border: "1px solid black",
//           bgColor: "white",
//           color: "black",
//         }}
//       >
//         Register
//       </Button>

//     </VStack>
//   )
// }

// export default Register

// import React from 'react'

const Register = () => {
  return <div>Register</div>;
=======
import React from "react";
import { Button } from "@chakra-ui/button";
import { Heading, Text, VStack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <VStack
      gap={3}
      width={{ base: "100%", md: "35%" }}
      alignItems={"left"}
      padding={"10px"}
    >
      <Heading size={"md"}>New Customer</Heading>

      <Text pt={"5px"} fontSize={"15px"}>
        Sign up for early Sale access plus tailored new arrivals, trends and
        promotions. To opt out, click unsubscribe in our emails.
      </Text>
      <Link to="/signup">
        <Button
          variant={"solid"}
          bgColor={"black"}
          color={"white"}
          width={"150px"}
          _hover={{ transform: "scale(1.03)" }}
          _active={{
            border: "1px solid black",
            bgColor: "white",
            color: "black",
          }}
        >
          Register
        </Button>
      </Link>
    </VStack>
  );
>>>>>>> 55a029b306f256b9231fb204e507f5d8d4d0bbcc
};

export default Register;
