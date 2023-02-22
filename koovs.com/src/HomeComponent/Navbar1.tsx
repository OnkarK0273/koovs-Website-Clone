import { Box, Flex, Text, Button, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Tooltip } from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

export default function Navbar1() {
  return (
    <>
      <Box px={20}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={5} px={0} fontSize={14}>
            <Link to="/men">
              <Text>Men</Text>
            </Link>
            <Link to="/women">
              <Text>Women</Text>
            </Link>
            <Link to="/">
              <Text>Artist collab</Text>
            </Link>
          </Stack>
          <Tooltip label="Kools" placement="bottom-end" bg="white" color="gray">
            <Heading size="2xl">kools</Heading>
          </Tooltip>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={-2}>
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
                <Link to="/cart">
                  {" "}
                  <Button backgroundColor={"white"}>
                    <BiShoppingBag size={"20px"} />
                  </Button>
                </Link>
              </Tooltip>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
