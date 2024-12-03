/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Redux/store";

const Details: React.FC = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const getPrice = localStorage.getItem("Cart-Price") || 10;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isAuth, fName, lName, email } = useAppSelector(
    (store) => store.loginReducer
  );

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    onOpen();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const handleHome = () => {
    onClose();
  };

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      boxShadow="base"
      rounded="md"
      bg="whiteAlpha.300"
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Delivery Address</Heading>
        <Text>Fill your all details & Shiping Details.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder={fName} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder={lName} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Park Street, Kolkata, 700001, WB" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Kolkata" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="in">India</option>
              <option value="bd">Bangladesh</option>
              <option value="jp">Japan</option>
              <option value="pk">Pakistan</option>
              <option value="uae">United Amir Emirates</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing address.</Checkbox>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
