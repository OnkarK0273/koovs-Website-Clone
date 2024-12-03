/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAdminMen, getAdminWomen } from "../../Redux/admin/admin.action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import ListingItems from "../Compo/ListingItems";
import ListingItems1 from "../Compo/ListingItems1";
import ListingSerch from "../Compo/ListingSerch";

export default function Listing() {
  const mens = useAppSelector((store) => store.adminReducer.mens);
  const womens = useAppSelector((store) => store.adminReducer.womens);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // console.log("mens",mens)
  // console.log("womens",womens)

  // console.log(location,searchParams.getAll('product')[0],searchParams.getAll('catagory'))
  useEffect(() => {
    if (searchParams.getAll("product")[0] === "Mens") {
      const getMensParam = {
        params: {
          category: searchParams.getAll("catagory"),
          _limit: 10,
          _page: page,

          q: searchParams?.getAll("serch"),
        },
      };

      dispatch(getAdminMen(getMensParam));
    }

    if (searchParams.getAll("product")[0] === "Womens") {
      const getMensParam = {
        params: {
          category: searchParams.getAll("catagory"),
          _limit: 10,
          _page: page,
          q: searchParams?.getAll("serch"),
        },
      };

      dispatch(getAdminWomen(getMensParam));
    }
  }, [location.search, page]);

  useEffect(() => {
    setPage(1);
  }, [location.search]);

  return (
    <Box pt={{ base: "80px", md: "20px" }}>
      <ListingSerch />
      {searchParams.getAll("product")[0] === "Mens" && (
        <ListingItems data={mens} page={page} setPage={setPage} />
      )}
      {searchParams.getAll("product")[0] === "Womens" && (
        <ListingItems1 data={womens} page={page} setPage={setPage} />
      )}
    </Box>
  );
}
