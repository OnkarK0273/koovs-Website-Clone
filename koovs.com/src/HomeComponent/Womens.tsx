import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import WomensCard from "./WomensCard";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getWomenProducts } from "../Redux/HomeProduct/homeproduct.action";

const Womens = () => {
  const dispatch = useAppDispatch();
  const womenProducts = useAppSelector(
    (store) => store.HomeProductReducer.womenData
  );
<<<<<<< HEAD
  console.log("women", womenProducts);
=======
  // console.log("women",womenProducts)
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93

  useEffect(() => {
    if (womenProducts.length === 0) {
      dispatch(getWomenProducts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 4 }}
      gap={"30px"}
      width={"95%"}
      margin={"auto"}
    >
      {womenProducts?.length > 0 &&
        womenProducts?.map((item) => <WomensCard key={item.id} {...item} />)}
    </SimpleGrid>
  );
};

export default Womens;
