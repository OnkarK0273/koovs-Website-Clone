import { LoginState } from "../../utils/types";
import * as types from "./login.types";
import { ActionType } from "./signup.reducer";


const email = sessionStorage.getItem('email')
const fName = sessionStorage.getItem('fName')
const lName = sessionStorage.getItem('lName')


const initLoginState: LoginState = {
    isLoading: false,
    isAuth: email?true:false ,
    isError: false,
    email: email || "",
    fName: fName || "",
    lName: lName || "",
   
}

export const loginReducer = (state = initLoginState, action: ActionType) => {
    const { type, payload } = action;
    switch (type) {

        case (types.LOGIN_SUCCESS): {
            sessionStorage.setItem("email",payload.email)
            sessionStorage.setItem("fName",payload.fName)
            sessionStorage.setItem("lName",payload.lName)
            return {
                ...state, isLoading: false, isAuth: true ,email:payload.email,fName:payload.fName,lName:payload.lName
            }
        }

        case (types.LOGIN_REQUEST): {
            return {
                ...state, isLoading: false
            }
        }

        case (types.LOGIN_ERROR): {
            return {
                ...state, isLoading: false, isError: true
            }
        }

        case (types.LOGOUT_USER): {
            sessionStorage.removeItem('email')
            sessionStorage.removeItem('fName')
            sessionStorage.removeItem('lName')
            return { ...state,
                isLoading: false,
                isAuth: false,
                isError: false,
                email:"",fName:"",lName:""
                
            }
        }

        default: {
            return state;
        }
    }
}