import axios, { AxiosResponse } from "axios";
import { Product } from "../../utils/types";

export const getProductsAPI = async (getProductsParam?: {
  params: {
    category: string[];
    brand: string[];
    _limit: number;
    _page: number;
  };
}) => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `https://kools.onrender.com/mens`,
      getProductsParam
    );
    return res.data;
  } catch (error) {
    console.log("getProductsAPI error", error);
  }
};

// export const getSingleProductAPI = async ({ id: string }) => {
//   try {
//     let res: AxiosResponse<Product[]> = await axios.get(
//       `https://kools.onrender.com/mens/${id}`
//     );
//     return res.data;
//   } catch (error) {
//     console.log("getSingleProductAPI error", error);
//   }
// };

export const getWomenProductsAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios.get(
      `https://kools.onrender.com/womens`
    );
    return res.data;
  } catch (error) {
    console.log("getWomensProductsAPI error", error);
  }
};
