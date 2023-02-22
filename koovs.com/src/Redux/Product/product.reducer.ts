import { Product } from "../../utils/types";
import { ProductAction } from "./product.action";
import * as types from "./product.types";

export interface IProductState {
  loading: boolean;
  error: boolean;
  productsData: Product[];
}

const initState = {
  loading: false,
  error: false,
  productsData: [],
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
      return { ...oldState, loading: false, productsData: action.payload };
    default:
      return oldState;
  }
};

export { reducer };
