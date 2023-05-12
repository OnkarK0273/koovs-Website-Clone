import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const content = [
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/ball_sweatshirt-01.jpg?v=1668170499&width=360",
    title: "Sweatshirts",
    count: 61,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/unisex_accessories-01.jpg?v=1668170734&width=360",
    title: "Accessories",
    count: 9,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Untitled-6-01.jpg?v=1667985899&width=360",
    title: "T-Shirts",
    count: 99,
  },

  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1025.jpg?v=1667897521&width=360",
    title: "Jackets",
    count: 21,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-0291.jpg?v=1667985664&width=360",
    title: "Pants",
    count: 18,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/shortsn-01.jpg?v=1667897412&width=360",
    title: "Shorts",
    count: 27,
  },
];
const TopMenCarousel = () => {
  return (
    <Box w="95%" mt={"2%"} margin={"auto"}>
      <Carousel responsive={responsive}>
        {content &&
          content.map((el, i) => (
            <Box
              key={i}
              borderRadius={0}
              transition="0.5s all ease-in-out"
              _hover={{ transform: "scale(0.95)" }}
              //   boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              bgImage={el.src}
              bgSize="cover"
              bgPosition={"center"}
              zIndex="1"
              bgRepeat={"no-repeat"}
              mr="8%"
              h="400px"
            >
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                pt="320px"
              >
                <Box textAlign={"left"} pl={5}>
                  <Text fontSize={17} color="black">
                    {el.title}
                  </Text>
                  <Text fontSize={15} mt="2px" color="gray">
                    {el.count} items
                  </Text>
                </Box>
                <Box pr={5}>
                  <IconButton
                    variant="none"
                    colorScheme="black"
                    bg="white"
                    aria-label="Link to Categories"
                    icon={<ArrowForwardIcon />}
                    borderRadius="full"
                    _hover={{ bg: "black.500", colorScheme: "white" }}
                  />
                </Box>
              </Flex>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
};

export default TopMenCarousel;
