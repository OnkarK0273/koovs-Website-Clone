import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import MensCard from "./MensCard";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getProducts } from "../Redux/HomeProduct/homeproduct.action";

const Mens = () => {
  const dispatch = useAppDispatch();
  const menProducts = useAppSelector(
    (store) => store.HomeProductReducer.mensData
  );
  console.log("men", menProducts);

  useEffect(() => {
    if (menProducts.length === 0) {
      dispatch(getProducts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <SimpleGrid columns={{ sm: 2, md: 4 }} gap={"30px"}>
        {menProducts?.length > 0 &&
          menProducts?.map((item) => <MensCard key={item.id} {...item} />)}
      </SimpleGrid>
    </div>
  );
};

export default Mens;
