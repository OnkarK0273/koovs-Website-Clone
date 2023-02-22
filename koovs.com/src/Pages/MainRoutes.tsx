import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Payments from "./Cart/Payments";
import AdminPage from "../Admin/AdminPage";
import Home from "./Home";
import Login from "./Login";
import MenProductDetails from "./MenProductDetails";
import MensProduct from "./MensProduct";
import Signup from "./Signup";
import WomenProductDetails from "./WomenProductDetails";
import WomensProduct from "./WomensProduct";
export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/men"} element={<MensProduct />} />
        <Route path={"/women"} element={<WomensProduct />} />
        <Route path={"/men/:id"} element={<MenProductDetails />} />
        <Route path={"/women/:id"} element={<WomenProductDetails />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/payments"} element={<Payments />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}
