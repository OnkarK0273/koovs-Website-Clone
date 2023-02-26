import { Product } from "../../utils/types";
import { ProductAction } from "./homeproduct.action";
import * as types from "./homeproduct.types";

export interface IProductState {
  loading: boolean;
  error: boolean;
  mensData: Product[];
  womenData: Product[];
  shoesData: Product[];
  tshirtsData: Product[];
}

const initState = {
  loading: false,
  error: false,
  mensData: [],
  womenData: [],
  shoesData: [],
  tshirtsData: [],
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
    case types.GET_SHOES_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, shoesData: action.payload };
    case types.GET_TSHIRTS_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, tshirtsData: action.payload };
    default:
      return oldState;
  }
};

export { reducer };
