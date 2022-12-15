import React, { useState } from "react";
import NavLink from "components/navigation/NavLink";
import Button from "components/utilities/button/Button";
import EditorForm from "components/editor/Editor";
import { useNavigate } from "react-router-dom";
const WritePostForm = ({ onSubmit, formClassName}) => {
  var content = ""
  const [convertedContent, setConvertedContent] = useState("");
  const navigate = useNavigate()
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
            navigate("/post/setup")
          }}
          primary
        />
      </div>

      <EditorForm
        content={content}
        setConvertedContent={setConvertedContent}
        toolbarOnFocus
      />
    </form>
  );
};

export default WritePostForm;
