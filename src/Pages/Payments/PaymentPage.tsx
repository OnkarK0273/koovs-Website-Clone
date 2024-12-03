import { Flex, Container, Box } from "@chakra-ui/react";
import CartPayment from "./CartPayment";
import React from "react";
import Details from "./Details";

function PaymentPage(): JSX.Element {
  return (
    <>
      <Box bg="whitesmoke">
        <Box w="full">
          <Container maxW="container.xl" p={0}>
            <Flex
              h={{ base: "auto", md: "90vh" }}
              gap="20px"
              py={[0, 10, 20]}
              direction={{ base: "column", md: "row" }}
            >
              <Details />
              <CartPayment />
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default PaymentPage;
