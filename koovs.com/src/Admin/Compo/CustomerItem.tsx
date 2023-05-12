import React, { useState } from "react";
import { Userdetails } from "../../utils/types";

import {
  Avatar,
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import { useAppDispatch } from "../../Redux/store";
import { getAdminUserPatch } from "../../Redux/admin/admin.action";
import CustomerTable from "./CustomerTable";
interface listingListProps {
  setPage: (page: number) => void;
  page: number;
  data: Userdetails[];
}
export default function CustomerItems({
  data,
  setPage,
  page,
}: listingListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mid, msetId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const toast = useToast();

  const dispatch = useAppDispatch();

  const handleOpenDetails = (
    id: number,
    Image: string,
    Password: string,
    Name: string,
    Phone: string,
    Email: string
  ) => {
    setName(Name);
    setPass(Password);
    setImage(Image);
    msetId(id);
    setContact(Phone);
    setEmail(Email);
    onOpen();
  };

  const handleSubmit = () => {
    dispatch(getAdminUserPatch(mid, image, pass, name, contact, Email)).then(
      (res: any) => {
        toast({
          title: "Updated Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    );
  };

  return (
    <Box>
      <Box>
        <SimpleGrid gap={4} p="4px">
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            // boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            p="10px"
            mb={"20px"}
            mt={"30px"}
            border="1px solid teal"
          >
            <Box
              width={{ base: "5%", md: "7%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>S.NO</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "12%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>IMAGE</Text>
            </Box>
            <Box
              width={{ base: "7%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>NAME</Text>
            </Box>

            <Box
              width={{ base: "10%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>CONTACT</Text>
            </Box>

            <Box
              width={{ base: "15%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>EMAIL</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>PASSWORD</Text>
            </Box>
            <Box
              width={{ base: "20%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>ADDRESS</Text>
            </Box>
          </Box>

          {data?.map((el, i) => (
            <CustomerTable
              key={el.id}
              data={el}
              handleOpenDetails={handleOpenDetails}
              i={i}
              // {...el}
              // handleOpenDetails={handleOpenDetails}
              // handleToggleStatus={handleToggleStatus}
            />
          ))}
          <Pagination page={page} setPage={setPage} />
        </SimpleGrid>
      </Box>

      {/* modal */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
        <ModalContent bg={"#CBEDD5"} color={"black"}>
          <ModalHeader>Edit Details</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6} textAlign={"center"}>
            <Avatar border={"1px solid teal"} size={"xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                  // console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Name:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Phone:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              ></Input>
              <Text mt={"10px"}>Email:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
              <Text mt={"10px"}>Password:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              >
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="teal.500"
              mr={3}
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Save
            </Button>
            <Button colorScheme={"red"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
