import React, { useEffect, useState } from "react";
// import { MouseEventHandler } from "react";
import { useParams } from "react-router-dom";
import {
  postSingleProduct,
  singleProduct,
  singleWomenProduct,
} from "../Redux/Product/product.action";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

const WomenProductDetails = () => {
  const myData = {
    id: "",
    active: false,
    img1: "",
    img2: "",
    brand: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    is_best_seller: false,
    Order_status: "",
    isOrdered: false,
    size: "",
    quantity: 1,
  };

  const [data, setData] = useState(myData);
  const { id } = useParams();

  const handleSize = (e: any) => {
    const selectedSize = e.currentTarget.innerText;
    setData((prevState) => ({
      ...prevState,
      size: selectedSize,
    }));
  };

  const fetchData = async () => {
    let data = await singleWomenProduct(id as string).then((res: any) => {
      return res;
    });
    setData(data);
  };

  const handleFetch = async () => {
    // singleData = data;
    // setSingleData(data);
    postSingleProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          padding: "10px",
          textAlign: "left",
          marginLeft: "30px",
        }}
      >
        <Image src={data.img1} alt={data.title} />
        <Box style={{ marginLeft: "50px" }}>
          <h1 style={{ fontSize: "30px" }}>{data.title}</h1>
          <h3>Rs. {data.price}</h3>
          <p>Tax included</p>

          <Flex justify={"space-evenly"} direction={"row"} mb={4}>
            <Text
              border={"1px solid black"}
              borderRadius={"7px"}
              onClick={handleSize}
              height={"25px"}
              width={"25px"}
              padding={4}
              textAlign={"center"}
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"pointer"}
              _hover={{ bg: "blue", color: "white", border: "none" }}
              _active={{ bg: "red", color: "white", border: "none" }}
              title={"Small"}
            >
              S
            </Text>
            <Text
              border={"1px solid black"}
              borderRadius={"7px"}
              onClick={handleSize}
              height={"25px"}
              width={"25px"}
              padding={4}
              textAlign={"center"}
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"pointer"}
              _hover={{ bg: "green", color: "white", border: "none" }}
              _active={{ bg: "blue", color: "white", border: "none" }}
              title={"Medium"}
            >
              M
            </Text>
            <Text
              border={"1px solid black"}
              borderRadius={"7px"}
              onClick={handleSize}
              height={"25px"}
              width={"25px"}
              padding={4}
              textAlign={"center"}
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"pointer"}
              _hover={{ bg: "red", color: "white", border: "none" }}
              _active={{ bg: "blue", color: "white", border: "none" }}
              title={"Large"}
            >
              L
            </Text>
          </Flex>

          <Flex justify={"space-evenly"} direction={"row"} mb={4}>
            <Text
              border={"none"}
              borderRadius={"full"}
              onClick={handleSize}
              height={"25px"}
              width={"25px"}
              padding={4}
              textAlign={"center"}
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"pointer"}
              bg={"blue"}
              title={"Blue"}
            ></Text>
            <Text
              border={"none"}
              borderRadius={"full"}
              onClick={handleSize}
              height={"25px"}
              width={"25px"}
              padding={4}
              textAlign={"center"}
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"pointer"}
              bg={"green"}
              title={"Green"}
            ></Text>
            <Text
              border={"none"}
              borderRadius={"full"}
              onClick={handleSize}
              height={"25px"}
              width={"25px"}
              padding={4}
              textAlign={"center"}
              display={"inline-flex"}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={"pointer"}
              bg={"red"}
              title={"Red"}
            ></Text>
          </Flex>

          <Flex gap={4}>
            <Button colorScheme={"blue"} border={"none"}>
              ADD TO CART
            </Button>

            <Button
              as={Link}
              to={`/cart`}
              onClick={handleFetch}
              colorScheme={"blue"}
              border={"none"}
            >
              BUY IT NOW
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default WomenProductDetails;
