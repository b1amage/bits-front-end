import React, {useState} from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
const EditorForm = ({content, setConvertedContent, toolbarOnFocus, className}) => {
  var overview = content
  // convert HTML content to EditorState
  const contentDataState = ContentState.createFromBlockArray(
    convertFromHTML(overview)
  );
  const editorDataState = EditorState.createWithContent(contentDataState);

  const [editorState, setEditorState] = useState(editorDataState); // set initial state with original HTML content
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setConvertedContent(currentContentAsHTML);
  };

  const uploadImageCallBack = (file) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // xhr.open("POST", "https://bits-gt8m.onrender.com/api/image/upload-image");
      xhr.open("POST", "/api/image/upload-image");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        var data = JSON.parse(xhr.responseText);

        if (!data.image) {
          alert(data.msg);
          reject();
          return;
        }

        // Magic Happens Here
        console.log(data);
        var response = { data: { link: data.image.src } };

        resolve(response);
        // console.log(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  return (
    <Editor
      placeholder="Write your story"
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      wrapperClassName={`max-h-[70vh] h-full flex flex-col justify-end w-full py-4 w-full ${className}`}
      editorClassName="editor w-full !h-fit shadow-md outline-none resize-none box-border rounded-2xl px-6"
      toolbarClassName="!h-fit !rounded-2xl w-full"
      toolbarOnFocus={toolbarOnFocus}
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: {
          uploadEnabled: true,
          uploadCallback: uploadImageCallBack,
          previewImage: true,
          inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
          alt: { present: false, mandatory: false },
          defaultSize: {
            height: "auto",
            width: "auto",
          },
        },
      }}
    />
  );
};
export default EditorForm;
