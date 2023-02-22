import { Flex, Container, Box } from "@chakra-ui/react";
import CartPayment from "./CartPayment";

import Details from "./Details";

function PaymentPage(): JSX.Element {
  return (
    <>
      <Box>
        <Box w="full">
          <Container maxW="container.xl" p={0}>
            <Flex
              h={{ base: "auto", md: "100vh" }}
              py={[0, 10, 20]}
              direction={{ base: "column-reverse", md: "row" }}
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
