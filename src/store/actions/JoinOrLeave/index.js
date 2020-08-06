import { URI } from "../../URI";

export const Join = (id) => {
  fetch(URI + "/api/v1/subscribe", {
    method: "POST",
    body: JSON.stringify({ board_id: parseInt(id) }),
  })
    .then(() => {})
    .catch((error) => console.log("error", error));
};
export const Leave = (id) => {
  fetch(URI + "/api/v1/unsubscribe", {
    method: "POST",
    body: JSON.stringify({ board_id: parseInt(id) }),
  })
    .then(() => {})
    .catch((error) => console.log("error", error));
};
