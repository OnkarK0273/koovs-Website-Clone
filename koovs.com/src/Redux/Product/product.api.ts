import axios, { AxiosResponse } from "axios";
import { Product } from "../../utils/types";

export const getProductsAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `http://localhost:8080/mens`
    );
    return res.data;
  } catch (error) {
    console.log("getProductsAPI error", error);
  }
};
