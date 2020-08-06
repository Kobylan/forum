import { URI } from "../../URI";

export const getMyPosts = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_POSTS_FETCHING",
    });
    return fetch(URI + "/api/v1/posts/my")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_POSTS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POSTS_SUCCESS",
          error: error,
        });
      });
  };
};
