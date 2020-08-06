import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.scss";
import bold from "./icons/bold.svg";
import italic from "./icons/italic.svg";
import unordered from "./icons/unordered.svg";
import ordered from "./icons/ordered.svg";
import link from "./icons/link.svg";
import unlink from "./icons/unlink.svg";
import undo from "./icons/undo.svg";
import redo from "./icons/redo.svg";
import strikethrough from "./icons/strikethrough.svg";
import superscript from "./icons/superscript.svg";
import image from "./icons/image.svg";
const Createpost = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="d-flex flex-column w-100 max-width-800">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="demo-toolbar-absolute"
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        toolbar={{
          options: ["inline", "list", "link", "history", "blockType", "image"],
          inline: {
            options: ["bold", "italic", "strikethrough", "superscript"],
            bold: { icon: bold, className: undefined },
            italic: { icon: italic, className: undefined },
            strikethrough: { icon: strikethrough, className: undefined },
            superscript: { icon: superscript, className: undefined },
          },
          list: {
            options: ["unordered", "ordered"],
            unordered: { icon: unordered, className: undefined },
            ordered: { icon: ordered, className: undefined },
          },
          link: {
            options: ["link", "unlink"],
            link: { icon: link, className: undefined },
            unlink: { icon: unlink, className: undefined },
          },
          history: {
            options: ["undo", "redo"],
            undo: { icon: undo, className: undefined },
            redo: { icon: redo, className: undefined },
          },
          blockType: {
            inDropdown: true,
            options: ["Code"],
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
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: "auto",
              width: "auto",
            },
          },
        }}
      />
    </div>
  );
};

export default Createpost;
