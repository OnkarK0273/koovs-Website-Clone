import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Product } from "../utils/types";

const ShoesCard = ({ img1, img2,title, price }: Product) => {
  return (
    //For Artis Collaboraion

    <Box>
      <Box
        // w={"s"}
        h={320}
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
          KOOLZ
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

export default ShoesCard;
