/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Center } from "@chakra-ui/react";
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
    <Box pt={{ base: "80px", md: "20px" }} minH={"100vh"}>
      <Piechart mens={mens} womens={womens} />
    </Box>
  );
}
