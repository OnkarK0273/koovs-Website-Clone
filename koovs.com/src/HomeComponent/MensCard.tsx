import React from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Product } from "../utils/types";
const mens: Product[] = [
  {
    id: 1,
    active: true,
    img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
    img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
    brand: "Bravesoul",
    title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
    price: 799,
    description:
      "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
    category: "pants",
    is_best_seller: false,
    Order_status: "Pending",
    isOrdered: false,
  },
  {
    id: 2,
    active: true,
    img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
    img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
    brand: "Bravesoul",
    title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
    price: 799,
    description:
      "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
    category: "pants",
    is_best_seller: false,
    Order_status: "Pending",
    isOrdered: false,
  },
  {
    id: 3,
    active: true,
    img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
    img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
    brand: "Bravesoul",
    title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
    price: 799,
    description:
      "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
    category: "pants",
    is_best_seller: false,
    Order_status: "Pending",
    isOrdered: false,
  },
  {
    id: 4,
    active: true,
    img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
    img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
    brand: "Bravesoul",
    title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
    price: 799,
    description:
      "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
    category: "pants",
    is_best_seller: false,
    Order_status: "Pending",
    isOrdered: false,
  },
];

const MensCard = ({ img1, title, price }: Product) => {
  return (
    //For Artis Collaboraion

    <SimpleGrid columns={{ sm: 2, md: 4 }}>
      {mens.map((el) => (
        <Box
          //   key={i}
          borderRadius={10}
          transition="0.5s all ease-in-out"
          _hover={{ transform: "scale(1.02)" }}
          //boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          bgImage={el.img1}
          bgSize="cover"
          bgPosition={"center"}
          zIndex="1"
          bgRepeat={"no-repeat"}
          mr="1%"
          h="500px"
        >
          <Box textAlign={"left"} pl="20px" py={5}>
            <Text color={"gray"} fontSize={16} fontWeight="bold">
              KOOLS
            </Text>
            <Text color={"black"} fontSize={30} fontWeight="bold">
              {el.title}
            </Text>
            <Text fontWeight="normal" color={"gray"} fontSize={20}>
              Rs. {el.price}
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MensCard;
