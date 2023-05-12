import { AppDispatch } from "../store";
import {
  getAdminAPI,
  getAdminUserPatchAPI,
  getMensAPI,
  getMensPatchAPI,
  getMensToggleAPI,
  getUsersAPI,
  getUsersPatchAPI,
  getWomensAPI,
  getWomensPatchAPI,
  getWomensToggleAPI,
} from "./admin.api";
import * as types from "./admin.type";

// get mens data
export const getAdminMen =
  (getProductsParam?: {
    params: { category: string[]; _limit: number; _page: number; q: string[] };
  }) =>
  async (dispatch: AppDispatch) => {
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
export const getAdminWomen =
  (getProductsParam?: {
    params: { category: string[]; _limit: number; _page: number; q: string[] };
  }) =>
  async (dispatch: AppDispatch) => {
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
export const getAdminUsers =
  (getUserParam?: { params: { _limit: number; _page: number; q: string[] } }) =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getUsersAPI(getUserParam);
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

export const getAdminMenToggle =
  (id: string, val: boolean) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getMensToggleAPI(id, val);
      dispatch({ type: types.TOGGLE_MEN, payload: id });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.ADMIN_ERROR });
    }
  };

// toggle women

export const getAdminWomenToggle =
  (id: string, val: boolean) => async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getWomensToggleAPI(id, val);
      dispatch({ type: types.TOGGLE_WOMENMEN, payload: id });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.ADMIN_ERROR });
    }
  };

// patch men

export const getAdminMenPatch =
  (id: string, image: string, price: number, title: string): any =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getMensPatchAPI(id, image, price, title);
      dispatch({
        type: types.PATCH_ADMIN_MENS_PRODUCT,
        payload: { id, image, price, title },
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.ADMIN_ERROR });
    }
  };

// patch women

export const getAdminWomenPatch =
  (id: string, image: string, price: number, title: string): any =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getWomensPatchAPI(id, image, price, title);
      dispatch({
        type: types.PATCH_ADMIN_WOMEMENS_PRODUCT,
        payload: { id, image, price, title },
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.ADMIN_ERROR });
    }
  };

// patch user

export const getAdminUserPatch =
  (
    id: number,
    Image: string,
    Password: string,
    Name: string,
    Phone: string,
    Email: string
  ): any =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getUsersPatchAPI(
        id,
        Image,
        Password,
        Name,
        Phone,
        Email
      );
      dispatch({
        type: types.PATCH_ADMIN_USERS,
        payload: { id, Image, Password, Name, Phone, Email },
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.ADMIN_ERROR });
    }
  };

// patch admin

export const getAdminPatch =
  (
    Name: string,
    EmailId: string,
    Phone: string,
    Password: string,
    Image: string
  ): any =>
  async (dispatch: AppDispatch) => {
    dispatch({ type: types.ADMIN_LOADING });
    try {
      let data = await getAdminUserPatchAPI(
        Name,
        EmailId,
        Phone,
        Password,
        Image
      );
      dispatch({
        type: types.PATCH_ADMIN_USERS,
        payload: { Name, EmailId, Phone, Password, Image },
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: types.ADMIN_ERROR });
    }
  };
