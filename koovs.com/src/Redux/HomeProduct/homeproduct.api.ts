import axios, { AxiosResponse } from "axios";
import { Product } from "../../utils/types";

export const getHomeMenProductsAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `http://localhost:8080/mens?category_like=hoodes&_limit=8`
    );
    return res.data;
  } catch (error) {
    console.log("getHomeMenProductsAPI error", error);
  }
};
export const getHomeWomenProductsAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `http://localhost:8080/womens?category_like=loungwear&_start=1&_end=9&_limit=8`
    );
    return res.data;
  } catch (error) {
    console.log("getHomeWomensProductsAPI error", error);
  }
};

export const getHomeShoesProductsAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `http://localhost:8080/womens?category_like=sneakers&_start=2&_end=8&_limit=8`
    );
    return res.data;
  } catch (error) {
    console.log("getHomeShoesProductsAPI error", error);
  }
};

export const getHomeTshirtsProductsAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `http://localhost:8080/mens?category_like=t-shirt&_start=2&_end=8&_limit=8`
    );
    return res.data;
  } catch (error) {
    console.log("getHomeTshirtsProductsAPI error", error);
  }
};
