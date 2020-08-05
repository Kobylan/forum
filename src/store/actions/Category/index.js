export const getCategory = (board) => {
  return (dispatch) => {
    dispatch({
      type: "GET_CATEGORY_FETCHING",
    });
    return fetch(`/api/v1/boards/${board}`)
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
