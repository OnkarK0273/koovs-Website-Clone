import { AppDispatch } from "../store";
import {
  getAdminAPI,
  getMensAPI,
  getMensToggleAPI,
  getUsersAPI,
  getWomensAPI,
  getWomensToggleAPI,
} from "./admin.api";
import * as types from "./admin.type";

// get mens data
export const getAdminMen = (getProductsParam?: { params: { category: string[],_limit:number ,_page:number,q:string[]} }) => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getMensAPI(getProductsParam);
    dispatch({ type: types.GET_ADMIN_MENS_PRODUCT, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};

// get womens data
export const getAdminWomen = (getProductsParam?: { params: { category: string[] ,_limit:number,_page:number,q:string[]} }) => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getWomensAPI(getProductsParam);
    dispatch({ type: types.GET_ADMIN_WOMEMENS_PRODUCT, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};

// get users data
export const getAdminUsers = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getUsersAPI();
    dispatch({ type: types.GET_ADMIN_USERS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};

// get admin data
export const getAdminAdmin = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getAdminAPI();
    dispatch({ type: types.GET_ADMIN_ADMIN, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};



// toogle men

export const getAdminMenToggle = (id:string,val:boolean) => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getMensToggleAPI(id,val);
    dispatch({ type: types.TOGGLE_MEN, payload: id });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};

// toggle women

export const getAdminWomenToggle = (id:string,val:boolean) => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getWomensToggleAPI(id,val);
    dispatch({ type: types.TOGGLE_WOMENMEN, payload: id });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};
