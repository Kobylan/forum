import { URI } from "../../URI";

export const getMyComments = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_COMMENTS_FETCHING",
    });
    return fetch(URI + "/api/v1/comments/my")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_COMMENTS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_COMMENTS_SUCCESS",
          error: error,
        });
      });
  };
};
