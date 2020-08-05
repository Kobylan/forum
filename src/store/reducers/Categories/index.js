export const categoriesReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_CATEGORIES_FETCHING":
      return { isFetching: true };
    case "GET_CATEGORIES_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_CATEGORIES_ERROR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
