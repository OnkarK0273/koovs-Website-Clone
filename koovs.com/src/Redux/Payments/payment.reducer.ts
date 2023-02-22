import {
  USER_API_CALL_FAIL,
  USER_API_CALL_REQ,
  USER_API_CALL_SUC,
} from "./payment.types";

const initialValue = {
  UserDetails: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialValue, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case USER_API_CALL_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USER_API_CALL_SUC: {
      return {
        ...state,
        isLoading: false,
        UserDetails: payload,
      };
    }
    case USER_API_CALL_FAIL: {
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
