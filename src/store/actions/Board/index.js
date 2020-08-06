import { URI } from "../../URI";
export const getBoard = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_BOARD_FETCHING",
    });
    return fetch(URI + "/api/v1/posts/board/" + id)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_BOARD_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_BOARD_SUCCESS",
          error: error,
        });
      });
  };
};
