import React, { useEffect, useState } from "react";
import "./index.scss";
import { getProfile } from "../../store/actions/Profile/getMyProfile";
import { useDispatch, useSelector } from "react-redux";
import { getMyComments } from "../../store/actions/Profile/getMyComments";
import { getMyPosts } from "../../store/actions/Profile/getMyPosts";
import Card from "../../components/Card";
import Comment from "../../components/Comment";

const Profile = () => {
  const [activeSection, setActiveSection] = useState(0);
  const dispatch = useDispatch();
  const profileData = useSelector((store) => store.myProfile);
  const comments = useSelector((store) => store.myComments);
  const posts = useSelector((store) => store.myPost);
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getMyComments());
    dispatch(getMyPosts());
  }, []);
  console.log(comments, posts);
  return (
    !profileData.isFetching && (
      <div className="w-100 d-flex flex-column">
        <div className="font-size-64 font-style-monospace">
          Welcome, {profileData.data.username}
        </div>
        <div
          className="d-flex font-size-24"
          style={{
            background: "transparent",
          }}
        >
          <div
            className={`${
              activeSection === 0 && `profile-active_item`
            } profile-item`}
            onClick={() => setActiveSection(0)}
          >
            My post
          </div>
          <div
            className={`${
              activeSection === 1 && `profile-active_item`
            } profile-item`}
            onClick={() => setActiveSection(1)}
          >
            My commentaries
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div>
              <div className="profile-profile-avatar align-items-center justify-content-center d-flex flex-column">
                <img
                  src={profileData.data.avatar_url}
                  width="120px"
                  height="120px"
                  style={{
                    borderRadius: "50%",
                    boxShadow: "1px 9px 35px -3px rgba(0,0,0,0.75)",
                  }}
                />
                <div
                  className="color-dark align-items-start font-style-monospace w-100 pg-10"
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                  }}
                >
                  <div className="mt-5 d-flex">
                    <div className="color-dark-gray">username:</div>
                    {profileData.data.username}
                  </div>
                  <div className="mt-5 d-flex">
                    <div className="color-dark-gray">karma:</div>
                    {profileData.data.karma}
                  </div>
                  <div className="mt-5">
                    <a> {profileData.data.email}</a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          {activeSection === 0 && (
            <div className="profile-posts">
              <div className="font-style-monospace font-size-32 ">Posts</div>
              {!posts.isFetching && posts.data.map((e) => <Card post={e} />)}
            </div>
          )}
          {activeSection === 1 && (
            <div className="profile-posts">
              <div className="font-style-monospace font-size-32 ">Comments</div>
              {!comments.isFetching &&
                comments.data.map((e) => <Comment comment={e} />)}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Profile;
