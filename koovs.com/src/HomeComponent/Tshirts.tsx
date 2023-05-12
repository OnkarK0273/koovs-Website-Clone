import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TshirtCard from "./TshirtCard";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getTshirtsProducts } from "../Redux/HomeProduct/homeproduct.action";

const Tshirts = () => {
  const dispatch = useAppDispatch();
  const tshirtsProducts = useAppSelector(
    (store) => store.HomeProductReducer.tshirtsData
  );
  console.log("tshirts", tshirtsProducts);

  useEffect(() => {
    if (tshirtsProducts.length === 0) {
      dispatch(getTshirtsProducts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <SimpleGrid columns={{ sm: 2, md: 4 }} gap={"30px"}>
        {tshirtsProducts?.length > 0 &&
          tshirtsProducts?.map((item) => (
            <TshirtCard key={item.id} {...item} />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Tshirts;
