import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleProduct } from "../Redux/Product/product.action";
import { Link } from "react-router-dom";

const MenProductDetails = () => {
  const myData = {
    title: "",
    img1: "",
    img2: "",
    isOrdered: false,
    size: "",
    price: "",
    quantity: 1,
  };

  const [data, setData] = useState(myData);
  const { id } = useParams();

  const fetchData = async () => {
    let data = await singleProduct(id as string).then((res: any) => {
      return res;
    });
    setData(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

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
          <button
            style={{
              marginLeft: "20px",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            -
          </button>
          <button
            style={{
              marginLeft: "20px",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            1
          </button>
          <button
            style={{
              marginLeft: "20px",
              border: "1px solid black",
              padding: "5px",
            }}
          >
            +
          </button>
          <Link to={`/cart`}>
            <button
              style={{
                marginLeft: "50px",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              ADD TO CART
            </button>
          </Link>
          <button
            style={{
              border: "1px solid black",
              marginLeft: "50px",
              padding: "5px",
            }}
          >
            BUY IT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenProductDetails;
