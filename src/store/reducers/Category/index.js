export const categoryReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_CATEGORY_FETCHING":
      return { isFetching: true };
    case "GET_CATEGORY_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_CATEGORY_ERR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
