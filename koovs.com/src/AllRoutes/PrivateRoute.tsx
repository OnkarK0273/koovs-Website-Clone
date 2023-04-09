import React from "react";
import { Navigate } from "react-router-dom";

let isLoggedin = (sessionStorage.getItem("KoolAdmin")) || null;
console.log(isLoggedin, "login")
const hello = () => {
  if(isLoggedin){
    <Navigate to={"/admin"} replace={true}/>
  }
};

export default hello;
