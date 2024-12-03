import { Box,Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getAdminMen, getAdminWomen } from "../../Redux/admin/admin.action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import Piechart from "../Compo/Piechart";

export default function Dashbord() {
  const mens = useAppSelector((store) => store.adminReducer.mens);
  const womens = useAppSelector((store) => store.adminReducer.womens);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAdminMen());
    dispatch(getAdminWomen());
  }, []);
  return (
<<<<<<< HEAD
    <Box pt={{ base: "80px", md: "20px" }} minH={"100vh"}>
      <Piechart mens={mens} womens={womens} />
=======

    <Box  pt={{ base: "80px", md: "80px" }} minH={"100vh"} >
       
          <Piechart  mens={mens} womens={womens}/>
        
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93
    </Box>
  );
}
