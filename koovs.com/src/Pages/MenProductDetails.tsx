import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  postSingleProduct,
  singleProduct,
} from "../Redux/Product/product.action";
import { Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

const MenProductDetails = () => {
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
    size: {
      S: "small",
      M: "medium",
      L: "large",
    },
    quantity: 1,
  };

  const [data, setData] = useState(myData);
  const { id } = useParams();

  const fetchData = async () => {
    let data = await singleProduct(id as string).then((res: any) => {
      return res;
    });
    setData(data);
  };

  const handleFetch = async () => {
    // singleData = data;
    // setSingleData(data);
    postSingleProduct(data);
  };

  const handleSize = (e: any) => {
    // const sizeKey = e.currentTarget.innerText;
    // const selectedSize = data.size[sizeKey as "S" | "M" | "L"];
    postSingleProduct(data.size[e.currentTarget.innerText as "S" | "M" | "L"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          textAlign: "left",
          marginLeft: "30px",
        }}
      >
        <img src={data.img1} alt={data.title} />
        <div style={{ marginLeft: "50px" }}>
          <h1 style={{ fontSize: "30px" }}>{data.title}</h1>
          <h3>Rs. {data.price}</h3>
          <p>Tax included</p>
          <p>Quantity</p>

          <Text onClick={handleSize}>S</Text>
          {/* <Text onClick={handleSize}>M</Text> */}
          {/* <Text onClick={handleSize}>L</Text> */}

          <Button
            style={{
              marginLeft: "50px",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            ADD TO CART
          </Button>
          {/* <Link to={`/cart`}> */}
          <Button
            as={Link}
            to={`/cart`}
            onClick={handleFetch}
            style={{
              border: "1px solid black",
              marginLeft: "50px",
              padding: "5px",
            }}
          >
            BUY IT NOW
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default MenProductDetails;
