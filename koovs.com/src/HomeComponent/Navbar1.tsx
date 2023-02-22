import { Box, Flex, Text, Button, Heading, Stack } from "@chakra-ui/react";

import { Tooltip } from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar1() {
  return (
    <>
      <Box px={15}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={12} px={10}>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>Artist collab</Text>
          </Stack>
          <Heading as={Link} to={"/"} size="2xl">
            kools
          </Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={1}>
              <Tooltip hasArrow label="Search " bg="black" color="white">
                <Button backgroundColor={"white"}>
                  <SlMagnifier size={"20px"} />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="Account " bg="black" color="white">
                <Button backgroundColor={"white"}>
                  <BsPerson size={"20px"} />
                </Button>
              </Tooltip>

              <Tooltip hasArrow label="Wishlist " bg="black" color="white">
                <Button backgroundColor={"white"}>
                  <AiOutlineStar size={"20px"} />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="Cart " bg="black" color="white">
                <Button as={Link} to={"/cart"} backgroundColor={"white"}>
                  <BiShoppingBag size={"20px"} />
                </Button>
              </Tooltip>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
