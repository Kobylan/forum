import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { getPost } from "../../store/actions/Post";
import { getTime } from "../../components/getTime";
import Icon from "../../components/Icon";
import "./index.scss";
import { Dislike, Like } from "../../store/actions/Reaction";
import Commentaries from "../../components/Commentaries";
const Board = () => {
  const { id } = useParams();
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  const [reaction, setReaction] = useState();
  useEffect(() => {
    setReaction(post.data?.reaction);
  }, [post.data?.reaction]);
  return (
    !post.isFetching && (
      <div className="d-flex flex-column w-100">
        <div className="font-size-40 pv-20">{post.data.title}</div>
        <div className="bg-white color-dark">
          <table className="post-table">
            <thead>
              <tr>
                <td>Author</td>
                <td>Board</td>
                <td>Creation date</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{post.data.author}</td>
                <td>{post.data.board}</td>
                <td>{getTime(post.data.created)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="color-dark-gray-opacity-5 font-size-20 bb-1 b-color-gray-opacity-5 mt-50 pb-10">
          Content
        </div>
        <div className="mv-20 ">{ReactHtmlParser(post.data.content)}</div>
        <div className="d-flex mt-10 ">
          <div
            className="pr-15  d-flex color-dark-gray-opacity-5 align-items-center cursor-pointer"
            onClick={() => {
              dispatch(Like(id, reaction, setReaction));
            }}
          >
            <Icon
              name="thumb-up"
              fill={
                reaction === 1
                  ? "rgb(153, 102, 255)"
                  : "rgba(204, 204, 204, 0.5)"
              }
              size={15}
            />
            <div className="mg-5">{post.data.likes} likes</div>
          </div>
          <div
            className="pr-15 d-flex color-dark-gray-opacity-5 align-items-center cursor-pointer"
            onClick={() => {
              dispatch(Dislike(id, reaction, setReaction));
            }}
          >
            <Icon
              name="thumb-down"
              fill={
                reaction === 2
                  ? "rgb(153, 102, 255)"
                  : "rgba(204, 204, 204, 0.5)"
              }
              size={15}
            />
            <div className="mg-5">{post.data.dislikes} dislikes</div>
          </div>
          <div className="pr-15 d-flex color-dark-gray-opacity-5 align-items-center">
            <Icon name="comment" fill="rgba(204, 204, 204, 0.5)" size={15} />
            <div className="mg-5">{post.data.comments.length} comments</div>
          </div>
        </div>
        <div className="color-dark-gray-opacity-5 font-size-20 bb-1 b-color-gray-opacity-5 mt-20 pb-10">
          Commentaries
        </div>
        {post.data.comments.length > 0 ? (
          <Commentaries commentaries={post.data.comments} />
        ) : (
          <div className="d-flex w-100 justify-content-center mt-20">
            No comments yet
          </div>
        )}
      </div>
    )
  );
};

export default Board;
