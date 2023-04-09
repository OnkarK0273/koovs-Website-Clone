import { Admin, Product, Userdetails } from "../../utils/types";
import * as types from "./admin.type";

interface IinitState {
  loading: boolean;
  error: boolean;
  mens: Product[];
  womens: Product[];
  users: Userdetails[];
  admin: Admin[];
  isAdmin: boolean;
}

const initState = {
  loading: false,
  error: false,
  mens: [],
  womens: [],
  users: [],
  admin: [],
  isAdmin: sessionStorage.getItem("KoolAdmin") ? true : false
};

export const adminReducer = (
  state: IinitState = initState,
  { type, payload }: any
) => {
  switch (type) {
    case types.ADMIN_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case types.ADMIN_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case types.GET_ADMIN_MENS_PRODUCT: {
      return { ...state, loading: false, mens: payload };
    }

    case types.GET_ADMIN_WOMEMENS_PRODUCT: {
      return { ...state, loading: false, womens: payload };
    }

    case types.GET_ADMIN_USERS: {
      return { ...state, loading: false, users: payload };
    }

    case types.GET_ADMIN_ADMIN: {
      return { ...state, loading: false, admin: payload };
    }

    case types.ADMIN_LOGIN: {
      sessionStorage.setItem("KoolAdmin", "true")
      const newPayload = {...payload, isAuth: true, isAdmin: true}
      return { ...state, loading: false, admin: newPayload,isAdmin: true };
    }

    case types.ADMIN_LOGOUT:{
      sessionStorage.removeItem("KoolAdmin")
      return { ...state, loading: false, admin: [],isAdmin: false }
    }

    case types.TOGGLE_MEN:{
      let arr:any = state.mens.map((el)=>{
        if(el.id===payload){
          el.active = !el.active
        }
        return el
      })
      return { ...state, loading: false, mens: arr };

    }

    case types.TOGGLE_WOMENMEN:{
      let arr = state.womens.map((el)=>{
        if(el.id===payload){
          el.active = !el.active
        }
        return el
      })
      return { ...state, loading: false, womens: arr };

    }

    case types.PATCH_ADMIN_MENS_PRODUCT:{

      let arr = state.mens.map((el)=>{
        if(el.id===payload.id){
          el.img1 = payload.image
          el.price = payload.price
          el.title = payload.title
        }
        return el
      })

      return { ...state, loading: false, mens: arr };

    }


    case types.PATCH_ADMIN_WOMEMENS_PRODUCT:{

      let arr = state.womens.map((el)=>{
        if(el.id===payload.id){
          el.img1 = payload.image
          el.price = payload.price
          el.title = payload.title
        }
        return el
      })

      return { ...state, loading: false, womens: arr };

    }

    case types.PATCH_ADMIN_USERS:{

      let arr = state.users.map((el)=>{
        if(el.id===payload.id){
          el.Image = payload.Image
          el.Password = payload.Password
          el.Name = payload.Name
          el.Phone = payload.Phone
          el.Email = payload.Email
        }
        return el
      })

      return { ...state, loading: false, users: arr };

    }

    case types.PATCH_ADMIN:{
      return{...state,loading: false,admin:[...state.admin,payload.Name,payload.EmailId,payload.Phone,payload.Password,payload.Image]}
    }



    default:
      return state;
  }
};
