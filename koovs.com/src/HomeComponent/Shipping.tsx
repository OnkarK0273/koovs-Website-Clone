import React from "react";
import { Flex, Avatar, Text, Box, SimpleGrid } from "@chakra-ui/react";

const Shipping = () => {
  return (
    <div style={{ width: "60%", margin: "auto", marginTop:"50px", marginBottom:"50px" }} >
      <SimpleGrid columns={[1, 2, 4]} spacing="40px">
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Avatar src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/delivery-truck.png?v=1668332734&width=360"  size='sm'/>
          <Box ml={3}>
            <Text fontWeight="bold" textAlign={"left"}>
              Money Guarantee
             
            </Text>
            <Text fontSize="sm">For orders above INR 1500.</Text>
          </Box>
        </Flex>
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Avatar src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/money-back.png?v=1668332753&width=360" size='sm' />
          <Box ml={3}>
            <Text fontWeight="bold" textAlign={"left"}>
              Free Shipping
         
            </Text>
            <Text fontSize="sm">Within 30 days for an exchange.</Text>
          </Box>
        </Flex>
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Avatar src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/customer-care.png?v=1668332773&width=360" size='sm' />
          <Box ml={3}>
            <Text fontWeight="bold" textAlign={"left"}>
              Online Support
             
            </Text>
            <Text fontSize="sm">10 AM - 6 PM, Mon - Sat</Text>
          </Box>
        </Flex>
        <Flex alignContent={'center'} justifyContent={'center'}>
          <Avatar src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/credit-card.png?v=1668332788&width=360" size='sm' />
          <Box ml={3}>
            <Text fontWeight="bold" textAlign={"left"}>
              Flexible Payment
              
            </Text>
            <Text fontSize="sm">Pay with Multiple Credit Cards</Text>
          </Box>
        </Flex>
      </SimpleGrid>
    </div>
  );
};

export default Shipping;