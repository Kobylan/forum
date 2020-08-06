import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import Notification from "./Notification";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../store/actions/Notifications";
import { useLocation } from "react-router-dom";
const Notifications = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const notifications = useSelector((store) => store.notifications);
  useEffect(() => {
    dispatch(getNotifications());
  }, [location]);
  const newPosts = notifications.data?.filter(
    (item) => item.type === "New post"
  );
  return (
    !notifications.isFetching && (
      <div className="position-relative pg-20 br-1 b-color-white d-flex flex-column ">
        <div className="d-flex justify-content-between align-items-center">
          <Icon name="time" onClick={() => setActive(!active)} />
          <div className="color-yellow font-size-12 ml-5">
            {notifications.data?.length}
          </div>
        </div>
        <div
          className={`position-absolute bg-dark d-flex flex-column align-items-center  ${
            active ? "" : "d-none"
          }`}
          style={{ top: 50, right: 0, width: 300 }}
        >
          {notifications.data?.length > 0 ? (
            newPosts.length > 0 && (
              <div className="p-15 bb-1 w-100">
                <div className="text-uppercase font-style-monospace text-align-center bb-1">
                  New posts
                </div>
                {newPosts.map((notification) => (
                  <Notification
                    notification={notification}
                    setActive={setActive}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="m-20">No notifications</div>
          )}
        </div>
      </div>
    )
  );
};

export default Notifications;
