import React, { useState, useEffect } from "react";

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
} from "@chakra-ui/react";
import image from "./2.jpeg";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { getCartApi } from "../../Redux/Cart/cart.action";

// import { shallowEqual } from "react-redux";
// import { getTotal } from "../Cart/Cart";
// import { useAppSelector } from "../../Redux/store";
// import { shallowEqual } from "react-redux";

const CartPayment: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [phone, setPhone] = useState("");
  const cart = useAppSelector((store) => store.CartReducer.cart);
  console.log(cart);

  const dispatch = useAppDispatch();

  // const { cart } = useAppSelector((store) => {
  //   return {
  //     cart: store.CartReducer.cart,
  //     isLoading: store.CartReducer.isLoading,
  //   };
  // }, shallowEqual);

  const getTotal = async () => {
    let res = await axios.get(`http://localhost:8080/total`);
    let data = await res.data;
    setTotal(data.total);
  };

  const getPhone = async () => {
    let res = await axios.get(`http://localhost:8080/UserDetails`);
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
      await axios.delete(`http://localhost:8080/cart/${cart[i].id}`);
    }

    await axios.post(`http://localhost:8080/total`, {
      total: 0,
    });

    dispatch(getCartApi());
    setTotal(0);
    getTotal();
  };

  console.log(total);

  let getPrice = total;

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Card Details</Heading>
        <Text as="div" textAlign="left">
          If You Think White Color is not Good for Your Eyes
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            Change to Dark-Mode & Vice-Versa
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
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
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Input placeholder="Card Number" maxLength={12} />
        </HStack>
        <HStack justifyContent="space-between">
          <Input placeholder="Month/Year" />
          <Input placeholder="CVV" />
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
        onClick={handleCart}
        isLoading={isLoading}
        loadingText={"Clearing Cart..."}
      >
        Clear All-Cart
      </Button>
    </VStack>
  );
};

export default CartPayment;
