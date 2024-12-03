import axios, { AxiosResponse } from "axios";
import { Admin, Product, Userdetails } from "../../utils/types";

// get requests -------------------------
export const getMensAPI = async (getProductsParam?: {
  params: { category: string[]; _limit: number; _page: number; q: string[] };
}) => {
  let res: AxiosResponse<Product[]> = await axios.get(
    `https://kools.onrender.com/mens`,
    getProductsParam
  );
  return res.data;
};

export const getWomensAPI = async (getProductsParam?: {
  params: { category: string[]; _limit: number; _page: number; q: string[] };
}) => {
  let res: AxiosResponse<Product[]> = await axios.get(
    `https://kools.onrender.com/womens`,
    getProductsParam
  );
  return res.data;
};

export const getUsersAPI = async (getUserParam?: {
  params: { _limit: number; _page: number; q: string[] };
}) => {
  let res: AxiosResponse<Userdetails[]> = await axios.get(
    `https://kools.onrender.com/UserDetails`,
    getUserParam
  );
  return res.data;
};

export const getAdminAPI = async () => {
  let res: AxiosResponse<Admin> = await axios.get(
    `https://kools.onrender.com/AdminDetails`
  );
  return res.data;
};

// patch requests ------------------------------------

export const getMensToggleAPI = async (id: string, val: boolean) => {
  let res: AxiosResponse<Product> = await axios.patch(
    `https://kools.onrender.com/mens/${id}`,
    { active: !val }
  );
  return res.data;
};

export const getWomensToggleAPI = async (id: string, val: boolean) => {
  let res: AxiosResponse<Product> = await axios.patch(
    `https://kools.onrender.com/womens/${id}`,
    { active: !val }
  );
  return res.data;
};

export const getMensPatchAPI = async (
  id: string,
  image: string,
  price: number,
  title: string
) => {
  let res: AxiosResponse<Product> = await axios.patch(
    `https://kools.onrender.com/mens/${id}`,
    { img1: image, price: price, title: title }
  );
  return res.data;
};

export const getWomensPatchAPI = async (
  id: string,
  image: string,
  price: number,
  title: string
) => {
  let res: AxiosResponse<Product> = await axios.patch(
    `https://kools.onrender.com/womens/${id}`,
    { img1: image, price: price, title: title }
  );
  return res.data;
};

export const getUsersPatchAPI = async (
  id: number,
  Image: string,
  Password: string,
  Name: string,
  Phone: string,
  Email: string
) => {
  let res: AxiosResponse<Userdetails> = await axios.patch(
    `https://kools.onrender.com/UserDetails/${id}`,
    { Name: Name, Phone: Phone, Email: Email, Image: Image, Password: Password }
  );
  return res.data;
};

export const getAdminUserPatchAPI = async (
  Name: string,
  EmailId: string,
  Phone: string,
  Password: string,
  Image: string
) => {
  let res: AxiosResponse<Userdetails> = await axios.patch(
<<<<<<< HEAD
    `http://localhost:8080/AdminDetails`,
    { Name, EmailId, Phone, Password, Image }
=======
    `https://kools.onrender.com/AdminDetails`,
    { Name,EmailId,Phone,Password,Image}
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93
  );
  return res.data;
};
