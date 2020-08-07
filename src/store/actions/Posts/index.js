import { URI } from "../../URI";

export const getPopularPosts = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_POSTS_FETCHING",
    });
    return fetch(URI + "/api/v1/posts")
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
    return fetch(URI + "/api/v1/posts/subscriptions")
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

export const getPost = (id) => {
  return (dispatch) => {
    dispatch({
      type: "GET_POST_FETCHING",
    });
    return fetch(URI + "/api/v1/posts/" + id)
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

export const addPost = (content, history) => {
  fetch(URI + "/api/v1/posts", {
    method: "POST",
    body: JSON.stringify(content),
  })
    .then((response) => response.json())
    .then((id) => history.push("/post/" + id))
    .catch((err) => console.log(err));
};

export const editPost = (content, history) => {
  fetch(URI + "/api/v1/posts/" + content.id, {
    method: "PUT",
    body: JSON.stringify(content),
  })
    .then(() => history.push("/post/" + content.id))
    .catch((err) => console.log(err));
};

export const LikePost = (id, userReaction, setReaction) => {
  return (dispacth) => {
    fetch(URI + "/api/v1/reaction/post", {
      method: "POST",
      body: JSON.stringify({
        post_id: parseInt(id),
        type: 1,
      }),
    }).then(() => {
      setReaction(userReaction === 1 ? 0 : 1);
      dispacth({
        type: "SET_POST_LIKE",
        payload: userReaction === 1 ? -1 : 1,
      });
      if (userReaction === 2) {
        dispacth({
          type: "SET_POST_DISLIKE",
          payload: -1,
        });
      }
    });
  };
};
export const DislikePost = (id, userReaction, setReaction) => {
  return (dispacth) => {
    fetch(URI + "/api/v1/reaction/post", {
      method: "POST",
      body: JSON.stringify({
        post_id: parseInt(id),
        type: 2,
      }),
    }).then(() => {
      setReaction(userReaction === 2 ? 0 : 2);
      dispacth({
        type: "SET_POST_DISLIKE",
        payload: userReaction === 2 ? -1 : 1,
      });
      if (userReaction === 1) {
        dispacth({
          type: "SET_POST_LIKE",
          payload: -1,
        });
      }
    });
  };
};

export const deletePost = (id, history) => {
  fetch(URI + "/api/v1/posts/" + id, {
    method: "DELETE",
  }).then(() => history.push("/"));
};
