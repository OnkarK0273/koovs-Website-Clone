import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { delCartApi, getCartApi } from "../../Redux/Cart/cart.action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { CartItemType } from "../../utils/types";
import { AddDiscountCode, EstShippingRates, NoteforSeller } from "./Proceed";
import image from "./1.png";
import axios from "axios";

const Cart: React.FC = () => {
  const { cart } = useAppSelector((store) => {
    return {
      cart: store.CartReducer.cart,
      isLoading: store.CartReducer.isLoading,
    };
  }, shallowEqual);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartApi());
  }, [dispatch]);

  const [quantities, setQuantities] = useState<number[]>([]);

  useEffect(() => {
    // Initialize the quantities state with the current quantity of each product in the cart
    setQuantities(cart.map((item: any) => 1));
  }, [cart]);

  const updateQuantity = (index: number, value: number) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  return (
    <Box mt={"8%"} mb={"3%"}>
      <Text
        textAlign={"center"}
        fontFamily={"monospace"}
        fontWeight={"semibold"}
        fontSize={"31.5px"}
      >
        Shopping Cart
      </Text>
      <Flex
        fontWeight={"medium"}
        justify={"center"}
        gap={4}
        align={"center"}
        mt={4}
      >
        <Link to={"/"}>
          <Text _hover={{ color: "gray" }} as={"p"}>
            Home
          </Text>
        </Link>
        <MdOutlineKeyboardArrowRight />
        <Text as={"p"}>Your Shopping Cart</Text>
      </Flex>
      <Center mt={"5%"}>
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th pr={"100%"}>Product</Th>
                <Th pr={"100%"} isNumeric>
                  Price
                </Th>
                <Th pr={"100%"}>Quantity</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            {cart &&
              cart.map((cart: any, index: number) => (
                <Tbody key={cart.id}>
                  <Tr>
                    <Td>
                      <Flex gap={8}>
                        <Image w="120px" src={cart.img1} alt={cart.category} />
                        <Box textAlign={"left"}>
                          <Text>{cart.title}</Text>
                          <Text>SIZE: {cart.size}</Text>
                          <Text>Color: {cart.color}</Text>
                          <br />
                          <Text
                            as={"button"}
                            onClick={() => dispatch(delCartApi(cart.id))}
                          >
                            Remove
                          </Text>
                        </Box>
                      </Flex>
                    </Td>
                    <Td isNumeric>Rs. {cart.price}</Td>
                    <Td>
                      <Flex
                        placeItems={"center"}
                        textAlign={"center"}
                        border={"1px solid #EEEEEE"}
                        borderRadius={"5px"}
                      >
                        <Button
                          border={"none"}
                          bg={"none"}
                          onClick={() => {
                            const currentQuantity = quantities[index];
                            if (currentQuantity > 1) {
                              updateQuantity(index, currentQuantity - 1);
                            }
                          }}
                          _hover={{}}
                          _active={{}}
                        >
                          -
                        </Button>
                        <Input
                          border={"none"}
                          type="number"
                          value={quantities[index]}
                          onChange={(e) =>
                            updateQuantity(index, parseInt(e.target.value))
                          }
                          min={1}
                          defaultValue={1}
                          w={"60px"}
                          _focus={{ boxShadow: "none" }}
                        />
                        <Button
                          bg={"none"}
                          border={"none"}
                          onClick={() => {
                            const currentQuantity = quantities[index];
                            updateQuantity(index, currentQuantity + 1);
                          }}
                          _hover={{}}
                          _active={{}}
                        >
                          +
                        </Button>
                      </Flex>
                    </Td>
                    <Td isNumeric>
                      Rs. {cart.price * (quantities[index] || 1)}
                    </Td>
                  </Tr>
                </Tbody>
              ))}
          </Table>
        </TableContainer>
      </Center>
      <Center mr={"5.9%"}>
        <Flex mt={8} w={"76.5%"} flexDirection={"column"}>
          <Flex gap={"30px"} justify={"flex-end"}>
            <NoteforSeller />
            <Box borderRight="1px solid gray" height="60px" />
            <EstShippingRates />
            <Box borderRight="1px solid gray" height="60px" />
            <AddDiscountCode />
          </Flex>
          <Flex mt={4} justify={"flex-end"}>
            <Divider w={"255px"} />
          </Flex>
          <Flex mt={4} flexDirection={"column"} align={"flex-end"}>
            <Flex w={"250px"} justify={"space-between"}>
              <Text>SubTotal</Text>
              <Text>Rs. {getTotal(cart, quantities)}</Text>
            </Flex>
            <Text mt={2} fontSize={"12.4px"}>
              Tax included. Shipping calculated at checkout.
            </Text>

            <Button
              as={Link}
              to="/paymentpage"
              mt={4}
              colorScheme={"none"}
              bg={"black"}
              p={"2%"}
              w={"250px"}
            >
              <Flex justify={"space-around"} gap={"10px"}>
                <Flex direction={"column"} textAlign={"left"}>
                  <Text>Place Order</Text>
                  <Text fontSize={"10px"}>5% Extra off on UPI</Text>
                </Flex>
                <Image w={"50%"} src={image} alt={"image"} />
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export const getTotal = (cart: any[], quantities: number[]) => {
  const cartItems: CartItemType[] = cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cartItems[i].price * (quantities[i] || 1);
  }
  axios.post(`http://localhost:8080/total`, {
    total,
  });
  return total;
};

export default Cart;

// {
//   "id": 1,
//   "active": true,
//   "img1": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1_49623089-e9ae-432e-9755-f01c34f533a7.jpg?v=1674226966&width=360",
//   "img2": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/3_eb21d00b-3e35-4628-b077-b3972839be24.jpg?v=1674226968&width=360",
//   "brand": "Bravesoul",
//   "title": "WHITE CROSSOVER STRAP SANDALS",
//   "price": 1299,
//   "description": "MEN'S SANDALS BY BRAVE SOUL LEATHER�LOOK STRAPS CROSS OVER DETAIL MOULDED FOOT BED TEXTURED GRIP...",
//   "category": "shoes",
//   "is_best_seller": false,
//   "Order_status": "Pending",
//   "isOrdered": false,
//   "size": "M",
//   "color": "Red"
// },
// {
//   "id": 4,
//   "active": true,
//   "img1": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1_dc794d07-7659-4778-ae75-682ff791d2aa.jpg?v=1674226967&width=360",
//   "img2": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/3_0a48068d-fe29-4a19-bc26-1c5b25a98eb1.jpg?v=1674226967&width=360",
//   "brand": "Bravesoul",
//   "title": "BLACK BUCKLE DETAIL DOUBLE STRAP SLIP ON SANDALS",
//   "price": 999,
//   "description": "BRAVE SOUL MEN'S FOOTWEAR SLIDER�STYLE DOUBLE STRAP DESIGN BUCKLE DETAIL MOULDED FOOT BED TEXTURED GRIP...",
//   "category": "shoes",
//   "is_best_seller": false,
//   "Order_status": "Pending",
//   "isOrdered": false,
//   "size": "S",
//   "color": "Green"
// },
// {
//   "id": 5,
//   "active": true,
//   "img1": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1_a6336243-74ba-4c77-91c4-fd30c4e1fded.jpg?v=1674226968&width=360",
//   "img2": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/3_0c0b50a5-a047-4f2c-94ba-3557a1aed0af.jpg?v=1674226965&width=360",
//   "brand": "Bravesoul",
//   "title": "STONE BUCKLE STRAP DETAIL FAUX LEATHER CORK SANDALS",
//   "price": 1299,
//   "description": "BRAVE SOUL MEN'S FOOTWEAR SLIDERSTYLE LEATHER LOOK CORK BASE DOUBLE BUCKLE STRAPS MOULDED FOOT BED...",
//   "category": "shoes",
//   "is_best_seller": false,
//   "Order_status": "Pending",
//   "isOrdered": false,
//   "size": "XL",
//   "color": "Blue"
// },
// {
//   "id": 6,
//   "active": true,
//   "img1": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1002034_p_pdp.jpg?v=1668141737&width=360",
//   "img2": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1002034_pld_pdp.jpg?v=1668141737&width=360",
//   "brand": "KEEN",
//   "title": "YOGUI ARTS CLOG",
//   "price": 5990,
//   "description": "Get a seamless experience with koovs.",
//   "category": "shoes",
//   "is_best_seller": false,
//   "Order_status": "Pending",
//   "isOrdered": false,
//   "size": "L",
//   "color": "White"
// },
// {
//   "id": 8,
//   "active": true,
//   "img1": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1001966_p_pdp.jpg?v=1668141731&width=360",
//   "img2": "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/1001966_pld_pdp.jpg?v=1668141731&width=360",
//   "brand": "KEEN",
//   "title": "YOGUI ARTS CLOG",
//   "price": 5990,
//   "description": "Get a seamless experience with koovs.",
//   "category": "shoes",
//   "is_best_seller": false,
//   "Order_status": "Pending",
//   "isOrdered": false,
//   "size": "M",
//   "color": "Red"
// }
