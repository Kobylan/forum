import { URI } from "../../URI";

export const editPost = (content, history) => {
  fetch(URI + "/api/v1/posts/" + content.id, {
    method: "PUT",
    body: JSON.stringify(content),
  })
    .then(() => history.push("/post/" + content.id))
    .catch((err) => console.log(err));
};
