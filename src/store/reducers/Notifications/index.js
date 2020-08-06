export const notificationsReducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case "GET_NOTIFICATIONS_FETCHING":
      return { isFetching: true };
    case "GET_NOTIFICATIONS_SUCCESS":
      return { isFetching: false, data: action.payload };
    case "GET_NOTIFICATIONS_ERROR":
      return { isFetching: false, error: action.error };
    default:
      return state;
  }
};
