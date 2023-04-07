
import { LoginDetail } from "../../utils/types";
import * as types from "./login.types";

export const loginSuccess = (payload: LoginDetail) => {
    // console.log(payload)
    return {type: types.LOGIN_SUCCESS, payload}
}

export const loginRequest = () => {
    return {type: types.LOGIN_REQUEST}
}

export const loginError = () => {
    return {type: types.LOGIN_ERROR}
}

export const logoutUser = () => {
    return {type: types.LOGOUT_USER}
}