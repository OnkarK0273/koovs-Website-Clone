/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { Product } from "../../utils/types";
import { AppDispatch } from "../store";
import { getProductsAPI, getWomenProductsAPI } from "./product.api";
import * as types from "./product.types";

// type interface------------------
export interface IProductRequest {
  type: typeof types.PRODUCT_REQUEST;
}

export interface IProductError {
  type: typeof types.PRODUCT_ERROR;
}

export interface IProductSuccess {
  type: typeof types.SINGLE_PRODUCT_SUCCESS;
}

export interface IGetProductSuccess {
  type: typeof types.GET_PRODUCTS_SUCCESS;
  payload: Product[];
}
export interface IGetWomenProductSuccess {
  type: typeof types.GET_WOMEN_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface IUpdateMensProduct {
  type: typeof types.UPDATE_MEN_PRODUCTS;
  payload: Product[];
}
export interface IUpdateWomenProduct {
  type: typeof types.UPDATE_WOMEN_PRODUCTS;
  payload: Product[];
}

// all type interfaces combined
export type ProductAction =
  | IProductRequest
  | IProductError
  | IGetProductSuccess
  | IGetWomenProductSuccess
  | IProductSuccess
  | IUpdateMensProduct
  | IUpdateWomenProduct;

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

const getSingleProductSuccess = (data: Product): IProductSuccess => {
  return { type: types.SINGLE_PRODUCT_SUCCESS };
};

export const updateMensProduct = (data: Product[]): IUpdateMensProduct => {
  return { type: types.UPDATE_MEN_PRODUCTS, payload: data };
};

export const updateWomenProduct = (data: Product[]): IUpdateWomenProduct => {
  return { type: types.UPDATE_WOMEN_PRODUCTS, payload: data };
};

export const getProducts =
  (getProductsParam?: {
    params: {
      category: string[];
      brand: string[];
      _limit: number;
      _page: number;
    };
  }) =>
  async (dispatch: AppDispatch) => {
    dispatch(productRequest());
    try {
      let data = await getProductsAPI(getProductsParam);
      if (data) {
        dispatch(getProductSuccess(data));
      }
    } catch (error) {
      dispatch(productError());
    }
  };

export const singleProduct = async (id: string) => {
  try {
    let res = await axios.get(`https://kools.onrender.com/mens/${id}`);
    let data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postSingleProduct = async (payload: any) => {
  try {
    await axios.post(`https://kools.onrender.com/cart`, payload);
  } catch (error) {
    console.log(error);
  }
};

export const singleWomenProduct = async (id: string) => {
  try {
    let res = await axios.get(`https://kools.onrender.com/women/${id}`);
    let data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
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
