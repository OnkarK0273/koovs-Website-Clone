/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getAdminAdmin, getAdminPatch } from "../../Redux/admin/admin.action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

interface admin {
  Name: string;
  EmailId: string;
  Phone: string;
  Password: string;
  Image: string;
}
const AccountInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const admin = useAppSelector((store) => store.adminReducer.admin);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [Name, setName] = useState<string>("");
  const [EmailId, setEmailId] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [Password, setPass] = useState<string>("");
  const [Image, setImage] = useState<string>("");
  const handleClick = () => setShow(!show);

  const handleSetData = (
    name: string,
    email: string,
    pass: string,
    image: string,
    phone: string
  ) => {
    setName(name);
    setEmailId(email);
    setPhone(phone);
    setPass(pass);
    setImage(image);
    onOpen();
  };

  const handleSendUpdatedData = () => {
    dispatch(getAdminPatch(Name, EmailId, Phone, Password, Image)).then(
      (res: any) => {
        dispatch(getAdminAdmin());
        toast({
          title: "Updated Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    );
  };

  console.log(admin);
  useEffect(() => {
    dispatch(getAdminAdmin());
  }, []);

  return (
    <Box
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#CBEDD5"}
      color={"black"}
    >
      <Heading>Admin Acccount</Heading>
      <Text color={"#00b5b8"}>Admin Info</Text>
      <Box textAlign={"center"} mt={"30px"}>
        <Avatar
          size={"2xl"}
          src={admin.Image}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        ></Avatar>
        <SimpleGrid
          width={{ base: "90%", md: "85%", lg: "40%" }}
          m={"auto"}
          mt={"20px"}
          gap={3}
        >
          <Input
            borderColor={"teal.500"}
            color={"gray.600"}
            readOnly
            value={admin.Name}
          ></Input>
          <Input
            borderColor={"teal.500"}
            color={"gray.600"}
            readOnly
            value={admin.EmailId}
          ></Input>
          <Input
            borderColor={"teal.500"}
            color={"gray.600"}
            readOnly
            value={admin.Phone}
          ></Input>
          <InputGroup size="md">
            <Input
              color={"gray.600"}
              borderColor={"teal.500"}
              readOnly
              pr="4.5rem"
              type={show ? "text" : "password"}
              value={admin.Password}
            />
            <InputRightElement width="4.5rem">
              <Box onClick={handleClick} cursor={"pointer"}>
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Box>
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={() => {
              handleSetData(
                admin.Name,
                admin.EmailId,
                admin.Password,
                admin.Image,
                admin.Phone
              );
            }}
            bg="teal.500"
          >
            Edit Details
          </Button>
          {/*````````````````````````````````````````````````````` modal````````````````````````````````````````````` */}
          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
            <ModalContent bg={"#CBEDD5"} color={"black"}>
              <ModalHeader>Create Admin account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6} textAlign={"center"}>
                <Avatar
                  size={"xl"}
                  src={Image}
                  name={Name}
                  border="2px solid teal"
                ></Avatar>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    ref={initialRef}
                    borderColor="teal.500"
                    value={Image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    borderColor="teal.500"
                    value={Name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Email Id</FormLabel>
                  <Input
                    value={EmailId}
                    borderColor="teal.500"
                    onChange={(e) => {
                      setEmailId(e.target.value);
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone No.</FormLabel>
                  <Input
                    value={Phone}
                    borderColor="teal.500"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={Password}
                    borderColor="teal.500"
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  bg="teal.500"
                  mr={3}
                  onClick={() => {
                    handleSendUpdatedData();
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
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AccountInfo;
