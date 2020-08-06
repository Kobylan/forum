import { URI } from "../../URI";

export const addPost = (content, history) => {
  fetch(URI + "/api/v1/posts", {
    method: "POST",
    body: JSON.stringify(content),
  })
    .then((response) => response.json())
    .then((id) => history.push("/post/" + id))
    .catch((err) => console.log(err));
};
