import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Input,
  Button,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ColorRing } from  'react-loader-spinner'
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
  const navigate = useNavigate()

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
      <Heading
        textAlign={"center"}
        fontFamily={"monospace"}
        fontWeight={"semibold"}
        fontSize={"31.5px"}
      >
        Shopping Cart
      </Heading>
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
     {
        cart?.length && <Center mt={"5%"}>
        <TableContainer>
          <Table variant="simple">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead display={{base:'none',md:"table-header-group"}} >
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
                <Tbody key={cart.id} >
                  <Tr>
                    {/* responsive for base */}
                    <Flex  flexDirection="column" display={{base:'flex',md:"none"}} boxShadow='base'  rounded='md' bg='white' >
                      <Box>
                        <Td>
                        <Flex  w='250px' justify="space-around" columnGap='40px' flexDirection="column" align='left' >
                          <Image w="120px" m='auto' src={cart.img1} alt={cart.category} />
                          <Box >
                            <Text isTruncated  w="80%" pb='10px' >{cart.title}</Text>
                            <Text pb='10px' >SIZE: {cart.size}</Text>
                            <Text>Color: {cart.color}</Text>
                            <br />
                            <Text
                              as={"button"}
                              onClick={() => dispatch(delCartApi(cart.id))}
                              bg='red.300'
                              p='6px'
                              rounded='5px'
                            >
                              Remove
                            </Text>
                          </Box>
                        </Flex>
                        </Td>
                      </Box>
                      <Box display={{base:'block',md:"none"}} >
                      
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
                      </Box>
                    </Flex>
                    {/* responsive for md and ls */}
                      <Td display={{base:'none',md:"block"}} >
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
                              bg='red.300'
                              p='6px'
                              rounded='5px'
                            >
                              Remove
                            </Text>
                          </Box>
                        </Flex>
                      </Td>
                      <Td isNumeric display={{base:'none',md:"table-cell"}} >Rs. {cart.price}</Td>
                        <Td display={{base:'none',md:"table-cell"}}>
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
                        <Td isNumeric display={{base:'none',md:"table-cell"}} >
                          Rs. {cart.price * (quantities[index] || 1)}
                        </Td>

                    

                  </Tr>
                </Tbody>
              ))}
              
          </Table>
        </TableContainer>
      </Center>
     }
      
      {
        cart?.length && <Center mr={"5.9%"}>
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
      }
      {
        cart?.length ===0 && <Center h='50vh'  >

          <Box textAlign={'center'} >
            <Heading  fontFamily={"monospace"} >Your cart is empty.</Heading>
            <Button m='20px' variant={'outline'} colorScheme="blue" onClick={()=>{navigate("/men")}} >Go To the Shop!</Button>
          </Box>


        </Center>
      }


    </Box>
  );
};

export const getTotal = (cart: any[], quantities: number[]) => {
  const cartItems: CartItemType[] = cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cartItems[i].price * (quantities[i] || 1);
  }
  axios.post(`https://kools.onrender.com/total`, {
    total,
  });
  return total;
};

export default Cart;
