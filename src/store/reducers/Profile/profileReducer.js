export const profileReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_PROFILE_FETCHING":
      return { isFetching: true };
    case "GET_PROFILE_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_PROFILE_ERROR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
