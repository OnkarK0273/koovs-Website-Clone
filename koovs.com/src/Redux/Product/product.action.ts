import { Product } from "../../utils/types";
import { AppDispatch } from "../store";
import { getProductsAPI, getWomenProductsAPI } from "./product.api";
import * as types from "./product.types";

export interface IProductRequest {
  type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
  type: typeof types.PRODUCT_ERROR;
}

export interface IGetProductSuccess {
  type: typeof types.GET_PRODUCTS_SUCCESS;
  payload: Product[];
}
export interface IGetWomenProductSuccess {
  type: typeof types.GET_WOMEN_PRODUCTS_SUCCESS;
  payload: Product[];
}

export type ProductAction =
  | IProductRequest
  | IProductError
  | IGetProductSuccess
  | IGetWomenProductSuccess;

const productRequest = (): IProductRequest => {
  return { type: types.PRODUCT_REQUEST };
};

const productError = (): IProductError => {
  return { type: types.PRODUCT_ERROR };
};

const getProductSuccess = (data: Product[]): IGetProductSuccess => {
  return { type: types.GET_PRODUCTS_SUCCESS, payload: data };
};
const getWomenProductSuccess = (data: Product[]): IGetWomenProductSuccess => {
  return { type: types.GET_WOMEN_PRODUCTS_SUCCESS, payload: data };
};

export const getProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getProductsAPI();
    if (data) {
      dispatch(getProductSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};
export const getWomenProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getWomenProductsAPI();
    if (data) {
      dispatch(getWomenProductSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};

export { productRequest, productError, getProductSuccess };
