import { Admin, Product, Userdetails } from "../../utils/types";
import * as types from "./admin.type";

interface IinitState {
  loading: boolean;
  error: boolean;
  mens: Product[];
  womens: Product[];
  users: Userdetails[];
  admin: Admin[];
}

const initState = {
  loading: false,
  error: false,
  mens: [],
  womens: [],
  users: [],
  admin: [],
};

export const adminReducer = (
  state: IinitState = initState,
  { type, payload }: any
) => {
  switch (type) {
    case types.ADMIN_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case types.ADMIN_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.GET_ADMIN_MENS_PRODUCT: {
      return { ...state, loading: false, mens: payload };
    }

    case types.GET_ADMIN_WOMEMENS_PRODUCT: {
      return { ...state, loading: false, womens: payload };
    }

    case types.GET_ADMIN_USERS: {
      return { ...state, loading: false, users: payload };
    }

    case types.GET_ADMIN_ADMIN: {
      return { ...state, loading: false, admin: payload };
    }

    default:
      return state;
  }
};
