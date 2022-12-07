import React, { useState } from "react";
import NavLink from "components/navigation/NavLink";
import Button from "components/utilities/button/Button";
import EditorForm from "components/editor/Editor";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const WritePostForm = ({ onSubmit, formClassName}) => {

  // setup initial content for edit
  var overview = ""

  // convert HTML content to EditorState
  const contentDataState = ContentState.createFromBlockArray(
    convertFromHTML(overview)
  );
  const editorDataState = EditorState.createWithContent(contentDataState);

  const [editorState, setEditorState] = useState(editorDataState); // set initial state with original HTML content
  const [convertedContent, setConvertedContent] = useState("");
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
    <form
      onSubmit={onSubmit}
      className={`items-end relative p-4 md:p-8 w-full h-screen flex flex-col ${formClassName}`}
    >
      <div className="flex gap-5 h-[20vh] items-end justify-end">
        <NavLink to="/draft" className="!p-2">
          Draft
        </NavLink>
        <Button
          children="Next"
          type="submit"
          className={`!min-w-[100px]`}
          onClick={(e) => {
            e.preventDefault();
            console.log(convertedContent);
          }}
          primary
        />
      </div>

      <EditorForm
        editorState={editorState}
        handleEditorChange={handleEditorChange}
        uploadImageCallBack={uploadImageCallBack}
      />
    </form>
  );
};

export default WritePostForm;
