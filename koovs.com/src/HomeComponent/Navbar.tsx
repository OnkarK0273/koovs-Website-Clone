import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Link,
 
} from "@chakra-ui/react";
//import Navbar1 from "./Navbar1"



import {  BsInstagram } from "react-icons/bs";
import {  BiChevronDown } from "react-icons/bi";

import { MdFacebook } from "react-icons/md";



export default function Navbar() {
  return (
    <>
      <Box px={15} >
        <Flex  alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction="row" spacing={2}>
            <Text color="black.300">
              <Link href="https://www.facebook.com/koovs" isExternal>
                {" "}
                <Button
                  leftIcon={<MdFacebook />}
                  //   colorScheme="black"
                  variant="ghost"
                >
                  1.8M Followers
                </Button>
              </Link>
            </Text>
            <Text color="black.300">
              {" "}
              <Link
                href="https://www.instagram.com/koovsfashion/"
                isExternal
                color="black.300"
              >
                {" "}
                <Button leftIcon={<BsInstagram />} variant="ghost">
                  682k Followers
                </Button>
              </Link>
            </Text>
          </Stack>
          <Text>Open doors to a world of fashion | Young and fresh</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown/>} backgroundColor={'white'}>
              English
            </MenuButton>
            <MenuList >
              <MenuItem>English</MenuItem>
            </MenuList>
          </Menu>

        </Flex>
      </Box>
      
    </>
  );
}
