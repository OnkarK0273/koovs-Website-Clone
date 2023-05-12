import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import MensCard from "./MensCard";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getProducts } from "../Redux/HomeProduct/homeproduct.action";

const Mens = () => {
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const menProducts = useAppSelector(
    (store) => store.HomeProductReducer.mensData
  );
  console.log("men", menProducts);
=======
     const dispatch = useAppDispatch();
  const menProducts = useAppSelector((store) => store.HomeProductReducer.mensData);
  // console.log("men",menProducts);
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93

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
