import { requestToSignIn } from "../utils/apiRequest";
import { loginFailure, loginStart, loginSuccess } from "./modules/userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await requestToSignIn({ data: user });
    dispatch(loginSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(loginFailure());
    return err.response;
  }
};
