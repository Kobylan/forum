import { URI } from "../../URI";

export const getProfile = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_PROFILE_FETCHING",
    });
    return fetch(URI + "/api/v1/profile")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_PROFILE_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_PROFILE_SUCCESS",
          error: error,
        });
      });
  };
};
