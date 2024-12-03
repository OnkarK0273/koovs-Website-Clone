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

// UmberForest GreenInkMidnightOrange

const content = [
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/tops-01_copy.jpg?v=1667987961&width=360",
    title: "Tops",
    count: 73,
  },

  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/SBRA2-01.jpg?v=1667988040&width=360",
    title: "Sports Bra",
    count: 10,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Tee-01.jpg?v=1667898427&width=360",
    title: "T-Shirts",
    count: 15,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/shorts_women-01.jpg?v=1667898316&width=360",
    title: "Shorts",
    count: 22,
  },

  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/leggings-01.jpg?v=1667899318&width=360",
    title: "Leggings",
    count: 19,
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/sweats_women-01.jpg?v=1667898406&width=360",
    title: "Sweatshirts",
    count: 13,
  },
];
const TopWomenCarousel = () => {
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

export default TopWomenCarousel;
