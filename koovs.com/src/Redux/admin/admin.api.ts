import axios,{AxiosResponse} from "axios";
import { Admin, Product, Users } from "../../utils/types";

export const getMensAPI = async ()=>{
    let res:AxiosResponse<Product[]> = await axios.get(`http://localhost:8080/mens`)
    return res.data
}

export const getWomensAPI = async ()=>{
    let res:AxiosResponse<Product[]> = await axios.get(`http://localhost:8080/womens`)
    return res.data
}

export const getUsersAPI = async ()=>{
    let res:AxiosResponse<Users[]> = await axios.get(`http://localhost:8080/User-Details`)
    return res.data
}

export const getAdminAPI = async ()=>{
    let res:AxiosResponse<Admin[]> = await axios.get(`http://localhost:8080/Admin-Details`)
    return res.data
}





