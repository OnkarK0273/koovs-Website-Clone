import { LoginState } from "../../utils/types";
import * as types from "./login.types";
import { ActionType } from "./signup.reducer";



const initLoginState: LoginState = {
    isLoading: false,
    isAuth: false,
    isError: false,
    details: {
        email: "",
        password: ""
    }
}

export const loginReducer = (state = initLoginState, action: ActionType) => {
    const { type, payload } = action;
    switch (type) {

        case (types.LOGIN_SUCCESS): {
            return {
                ...state, details: payload, isLoading: false, isAuth: true
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
            return { ...state,
                isLoading: false,
                isAuth: false,
                isError: false,
                details: {
                    email: "",
                    password: ""
                }
            }
        }

        default: {
            return state;
        }
    }
}