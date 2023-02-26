import axios from "axios"
import { SignupDetail } from "../../utils/types"
import { AppDispatch } from "../store"
import * as types from "./signup.types"

// signup actions

export const signupSuccess = (payload:SignupDetail) => {
    console.log(payload)
    return {type: types.SIGNUP_SUCCESS, payload}
}

export const signupError = () => {
    return {type: types.SIGNUP_ERROR}
}

export const signupUserApi = (payload:SignupDetail) => async(dispatch: AppDispatch) => {
    console.log("asdg")
    try {
        const response = await axios.post(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/allUsers`, payload
            );
        dispatch(signupSuccess(response.data));
        console.log(response.data)
  } catch (error) {
    dispatch(signupError());
  }
}