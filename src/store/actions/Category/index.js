import { URI } from "../../URI";

export const getCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_CATEGORY_FETCHING",
    });
    return fetch(URI + "/api/v1/boards/" + id)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_CATEGORY_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_CATEGORY_ERROR",
          error: error,
        });
      });
  };
};
