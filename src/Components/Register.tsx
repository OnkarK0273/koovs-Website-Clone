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
};

export default Register;
