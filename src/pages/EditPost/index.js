import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  convertToRaw,
  convertFromHTML,
  ContentState,
  EditorState,
} from "draft-js";
import "./editor.css";
import "./index.scss";
import draftToHtml from "draftjs-to-html";
import bold from "../../assets/icons/bold.svg";
import italic from "../../assets/icons/italic.svg";
import unordered from "../../assets/icons/unordered.svg";
import ordered from "../../assets/icons/ordered.svg";
import link from "../../assets/icons/link.svg";
import strikethrough from "../../assets/icons/strikethrough.svg";
import superscript from "../../assets/icons/superscript.svg";
import image from "../../assets/icons/image.svg";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../store/actions/Post";
import { editPost } from "../../store/actions/EditPost";
const EditPost = () => {
  const { id } = useParams();
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const oldPost = useSelector((store) => store.post);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState({
    title: null,
    content: null,
    id: parseInt(id),
  });
  const formatedContent = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  useEffect(() => setPost({ ...post, title: title }), [title]);
  useEffect(() => setPost({ ...post, content: formatedContent }), [
    formatedContent,
  ]);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (!oldPost.isFetching) {
      setTitle(oldPost.data.title);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(oldPost.data?.content)
          )
        )
      );
    }
  }, [oldPost.data]);

  const handleSendPost = () => {
    editPost(post, history);
  };

  return (
    !oldPost.isFetching && (
      <div className="w-100 max-width-800">
        <div className="create-post-title font-size-28 ">Create post</div>
        <div className="font-size-20 mb-20">{oldPost.data.board}</div>
        <div
          className="d-flex flex-column p-10 "
          style={{
            height: "fit-content",
            background: "white",
            borderRadius: "5px",
          }}
        >
          <div>
            <input
              type="text"
              name="Title"
              maxLength="90"
              placeholder="Title"
              value={title}
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid #dcdcdc",
                borderRadius: "5px",
                marginBottom: "8px",
                paddingLeft: "15px",
                fontSize: "14px",
              }}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="color-dark">
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbarClassName="demo-toolbar-absolute"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              placeholder="Text(optional)"
              toolbar={{
                options: [
                  "inline",
                  "fontSize",
                  "list",
                  "link",
                  "blockType",
                  "image",
                ],
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
                image: {
                  icon: image,
                  className: undefined,
                  component: undefined,
                  popupClassName: undefined,
                  urlEnabled: true,
                  uploadEnabled: true,
                  alignmentEnabled: true,
                  uploadCallback: (e) => {
                    console.log(e);
                  },
                  previewImage: false,
                  inputAccept:
                    "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                  alt: { present: false, mandatory: false },
                  defaultSize: {
                    height: "auto",
                    width: "auto",
                  },
                },
              }}
            />
          </div>
          <a
            className="submit_btn text-align-center p-10 cursor-pointer"
            onClick={() => handleSendPost()}
          >
            POST
          </a>
        </div>
      </div>
    )
  );
};

export default EditPost;
