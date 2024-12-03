import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Product } from "../utils/types";
import { Link } from "react-router-dom";
// const mens: Product[] = [
//   {
//     id: 1,
//     active: true,
//     img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
//     img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
//     brand: "Bravesoul",
//     title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
//     price: 799,
//     description:
//       "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
//     category: "pants",
//     is_best_seller: false,
//     Order_status: "Pending",
//     isOrdered: false,
//   },
//   {
//     id: 2,
//     active: true,
//     img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
//     img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
//     brand: "Bravesoul",
//     title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
//     price: 799,
//     description:
//       "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
//     category: "pants",
//     is_best_seller: false,
//     Order_status: "Pending",
//     isOrdered: false,
//   },
//   {
//     id: 3,
//     active: true,
//     img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
//     img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
//     brand: "Bravesoul",
//     title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
//     price: 799,
//     description:
//       "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
//     category: "pants",
//     is_best_seller: false,
//     Order_status: "Pending",
//     isOrdered: false,
//   },
//   {
//     id: 4,
//     active: true,
//     img1: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777277_2_v1_2x_ea8f4cf0-caeb-4b4c-b9f7-888d2086472b.webp?v=1670245150&width=360",
//     img2: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/RTLAAV327901_15777276_1_v1_2x_ed69e0b6-3c9d-49a7-b2ac-ad9e4c4e8cf2.webp?v=1670245150&width=360",
//     brand: "Bravesoul",
//     title: "BLACK ELASTICATED LOGO WAISTBAND JERSEY LOUNGE PANTS",
//     price: 799,
//     description:
//       "BRAVE SOUL MENS LOUNGEWEAR FULL LENGTH TROUSERS STRAIGHT LEG COMFY FIT ELASTIC WAIST LOGO AROUND...",
//     category: "pants",
//     is_best_seller: false,
//     Order_status: "Pending",
//     isOrdered: false,
//   },
// ];

const WomensCard = ({ img1, img2, title, price }: Product) => {
  return (
    <Box as={Link} to="/women">
      <Box
        // w={"s"}
        h={350}
        // border="1px solid red"
        bgImage={`url(${img1})`}
        bgSize="100% 100%"
        bgRepeat="no-repeat"
        position="relative"
        transition="0.5s all ease-in-out"
        _hover={{
          "&:before": {
            content: "''",
            display: "block",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            //   background: "rgba(0, 0, 0, 0.5)",
          },

          "&:hover": {
            bgImage: `url(${img2})`,
          },
        }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          opacity={0}
          transition="opacity 0.3s"
          _hover={{
            opacity: 1,
            // transform: "scale(1.1)",
            //transform: "translate(-50%, -70%)",
          }}
        >
          <Box
            bgImage={`url('${img2}')`}
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            bgPosition="center"
            w="100%"
            h="100%"
          />
        </Box>
      </Box>
      <Box textAlign={"left"} pl="20px" py={5}>
        <Text color={"gray"} fontSize={12} fontWeight="bold">
          KOOLS
        </Text>
        <Text color={"black"} fontSize={14} fontWeight="bold">
          {title}
        </Text>
        <Text fontWeight="normal" color={"gray"} fontSize={12}>
          Rs. {price}
        </Text>
      </Box>
    </Box>
  );
};

export default WomensCard;
