export const getPost = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_POST_FETCHING",
    });
    return fetch("/api/v1/posts/" + id)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_POST_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_POST_SUCCESS",
          error: error,
        });
      });
  };
};
