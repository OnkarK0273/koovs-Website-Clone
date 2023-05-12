import axios from "axios";
import { SignupDetail } from "../../utils/types";
import { AppDispatch } from "../store";
import * as types from "./signup.types";

// signup actions

<<<<<<< HEAD
export const signupSuccess = (payload: SignupDetail) => {
  console.log(payload);
  return { type: types.SIGNUP_SUCCESS, payload };
};
=======
export const signupSuccess = (payload:SignupDetail) => {
    // console.log(payload)
    return {type: types.SIGNUP_SUCCESS, payload}
}
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93

export const signupError = () => {
  return { type: types.SIGNUP_ERROR };
};

export const signupUserApi =
  (payload: SignupDetail) => async (dispatch: AppDispatch) => {
    try {
<<<<<<< HEAD
      const response = await axios.post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/allUsers`,
        payload
      );
      dispatch(signupSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(signupError());
    }
  };
=======
        const response = await axios.post(
            `https://kools.onrender.com/allUsers`, payload
            );
        dispatch(signupSuccess(response.data));
        // console.log(response.data)
  } catch (error) {
    dispatch(signupError());
  }
}
>>>>>>> b9c71f51756986c4dd73d84e2dd673832e77dc93
