import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { getTime } from "../../components/getTime";
import Icon from "../../components/Icon";
import "./index.scss";
import {
  DislikePost,
  LikePost,
  getPost,
  addPost,
} from "../../store/actions/Posts";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { convertToRaw, EditorState } from "draft-js";

import {deletePost} from "../../store/actions/Posts";
import Commentaries from "../../components/Commentaries";

import Button from "../../components/Button";
import Comment from "../../components/Comment";
import bold from "../../assets/icons/bold.svg";
import italic from "../../assets/icons/italic.svg";
import strikethrough from "../../assets/icons/strikethrough.svg";
import superscript from "../../assets/icons/superscript.svg";
import unordered from "../../assets/icons/unordered.svg";
import ordered from "../../assets/icons/ordered.svg";
import link from "../../assets/icons/link.svg";
import image from "../../assets/icons/image.svg";
import { addCommentary } from "../../store/actions/Commentaries";
const Board = () => {
  const { id } = useParams();
  const history = useHistory();
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  const [reaction, setReaction] = useState();
  useEffect(() => {
    setReaction(post.data?.reaction);
  }, [post.data?.reaction]);
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [comment, setComment] = useState({
    content: null,
    post_id: parseInt(id),
  });
  const formatedContent = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  useEffect(() => setComment({ ...comment, content: formatedContent }), [
    formatedContent,
  ]);
  console.log(comment);
  const handleSendComment = () => {
    dispatch(addCommentary(comment, id));
  };
  return (
    !post.isFetching && (
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-size-40 pv-20">{post.data.title}</div>
          <div className="d-flex">
            <Button
              title="Edit Post"
              uppercase={true}
              color="gray"
              onClick={() => history.push("/edit-post/" + post.data.id)}
            />
            <Button
              title="Delete post"
              uppercase={true}
              color="red"
              className="ml-15"
              onClick={() => deletePost(post.data.id, history)}
            />
          </div>
        </div>
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
              dispatch(LikePost(id, reaction, setReaction));
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
              dispatch(DislikePost(id, reaction, setReaction));
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
            <div className="mg-5">{post.data.comments.length} commentaries</div>
          </div>
        </div>

        <div className="color-dark-gray-opacity-5 font-size-20 bb-1 b-color-gray-opacity-5 mt-20 pb-10">
          Commentaries
        </div>
        <div className="mt-20 color-darko">
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            placeholder="New comment"
            toolbar={{
              options: ["inline", "fontSize", "list", "link", "blockType"],
              inline: {
                options: ["bold", "italic", "strikethrough", "superscript"],
                bold: { icon: bold, className: undefined },
                italic: { icon: italic, className: undefined },
                strikethrough: { icon: strikethrough, className: undefined },
                superscript: { icon: superscript, className: undefined },
              },
              fontSize: {
                options: [
                  8,
                  9,
                  10,
                  11,
                  12,
                  14,
                  16,
                  18,
                  24,
                  30,
                  36,
                  48,
                  60,
                  72,
                  96,
                ],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
              list: {
                options: ["unordered", "ordered"],
                unordered: { icon: unordered, className: undefined },
                ordered: { icon: ordered, className: undefined },
              },
              link: {
                options: ["link"],
                link: { icon: link, className: undefined },
              },
              blockType: {
                inDropdown: true,
                options: [
                  "Normal",
                  "H1",
                  "H2",
                  "H3",
                  "H4",
                  "H5",
                  "H6",
                  "Blockquote",
                  "Code",
                ],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
            }}
          />
          <a
            className="post-table-comment_btn text-align-center p-10 cursor-pointer"
            onClick={() => handleSendComment()}
          >
            Add Comment
          </a>
        </div>
        {post.data.comments.length > 0 ? (
          post.data.comments.map((e) => <Comment comment={e} />)
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
