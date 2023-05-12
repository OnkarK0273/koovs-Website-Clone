import { LoginDetail } from "../../utils/types";
import * as types from "./login.types";

export const loginSuccess = (payload: LoginDetail) => {
<<<<<<< HEAD
  console.log(payload);
  return { type: types.LOGIN_SUCCESS, payload };
};
=======
    // console.log(payload)
    return {type: types.LOGIN_SUCCESS, payload}
}
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93

export const loginRequest = () => {
  return { type: types.LOGIN_REQUEST };
};

export const loginError = () => {
  return { type: types.LOGIN_ERROR };
};

export const logoutUser = () => {
  return { type: types.LOGOUT_USER };
};
