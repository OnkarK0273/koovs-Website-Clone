import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  HStack,
  Image,
  useDisclosure,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/Koolz-logo.png";

import { Tooltip } from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar1() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });
  // const logo =
  //   "https://raw.githubusercontent.com/OnkarK0273/penitent-degree-5872/main/koovs.com/public/images/Koolz-logo.png";
  return (
    <>
      <Box
        px={{ base: 5, md: 20 }}
        bg={useColorModeValue("white.100", "white.900")}
      >
        <Flex align="center" justify="space-between">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none", base: "flex" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            display={{ base: "none", md: "flex" }}
            spacing={5}
            px={0}
            fontSize={14}
          >
            <Link to="/men">
              <Text   _hover={{
                  textDecoration: "underline",
                  color: "teal",
                  fontWeight: "bold",
                }}>Men</Text>
            </Link>
            <Link to="/women">
              <Text   _hover={{
                  textDecoration: "underline",
                  color: "teal",
                  fontWeight: "bold",
                }}>Women</Text>
            </Link>
            <Link to="/">
              <Text   _hover={{
                  textDecoration: "underline",
                  color: "teal",
                  fontWeight: "bold",
                }}>Artist collab</Text>
            </Link>
          </HStack>
          <Stack
        //    display={{ md: "auto", base: "flex" }}
        mx={{ base: "flex-right", md: "auto" }}
           >
            <Tooltip
              label="KoolZ"
              placement="bottom-end"
              bg="white"
              color="gray"
            >
              {/* <Heading as={Link} to={"/"} size="2xl">
                kools
              </Heading> */}
              <Link to="/">
                <Image width={130} height={75} src={logo} alt="logo-koolz" />
              </Link>
            </Tooltip>
          </Stack>
          <Box display={{ base: "flex", md: "none" }} >

          </Box>
          <Flex
            direction={["column", "row"]}
            align={isSmallScreen ? "center" : "flex-right"}
            justify={isSmallScreen ? "center" : "space-between"}
            width={isSmallScreen?"100%" :"auto"}
           
            px={4}
            py={2}
            position={{base:"fixed",lg:'absolute' }}
            bg={{base:"blue.300",lg:'none' }}
            top={isSmallScreen ? "auto" : 14}
            bottom={isSmallScreen ? 0 : "auto"}
            left={isSmallScreen ? 0 : "auto"}
            right={isSmallScreen ? "auto": 0}
            zIndex={1999}
            mx={useBreakpointValue({ base: "auto", md: "auto" })}
          >
            <HStack 
            // display={{ md: "flex", base: "flex" }}
            >
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
              <Tooltip hasArrow label="Admin " bg="black" color="white">
                <Button as={Link} to={"/admin"} backgroundColor={"white"}>
                  <GrUserAdmin size={"20px"} />
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
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={5} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
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
          </Box>
        ) : null}
      </Box>
    </>
  );
}