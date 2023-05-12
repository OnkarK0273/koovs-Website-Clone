import React, { useState } from "react";
import { Product } from "../../utils/types";
import ListingTable from "./ListingTable";
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import { useAppDispatch } from "../../Redux/store";
import {
  getAdminWomenPatch,
  getAdminWomenToggle,
} from "../../Redux/admin/admin.action";
interface listingListProps {
  setPage: (page: number) => void;
  page: number;
  data: Product[];
}
export default function ListingItems1({
  data,
  setPage,
  page,
}: listingListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, SetImage] = useState<string>("");
  const [mid, msetId] = useState<string>("");
  const toast = useToast();
  const dispatch = useAppDispatch();
  const handleToggle = (id: string, val: boolean) => {
    dispatch(getAdminWomenToggle(id, val));
  };

  const handleOpenDetails = (
    id: string,
    image: string,
    price: number,
    title: string
  ) => {
    setTitle(title);
    setPrice(price);
    SetImage(image);
    msetId(id);
    onOpen();
  };

  const handleSubmit = () => {
    dispatch(getAdminWomenPatch(mid, image, price, title)).then((res: any) => {
      toast({
        title: "Updated Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  return (
    <Box>
      <Box>
        <SimpleGrid gap={4} p="4px">
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"left"}
            // boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            padding={"10px"}
            mt={"20px"}
            border="1px solid teal"
          >
            {/* <Box
                width={"6%"}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>S.NO</Text>
              </Box> */}
            <Box
              width={{ base: "10%", md: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>ID</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>IMAGE</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "27%", lg: "25%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>PRODUCTS</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "7%", lg: "8%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>PRICE</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>CATEGORY</Text>
            </Box>
            <Box
              w={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>STATUS</Text>
            </Box>
          </Box>

          {data?.map((el, i) => (
            <ListingTable
              key={el.id}
              data={el}
              handleToggle={handleToggle}
              handleOpenDetails={handleOpenDetails}
              // i={i}
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
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} border={"1px solid teal"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  SetImage(e.target.value);
                  // console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  // console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                borderColor="teal.500"
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  // console.log(e.target.value);
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
