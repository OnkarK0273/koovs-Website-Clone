import { Box, Flex, Text, Button, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Koolz-logo.png";

import { Tooltip } from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

export default function Navbar1() {
  return (
    <>
      <Box px={20}>
      <Flex
      // as="nav"
      align="center"
      justify="space-between"
      // wrap="wrap"
      // padding="0.5rem"
      // bg="gray.800"
      // color="white"
      // position="fixed"
      // top="0"
      // zIndex="sticky"
    >
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
          <Tooltip label="KoolZ" placement="bottom-end" bg="white" color="gray">
            {/* <Heading as={Link} to={"/"} size="2xl">
              kools
            </Heading> */}
            <Link to="/">
              <Image width={130} height={75} src={logo} alt="logo-koolz" />
            </Link>
          </Tooltip>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={-2}>
              <Tooltip hasArrow label="Search " bg="black" color="white">
                <Button backgroundColor={"white"}>
                  <SlMagnifier size={"20px"} />
                </Button>
              </Tooltip>
              <Tooltip hasArrow label="Account " bg="black" color="white">
                <Button as={Link} to={"/login"} backgroundColor={"white"}>
                  <BsPerson size={"20px"} />
                </Button>
              </Tooltip>

              <Tooltip hasArrow label="Wishlist " bg="black" color="white">
                <Button as={Link} to={"/wishlist"} backgroundColor={"white"}>
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
