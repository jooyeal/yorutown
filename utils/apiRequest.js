import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../store/modules/userSlice";

const BASE_URL = "http://localhost:8000/api";

export const requestToSignUP = async ({ data }) => {
  const result = await axios
    .post(`${BASE_URL}/auth/register`, data)
    .then((res) => res.data)
    .catch((err) => err.response.data);
  return result;
};

export const requestToSignIn = async ({ dispatch, data }) => {
  dispatch(loginStart());
  const result = await axios
    .post(`${BASE_URL}/auth/signin`, data)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      return res;
    })
    .catch((err) => {
      dispatch(loginFailure());
      return err.response.data;
    });
  return result;
};
