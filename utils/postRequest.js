import axios from "axios";
import { POST_GET, POST_GET_ALL } from "./apiUrls";

export const requestToPostGetAll = async () => {
  const result = await axios
    .get(POST_GET_ALL)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response.data;
    });
  return result;
};

export const requestToPostWithPostId = async ({ postId }) => {
  const result = await axios
    .get(`${POST_GET}/${postId}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.response.data;
    });
  return result;
};
