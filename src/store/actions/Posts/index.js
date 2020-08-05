export const getPopularPosts = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_POSTS_FETCHING",
    });
    return fetch("/api/v1/posts")
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
export const getSubscriptionsPosts = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_POSTS_FETCHING",
    });
    return fetch("/api/v1/posts/subscriptions")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_POSTS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POSTS_ERROR",
          error: error,
        });
      });
  };
};
