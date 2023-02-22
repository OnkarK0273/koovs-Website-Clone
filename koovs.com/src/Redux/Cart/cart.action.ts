import axios from "axios";
import { Product } from "../../utils/types";
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

export const getCartApi = async (dispatch: any) => {
  dispatch(getCartApiReq());
  try {
    const response = await axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`
    );
    dispatch(getCartApiSuc(response.data));
  } catch (error) {
    dispatch(getCartApiFail());
  }
};

// export const delCartApi = async (id: number) => {
//   try {
//     await axios.delete(
//       `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const delCartApi = async (id: number, dispatch: any) => {
  try {
    await axios.delete(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`
    );
    dispatch(getCartApi);
  } catch (error) {
    console.log(error);
  }
};
