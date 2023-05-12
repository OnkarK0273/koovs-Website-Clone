import React, { useEffect } from "react";
// import {SimpleGrid} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShoesCard from "./ShoesCard";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getShoesProducts } from "../Redux/HomeProduct/homeproduct.action";

const Mens = () => {
  const dispatch = useAppDispatch();
  const shoesProducts = useAppSelector(
    (store) => store.HomeProductReducer.shoesData
  );
  console.log("shoes", shoesProducts);

  useEffect(() => {
    if (shoesProducts.length === 0) {
      dispatch(getShoesProducts());
    }
    // eslint-disable-next-line
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Carousel responsive={responsive}>
        {/* <SimpleGrid columns={{ sm: 2, md: 4 }} gap={"30px"}> */}
        {shoesProducts?.length > 0 &&
          shoesProducts?.map((item) => <ShoesCard key={item.id} {...item} />)}
        {/* </SimpleGrid> */}
      </Carousel>
    </div>
  );
};

export default Mens;
