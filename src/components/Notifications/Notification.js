import React from "react";
import Button from "../Button";
import { useHistory } from "react-router-dom";
const Notification = ({ notification, setActive }) => {
  const history = useHistory();
  switch (notification.type) {
    case "New post":
      return (
        <div className="p-20">
          <div className="d-flex mb-10 flex-column align-items-center">
            {notification.post_title} - {notification.board}
          </div>
          <Button
            title="Go to post"
            color="gray"
            onClick={() => {
              setActive(false);
              history.push("/post/" + notification.post_id);
            }}
          />
        </div>
      );
  }
};

export default Notification;
