import axios from "axios";
import { Userdetails } from "../../utils/types";
import {
  USER_API_CALL_FAIL,
  USER_API_CALL_REQ,
  USER_API_CALL_SUC,
} from "./payment.types";

const getUserreq = () => {
  return {
    type: USER_API_CALL_REQ,
  };
};

const getUsersuc = (payload: Userdetails) => {
  return {
    type: USER_API_CALL_SUC,
    payload,
  };
};

const getUserfail = () => {
  return {
    type: USER_API_CALL_FAIL,
  };
};

const getUserDetails = async (dispatch: any) => {
  dispatch(getUserreq());
  try {
    let res = await axios.get(`http://localhost:8080/UserDetails`);
    let data = res.data;
    dispatch(getUsersuc(data));
  } catch (error) {
    dispatch(getUserfail());
  }
};

export { getUserDetails };
