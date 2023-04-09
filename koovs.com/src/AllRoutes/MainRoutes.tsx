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
import PaymentPage from "../Pages/Payments/PaymentPage";
import Wishlist from "../Pages/wishlist/Wishlist";
import Account from "../Pages/Account";
import AdminLogin from "../Admin/MainPage/AdminLogin";
import Admin from "../Pages/Admin";
import PrivateRoute from "./PrivateRoute";
import PrivateRoute2 from "./PrivateRoute2";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/men"} element={<PrivateRoute2><MensProduct /></PrivateRoute2>  } />
        <Route path={"/women"} element={<PrivateRoute2><WomensProduct /></PrivateRoute2>} />
        <Route path={"/men/:id"} element={<MenProductDetails />} />
        <Route path={"/women/:id"} element={<WomenProductDetails />} />
        <Route path={"/adminlogin"} element={<AdminLogin />} />
        <Route path={"/cart"} element={<PrivateRoute2><Cart /></PrivateRoute2> } />
        <Route path={"/payments"} element={<Payments />} />
        <Route path={"/paymentpage"} element={<PaymentPage />} />
        <Route path={"/wishlist"} element={<PrivateRoute2><Wishlist /></PrivateRoute2>} />
        <Route path={"/admin"} element={ <PrivateRoute><Admin /></PrivateRoute> } />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}
