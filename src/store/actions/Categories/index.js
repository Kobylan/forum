export const getCategories = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_CATEGORIES_FETCHING",
    });
    return fetch("/api/v1/categories")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_CATEGORIES_SUCCESS",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_CATEGORIES_ERROR",
          error: error,
        });
      });
  };
};
