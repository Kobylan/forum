import { URI } from "../../URI";

export const getNotifications = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_NOTIFICATIONS_FETCHING",
    });
    return fetch(URI + "/api/v1/notifications")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_NOTIFICATIONS_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_NOTIFICATIONS_ERROR",
          error: error,
        });
      });
  };
};
