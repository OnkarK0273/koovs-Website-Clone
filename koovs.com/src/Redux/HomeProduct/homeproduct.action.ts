import { Product } from "../../utils/types";
import { AppDispatch } from "../store";
import {
  getHomeMenProductsAPI,
  getHomeWomenProductsAPI,
  getHomeShoesProductsAPI,
  getHomeTshirtsProductsAPI,
} from "./homeproduct.api";
import * as types from "./homeproduct.types";

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
export interface IGetShoesProductSuccess {
  type: typeof types.GET_SHOES_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface IGetTshirtsProductSuccess {
  type: typeof types.GET_TSHIRTS_PRODUCTS_SUCCESS;
  payload: Product[];
}

export type ProductAction =
  | IProductRequest
  | IProductError
  | IGetProductSuccess
  | IGetWomenProductSuccess
  | IGetShoesProductSuccess
  | IGetTshirtsProductSuccess;

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

const getShoesProductSuccess = (data: Product[]): IGetShoesProductSuccess => {
  return { type: types.GET_SHOES_PRODUCTS_SUCCESS, payload: data };
};

const getTshirtsProductSuccess = (
  data: Product[]
): IGetTshirtsProductSuccess => {
  return { type: types.GET_TSHIRTS_PRODUCTS_SUCCESS, payload: data };
};

export const getProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getHomeMenProductsAPI();
    if (data) {
      dispatch(getProductSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};
export const getShoesProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getHomeShoesProductsAPI();
    if (data) {
      dispatch(getShoesProductSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};

export const getTshirtsProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getHomeTshirtsProductsAPI();
    if (data) {
      dispatch(getTshirtsProductSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};
export const getWomenProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch(productRequest());
  try {
    let data = await getHomeWomenProductsAPI();
    if (data) {
      dispatch(getWomenProductSuccess(data));
    }
  } catch (error) {
    dispatch(productError());
  }
};

export { productRequest, productError, getProductSuccess };
