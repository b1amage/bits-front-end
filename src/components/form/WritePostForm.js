import React, { useState } from "react";
import Button from "components/utilities/button/Button";
import EditorForm from "components/editor/Editor";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
const WritePostForm = ({ onSubmit, formClassName }) => {
  const [preview, setPreview] = useState(false);
  const [convertedContent, setConvertedContent] = useState("");
  const navigate = useNavigate();
  const createMarkup = (html) => {
    console.log(html);
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`items-end relative p-4 md:p-8 w-full h-screen flex flex-col ${formClassName}`}
    >
      <div className="flex gap-5 h-[20vh] items-end justify-end">
        <Button
          className="!min-w-[100px]"
          onClick={() => setPreview((state) => !state)}
          primary={preview ? true : false}
        >
          Preview
        </Button>
        <Button
          children="Next"
          type="submit"
          className={`!min-w-[100px]`}
          onClick={(e) => {
            e.preventDefault();
            setPreview(false);
            console.log(convertedContent);
            localStorage.setItem("content", convertedContent);
            navigate("/post/setup");
          }}
          primary
        />
      </div>

      {preview ? (
        <div
          className="max-h-[70vh] h-full flex flex-col w-full py-4"
          dangerouslySetInnerHTML={createMarkup(convertedContent)}
        ></div>
      ) : (
        <EditorForm
          content={convertedContent}
          setConvertedContent={setConvertedContent}
          toolbarOnFocus
        />
      )}
    </form>
  );
};

export default WritePostForm;
