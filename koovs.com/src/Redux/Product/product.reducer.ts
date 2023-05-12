import { Product } from "../../utils/types";
import { ProductAction } from "./product.action";
import * as types from "./product.types";

export interface IProductState {
  loading: boolean;
  error: boolean;
  mensData: Product[];
  womenData: Product[];
}

const initState = {
  loading: false,
  error: false,
  mensData: [],
  womenData: [],
};

const reducer = (
  oldState: IProductState = initState,
  action: ProductAction
): IProductState => {
  const { type } = action;
  switch (type) {
    case types.PRODUCT_REQUEST:
      return { ...oldState, loading: true };
    case types.PRODUCT_ERROR:
      return { ...oldState, loading: false, error: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, mensData: action.payload };
    case types.GET_WOMEN_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, womenData: action.payload };
    case types.UPDATE_MEN_PRODUCTS:
      return { ...oldState, mensData: action.payload, loading: false };
    case types.UPDATE_WOMEN_PRODUCTS:
      return { ...oldState, womenData: action.payload, loading: false };
    default:
      return oldState;
  }
};

export { reducer };
