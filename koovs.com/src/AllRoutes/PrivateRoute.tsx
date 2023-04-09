import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Redux/store";

const PrivateRoute = ({ children }: any) => {
  
  return children;
};

export default PrivateRoute;
