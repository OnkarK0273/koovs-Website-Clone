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
import {  BsInstagram } from "react-icons/bs";
import {  BiChevronDown } from "react-icons/bi";
import { MdFacebook } from "react-icons/md";



export default function Navbar() {
  return (
    <>
      <Box px={20} >
        <Flex  alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction="row" spacing={-5}>
            <Text  >
              <Link href="https://www.facebook.com/koovs" isExternal>
                {" "}
                <Button
                  leftIcon={<MdFacebook />}
                  //   colorScheme="black"
                  variant="ghost"
                  fontSize={14}
                  color="black"
                  fontWeight={400}
                  marginLeft={-5}
                >
                  1.8M Followers
                </Button>
              </Link>
            </Text>
            <Text >
              {" "}
              <Link
                href="https://www.instagram.com/koovsfashion/"
                isExternal
                color="black.300"
              >
                {" "}
                <Button leftIcon={<BsInstagram />} variant="ghost"  fontSize={14}
                  color="black"
                  fontWeight={400}>
                  682k Followers
                </Button>
              </Link>
            </Text>
          </Stack>
          <Text fontSize={14} marginLeft={-20}>Open doors to a world of fashion | Young and fresh</Text>
          <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown/>} backgroundColor={'white'} fontSize={14}
                  color="black"
                  fontWeight={400}>
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
