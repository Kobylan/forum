import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBoard,
  sortBoardByDate,
  sortBoardByHot,
} from "../../store/actions/Board";
import Card from "../../components/Card";
import "./index.scss";
import { Join, Leave } from "../../store/actions/Board";
const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector((store) => store.board);
  const [subscribed, setSubscribed] = useState();
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState();
  useEffect(() => {
    setSubscribed(board.data?.board.is_subscribed);
  }, [board.data?.board]);
  useEffect(() => {
    setPosts(board.data?.posts);
  }, [board.data?.posts]);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getBoard(id));
  }, [id]);

  const search = () => {
    let headPosts = board.data.posts;
    return headPosts.filter((post) => !post.title.search(query));
  };
  return !board.isFetching && posts ? (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between font-style-monospace align-items-center b-1 b-color-gray p-15 mb-20">
        <div className="font-size-24">{board.data.board.name}</div>
        <div
          className={`text-uppercase cursor-pointer color-${
            subscribed ? "red" : "green"
          }`}
          onClick={() => {
            subscribed ? Leave(id) : Join(id);
            setSubscribed(!subscribed);
          }}
        >
          {subscribed ? "Leave" : "Join"}
        </div>
      </div>
      <div className="mb-20">
        <div className="bg-dark-opacity-75-hover bg-dark-opacity-75 d-flex align-items-center">
          <div
            className={`p-10 text-hover cursor-pointer ${
              board.sorted === 1 ? "color-purple" : ""
            }`}
            onClick={() => dispatch(sortBoardByHot())}
          >
            Hot
          </div>
          <div
            className={`p-10 text-hover cursor-pointer ${
              board.sorted === 2 ? "color-purple" : ""
            }`}
            onClick={() => dispatch(sortBoardByDate())}
          >
            New
          </div>
          <input
            className="board_filter__input m-10"
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (query.trim() === "") {
                  setPosts(board.data.posts);
                  return;
                }
                setPosts(search());
              }
            }}
          />
        </div>
      </div>
      {posts.length > 0
        ? posts.map((post) => <Card post={post} />)
        : "This board has no posts"}
    </div>
  ) : (
    <div />
  );
};

export default Board;
