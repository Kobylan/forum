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

export const getSubscriptions = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_SUBSCRIPTIONS_FETCHING",
    });
    return fetch(URI + "/api/v1/boards/user")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_SUBSCRIPTIONS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_SUBSCRIPTIONS_ERROR",
          error: error,
        });
      });
  };
};

export const Join = (id) => {
  fetch(URI + "/api/v1/subscribe", {
    method: "POST",
    body: JSON.stringify({ board_id: parseInt(id) }),
  })
    .then(() => {})
    .catch((error) => console.log("error", error));
};
export const Leave = (id) => {
  fetch(URI + "/api/v1/unsubscribe", {
    method: "POST",
    body: JSON.stringify({ board_id: parseInt(id) }),
  })
    .then(() => {})
    .catch((error) => console.log("error", error));
};

export const sortBoardByHot = () => {
  return (dispatch) => dispatch({ type: "SORT_BOARD_BY_HOT" });
};
export const sortBoardByDate = () => {
  return (dispatch) => dispatch({ type: "SORT_BOARD_BY_DATE" });
};
