import { URI } from "../../URI";

export const Like = (id, userReaction, setReaction) => {
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
export const Dislike = (id, userReaction, setReaction) => {
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
