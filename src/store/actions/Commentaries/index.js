import { URI } from "../../URI";
import { getPost } from "../Posts";

export const getCommentaries = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_COMMENTARIES_FETCHING",
    });
    return fetch(URI + "/api/v1/posts/" + id)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "GET_COMMENTARIES_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({
          type: "GET_COMMENTARIES_SUCCESS",
          error: error,
        });
      });
  };
};

export const addCommentary = (content, post) => {
  return (dispatch) =>
    fetch(URI + "/api/v1/comments", {
      method: "POST",
      body: JSON.stringify(content),
    })
      .then(() => dispatch(getPost(post)))
      .catch((err) => console.log(err));
};
export const deleteCommentary = (id, post) => {
  return (dispatch) =>
    fetch(URI + "/api/v1/comments/" + id, {
      method: "DELETE",
    })
      .then(() => dispatch(getPost(post)))
      .catch((err) => console.log(err));
};

export const editCommentary = (content, history) => {
  fetch(URI + "/api/v1/posts/" + content.id, {
    method: "PUT",
    body: JSON.stringify(content),
  })
    .then(() => history.push("/post/" + content.id))
    .catch((err) => console.log(err));
};
