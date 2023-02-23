import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Avatar,
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import AdminDrawer from "./AdminDrawer";
import Dashbord from "../tabpanal/Dashbord";
import Listing from "../tabpanal/Listing";



export default function AdminPage() {
  const prodRef:any= useRef();
  const dashboardRef:any = useRef();
  const customerRef:any = useRef();
  const orderRef:any = useRef();
  const accountRef:any = useRef();

  useEffect(()=>{
    document.title = 'Koolz | Admin'
  },[])


  return (
    <>
            <Tabs display={"flex"}>
        <TabList
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          w={{ md: "30%", lg: "20%" }}
          padding={"15px"}
          backgroundColor={"#439A97"}
          color={"white"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}
        >
          <Box width={"60%"} m={"auto"} mt={0} mb={0}>
            <Image
              alt="logo"
              src="/images/koolz-logo.png"
            ></Image>
          </Box>

          <Box textAlign={"center"} mt={"20px"}>
            <Avatar size={"2xl"} src={'https://avatars.githubusercontent.com/u/110043714?v=4'}></Avatar>
          </Box>
          <Box textAlign={"center"} mt={"20px"} mb={"20px"}>
            <Text>{'Onkar.K'}</Text>
            <Text color={"black"}>{'onkar.k@koolz.com'}</Text>
    
          </Box>

          

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "#97DECE",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Dashboard
          </Tab>
          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "#97DECE",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Listings
          </Tab>
          <Tab
            ref={orderRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "#97DECE",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Orders
          </Tab>
          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
           
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "#97DECE",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Customers
          </Tab>
          <Box padding={"0px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={accountRef}
            mb={"5px"}
            borderRadius={"5px"}
            // transition={"0.8s"}
            _selected={{
              color: "black",
              bg: "#97DECE",
              transform: "scale(1.05)",
              transition: "0.8s",
            }}
          >
            Account Info
          </Tab>
          <Button
            mt={"5px"}
            variant={"solid"}
            borderRadius={"5px"}
            colorScheme={"red"}
           
          >
            Logout
          </Button>
        </TabList>

            {/* tab panals */}
        <TabPanels pl={{ md: "32%", lg: "21%" }}  bg='#CBEDD5'>
          <TabPanel p={0}  >
            <Dashbord/>
          </TabPanel>
          <TabPanel p={0}>
            <Listing/>
          </TabPanel>
          <TabPanel p={0}>
          Orders page
          </TabPanel>
          <TabPanel p={0}>
          Customers
          </TabPanel>
          <TabPanel p={0}>
            account info page
          </TabPanel>
        </TabPanels>
      </Tabs>

            {/* hambarger side manu bar */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        backgroundColor={"#439A97"}
        color={"white"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}
      >
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          prodRef={prodRef}
        />
        <Box>
          <Menu>
            <MenuButton pr='15px'>
              <Avatar  src={'https://avatars.githubusercontent.com/u/110043714?v=4'} name={'Onkar.k'}></Avatar>
            </MenuButton>
            <MenuList backgroundColor={"#439A97"} border={"1px solid #439A97"}>
              <MenuItem backgroundColor={"#439A97"}>
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem backgroundColor={"#06096B4"} color={"red.600"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <FiLogOut />{" "}
                  <Text ml={"20px"} fontSize={"md"} >
                    Logout
                  </Text>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

    </>
  )
}
