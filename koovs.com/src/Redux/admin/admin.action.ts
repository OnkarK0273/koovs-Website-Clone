import { AppDispatch } from "../store";
import {
  getAdminAPI,
  getMensAPI,
  getUsersAPI,
  getWomensAPI,
} from "./admin.api";
import * as types from "./admin.type";

// get mens data
export const getAdminMen = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getMensAPI();
    dispatch({ type: types.GET_ADMIN_MENS_PRODUCT, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADMIN_ERROR });
  }
};

// get womens data
export const getAdminWomen = () => async (dispatch: AppDispatch) => {
  dispatch({ type: types.ADMIN_LOADING });
  try {
    let data = await getWomensAPI();
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
