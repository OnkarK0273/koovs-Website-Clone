import {
  CART_API_CALL_FAIL,
  CART_API_CALL_REQ,
  CART_API_CALL_SUC,
} from "./cart.types";

const initialValue = {
  cart: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialValue, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case CART_API_CALL_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CART_API_CALL_SUC: {
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    }
    case CART_API_CALL_FAIL: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
