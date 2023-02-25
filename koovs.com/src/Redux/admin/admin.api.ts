
import axios,{AxiosResponse} from "axios";
import { Admin, Product, Userdetails } from "../../utils/types";

export const getMensAPI = async (getProductsParam?: { params: { category: string[],_limit:number,_page:number ,q:string[]} })=>{
    let res:AxiosResponse<Product[]> = await axios.get(`http://localhost:8080/mens`,getProductsParam)
    return res.data
}

export const getWomensAPI = async (getProductsParam?: { params: { category: string[],_limit:number,_page:number,q:string[] } })=>{
    let res:AxiosResponse<Product[]> = await axios.get(`http://localhost:8080/womens`,getProductsParam)
    return res.data
}

export const getUsersAPI = async ()=>{
    let res:AxiosResponse<Userdetails[]> = await axios.get(`http://localhost:8080/User-Details`)
    return res.data
}

export const getAdminAPI = async ()=>{
    let res:AxiosResponse<Admin[]> = await axios.get(`http://localhost:8080/Admin-Details`)
    return res.data
}


export const getMensToggleAPI= async (id:string,val:boolean)=>{
    let res:AxiosResponse<Product> = await axios.patch(`http://localhost:8080/mens/${id}`,{active:!val})
    return res.data
}

export const getWomensToggleAPI= async (id:string,val:boolean)=>{
    let res:AxiosResponse<Product> = await axios.patch(`http://localhost:8080/womens/${id}`,{active:!val})
    return res.data
}


