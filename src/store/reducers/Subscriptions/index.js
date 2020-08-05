export const subscriptionsReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_SUBSCRIPTIONS_FETCHING":
      return { isFetching: true };
    case "GET_SUBSCRIPTIONS_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_SUBSCRIPTIONS_ERROR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
