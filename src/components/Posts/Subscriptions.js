import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsPosts } from "../../store/actions/Posts";
import Card from "../Card";

const Subscriptions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptionsPosts());
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

export default Subscriptions;
