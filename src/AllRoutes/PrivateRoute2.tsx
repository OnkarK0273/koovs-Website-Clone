import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";
import { useToast } from "@chakra-ui/toast";

const PrivateRoute2 = ({ children }: any) => {
  const { isAuth } = useAppSelector((store) => store.loginReducer);
  const toast = useToast();

  if (!isAuth) {
    toast({
      title: "Please login First",
      status: "warning",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute2;
