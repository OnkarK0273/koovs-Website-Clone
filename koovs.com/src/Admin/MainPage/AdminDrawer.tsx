import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";


interface IadmindrowerPro{
  prodRef:any;
  orderRef:any;
  dashboardRef:any;
  customerRef:any;
  
}

const AdminDrawer = ({
  prodRef,
  orderRef,
  dashboardRef,
  customerRef,

}:IadmindrowerPro) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef:any = React.useRef();
  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <RiMenu2Line fontSize={"32px"} />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={"#6096B4"}
          color={"white"}
          textAlign={"center"}
        >
          <DrawerCloseButton fontSize={"xl"} />
          <DrawerBody fontSize={"2xl"} >
            <Box
              mt={"160px"}
              p={"10px"}
              _hover={{ backgroundColor: "blue.500" }}
              onClick={() => {
                dashboardRef.current.click();
                onClose();
              }}
            >
              Dashboard
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                prodRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Listings
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                orderRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Orders
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                customerRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Customers
            </Box>
            {/* <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                discountRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Discounts
            </Box> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
