import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import Payments from "../Pages/Cart/Payments";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MenProductDetails from "../Pages/MenProductDetails";
import MensProduct from "../Pages/MensProduct";
import Signup from "../Pages/Signup";
import WomenProductDetails from "../Pages/WomenProductDetails";
import WomensProduct from "../Pages/WomensProduct";
import Admin from "../Pages/Admin";
import PaymentPage from "../Pages/Payments/PaymentPage";
import Wishlist from "../Pages/wishlist/Wishlist";
import Account from "../Pages/Account";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/men"} element={<MensProduct />} />
        <Route path={"/women"} element={<WomensProduct />} />
        <Route path={"/men/:id"} element={<MenProductDetails />} />
        <Route path={"/women/:id"} element={<WomenProductDetails />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/payments"} element={<Payments />} />
        <Route path={"/paymentpage"} element={<PaymentPage />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}
