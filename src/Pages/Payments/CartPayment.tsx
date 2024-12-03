/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

import {
  Heading,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
  Input,
  Image,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import image from "../../assets/Koolz-logo.png";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { getCartApi } from "../../Redux/Cart/cart.action";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { Link, useNavigate } from "react-router-dom";
// import { shallowEqual } from "react-redux";
// import { getTotal } from "../Cart/Cart";
// import { useAppSelector } from "../../Redux/store";
// import { shallowEqual } from "react-redux";

const CartPayment = () => {
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [cardno, setCard] = useState("");
  const [date, setMonth] = useState("");
  const [cvv, setCvv] = useState("");
  const val = cardno.length > 15 && date.length > 4 && cvv.length > 2;

  const [phone, setPhone] = useState("");
  const cart = useAppSelector((store) => store.CartReducer.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  // console.log(cart);

  const dispatch = useAppDispatch();

  // const { cart } = useAppSelector((store) => {
  //   return {
  //     cart: store.CartReducer.cart,
  //     isLoading: store.CartReducer.isLoading,
  //   };
  // }, shallowEqual);

  const getTotal = async () => {
    let res = await axios.get(`https://kools.onrender.com/total`);
    let data = await res.data;
    setTotal(data.total);
  };

  const getPhone = async () => {
    let res = await axios.get(`https://kools.onrender.com/UserDetails`);
    let data = await res.data;
    setPhone(data[0].Phone);
  };

  useEffect(() => {
    // getTotal();
    getPhone();
    dispatch(getCartApi());
    getTotal();
    // eslint-disable-next-line
  }, []);

  let getNo = phone;

  const handleCart = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    for (let i = 0; i < cart.length; i++) {
      await axios.delete(`https://kools.onrender.com/cart/${cart[i].id}`);
    }

    await axios.post(`https://kools.onrender.com/total`, {
      total: 0,
    });

    dispatch(getCartApi());
    setTotal(0);
    getTotal();
  };

  // console.log(total);
  const handleHome = () => {
    handleCart();
    onClose();
    navigate("/");
  };

  const handleShop = () => {
    handleCart();
    onClose();
    navigate("/men");
  };

  let getPrice = total;

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      boxShadow="base"
      rounded="md"
      bg="whiteAlpha.300"
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Card Details</Heading>
        <Text as="div" textAlign="left">
          Fill All the Card Details *
        </Text>
      </VStack>
      {/* <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={2} w={40}>
          <Image borderRadius={"2px"} src={image} alt="logo" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Fill All the Card Details</Heading>
            <Text color={secondaryTextColor}>{getNo}</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            Master, Visa & Rupay
          </Heading>
        </Stack>
      </HStack> */}
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Input
            type="text"
            placeholder="Card Number"
            maxLength={16}
            onChange={(e) => {
              setCard(e.target.value);
            }}
          />
        </HStack>
        <HStack justifyContent="space-between">
          <Input
            placeholder="Month/Year"
            type="text"
            maxLength={5}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
          <Input
            placeholder="CVV"
            type="text"
            maxLength={3}
            onChange={(e) => {
              setCvv(e.target.value);
            }}
          />
        </HStack>
        {/* <Divider /> */}
        <HStack justifyContent="space-between">
          <Text>
            *Including GST of ₹{Math.floor(Number(getPrice) * (18 / 100))} &
            Delivery Fee of ₹60
          </Text>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">
          ₹{Math.floor(Number(getPrice) + 60 + Number(getPrice) * (18 / 100))}
        </Heading>
      </HStack>
      <Button
        variant="outline"
        size="lg"
        w="full"
        colorScheme="blue"
        onClick={onOpen}
        isLoading={isLoading}
        loadingText={"Clearing Cart..."}
        isDisabled={!val}
      >
        {val ? "Place Order" : "Please Fill Card Details"}
      </Button>
      <>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Order Placed</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Your order has been placed successfully. Do you want to continue
              shopping or go to home page?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={handleShop}>Continue Shopping</Button>

              <Button colorScheme="blue" ml={3} onClick={handleHome}>
                Home
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    </VStack>
  );
};

export default CartPayment;
