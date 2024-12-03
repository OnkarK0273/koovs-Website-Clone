import axios from "axios";
import { Product } from "../../utils/types";
import { AppDispatch } from "../store";
import {
  CART_API_CALL_FAIL,
  CART_API_CALL_REQ,
  CART_API_CALL_SUC,
} from "./cart.types";

const getCartApiReq = () => {
  return {
    type: CART_API_CALL_REQ,
  };
};

const getCartApiSuc = (payload: Product) => {
  return {
    type: CART_API_CALL_SUC,
    payload,
  };
};

const getCartApiFail = () => {
  return {
    type: CART_API_CALL_FAIL,
  };
};

export const getCartApi = () => async (dispatch: AppDispatch) => {
  dispatch(getCartApiReq());
  try {
    const response = await axios.get(
      `https://kools.onrender.com/cart`
    );
    dispatch(getCartApiSuc(response.data));
  } catch (error) {
    dispatch(getCartApiFail());
  }
};

// export const delCartApi = async (id: number) => {
//   try {
//     await axios.delete(
//       `https://kools.onrender.com/cart/${id}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const delCartApi = (id: number) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(
      `https://kools.onrender.com/cart/${id}`
    );
    dispatch(getCartApi());
  } catch (error) {
    console.log(error);
  }
};
