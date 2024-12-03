import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";

const PrivateRoute = ({ children }: any) => {
  const isAdmin = useAppSelector((store) => store.adminReducer.isAdmin);
  console.log("isAdmin", isAdmin);
  if (!isAdmin) {
    return <Navigate to={"/adminlogin"} />;
  }

  return children;
};

export default PrivateRoute;
