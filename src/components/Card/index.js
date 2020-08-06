import React from "react";
import Icon from "../Icon";
import Link from "../Link";
import TimeAgo from "react-timeago/lib";
import { getTime } from "../getTime";
import ReactHtmlParser from "react-html-parser";

const Card = ({ post }) => {
  return (
    <div className="card d-flex p-20 w-100 flex-column mv-20" key={post.id}>
      <div className="d-flex justify-content-between">
        <div className="muted color-dark-gray-opacity-5 font-size-12">
          Posted by {post.author} <TimeAgo date={getTime(post.created)} />
        </div>
        <Link title="See more" className="more" link={"/post/" + post.id} />
      </div>
      <div className="font-size-20 font-weight-400 pv-5">{post.title}</div>
      <div className="pv-5">{ReactHtmlParser(post.content)}</div>
      <div className="d-flex mt-10">
        <div className="pr-15 d-flex color-dark-gray-opacity-5 align-items-start">
          <Icon
            name="thumb-up"
            fill={
              post.reaction === 1
                ? "rgb(153, 102, 255)"
                : "rgba(204, 204, 204, 0.5)"
            }
            size={15}
          />
          <div className="mg-5">{post.likes} likes</div>
        </div>
        <div className="pr-15 d-flex color-dark-gray-opacity-5 align-items-start">
          <Icon
            name="thumb-down"
            fill={
              post.reaction === 2
                ? "rgb(153, 102, 255)"
                : "rgba(204, 204, 204, 0.5)"
            }
            size={15}
          />
          <div className="mg-5">{post.dislikes} dislikes</div>
        </div>
        <div className="pr-15 d-flex color-dark-gray-opacity-5 align-items-start">
          <Icon name="comment" fill="rgba(204, 204, 204, 0.5)" size={15} />
          <div className="mg-5">{post.comments} comments</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
