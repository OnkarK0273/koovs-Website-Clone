import axios, { AxiosResponse } from "axios";
import { Admin, Product, Userdetails } from "../../utils/types";

export const getMensAPI = async (getProductsParam?: {
  params: { category: string[]; _limit: number; _page: number; q: string[] };
}) => {
  let res: AxiosResponse<Product[]> = await axios.get(
    `http://localhost:8080/mens`,
    getProductsParam
  );
  return res.data;
};

export const getWomensAPI = async (getProductsParam?: {
  params: { category: string[]; _limit: number; _page: number; q: string[] };
}) => {
  let res: AxiosResponse<Product[]> = await axios.get(
    `http://localhost:8080/womens`,
    getProductsParam
  );
  return res.data;
};

export const getUsersAPI = async (getUserParam?: {
  params: { _limit: number; _page: number; q: string[] };
}) => {
  let res: AxiosResponse<Userdetails[]> = await axios.get(
    `http://localhost:8080/UserDetails`,
    getUserParam
  );
  return res.data;
};

export const getAdminAPI = async () => {
  let res: AxiosResponse<Admin> = await axios.get(
    `http://localhost:8080/AdminDetails`
  );
  return res.data;
};

export const getMensToggleAPI = async (id: string, val: boolean) => {
  let res: AxiosResponse<Product> = await axios.patch(
    `http://localhost:8080/mens/${id}`,
    { active: !val }
  );
  return res.data;
};

export const getWomensToggleAPI = async (id: string, val: boolean) => {
  let res: AxiosResponse<Product> = await axios.patch(
    `http://localhost:8080/womens/${id}`,
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
    `http://localhost:8080/mens/${id}`,
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
    `http://localhost:8080/womens/${id}`,
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
    `http://localhost:8080/UserDetails/${id}`,
    { Name: Name, Phone: Phone, Email: Email, Image: Image, Password: Password }
  );
  return res.data;
};

export const getAdminUserPatchAPI = async (
  Name:string,
  EmailId:string,
  Phone:string,
  Password:string,
  Image:string
) => {
  let res: AxiosResponse<Userdetails> = await axios.patch(
    `http://localhost:8080/AdminDetails`,
    { Name,EmailId,Phone,Password,Image}
  );
  return res.data;
};
