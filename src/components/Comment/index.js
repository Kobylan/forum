import React from "react";
import TimeAgo from "react-timeago/lib";
import { getTime } from "../getTime";
import Link from "../Link";
import Icon from "../Icon";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteCommentary } from "../../store/actions/Commentaries";

const Comment = ({ comment }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCommentary(comment.id, comment.post_id));
  };
  const userName = useSelector((store) => store.myProfile?.username);
  return (
    <div className="card d-flex p-20 w-100 flex-column mv-20" key={comment.id}>
      <div className="d-flex justify-content-between">
        <div className="muted color-dark-gray-opacity-5 font-size-12">
          Posted by {comment.author} <TimeAgo date={getTime(comment.created)} />
        </div>
        {location.pathname.split("/")[1] === "profile" ? (
          <Link
            title="See more"
            className="more"
            link={"/post/" + comment.post_id}
          />
        ) : (
          userName === comment.author && (
            <div className="more" onClick={() => handleDelete()}>
              Delete
            </div>
          )
        )}
      </div>
      <div className="pv-5 mt-5">{ReactHtmlParser(comment.content)}</div>
      <div className="d-flex mt-10">
        <div className="pr-15 d-flex color-dark-gray-opacity-5 align-items-start">
          <Icon
            name="thumb-up"
            fill={
              comment.reaction === 1
                ? "rgb(153, 102, 255)"
                : "rgba(204, 204, 204, 0.5)"
            }
            size={15}
          />
          <div className="mg-5">{comment.likes} likes</div>
        </div>
        <div className="pr-15 d-flex color-dark-gray-opacity-5 align-items-start">
          <Icon
            name="thumb-down"
            fill={
              comment.reaction === 2
                ? "rgb(153, 102, 255)"
                : "rgba(204, 204, 204, 0.5)"
            }
            size={15}
          />
          <div className="mg-5">{comment.dislikes} dislikes</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
