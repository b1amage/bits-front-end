import autosize from "autosize";
import React, { useState } from "react";

const TextArea = ({ className, children }) => {
  const [scrollHeight, setScrollHeight] = useState();
  autosize(document.getElementById("write-box"));
  return (
    <textarea
      id="write-box"
      className={`w-full max-h-[70vh] shadow-md outline-none resize-none h-[${scrollHeight}px] box-border rounded-2xl px-6 py-4 ${className}`}
      placeholder={children}
      onChange={(e) => {
        setScrollHeight(e.target.scrollHeight);
      }}
      rows={1}
    ></textarea>
  );
};

export default TextArea;
