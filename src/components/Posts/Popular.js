import React, { useEffect } from "react";
import { getPopularPosts } from "../../store/actions/Posts";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";

const Popular = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularPosts());
  }, []);
  const posts = useSelector((store) => store.posts);
  return (
    <div>
      {!posts.isFetching &&
        posts.data
          .sort((a, b) => a.created < b.created)
          .map((post) => <Card post={post} />)}
    </div>
  );
};

export default Popular;
