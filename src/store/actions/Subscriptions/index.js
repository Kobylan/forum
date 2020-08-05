export const getSubscriptions = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_SUBSCRIPTIONS_FETCHING",
    });
    return fetch("/api/v1/boards/user")
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
