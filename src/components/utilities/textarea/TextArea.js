import autosize from "autosize";
import React, { useState } from "react";
import writePostItems from "../../../content/writePostItem";
import NavLink from "../../navigation/NavLink";

const TextArea = ({ className, children }) => {
  const [scrollHeight, setScrollHeight] = useState();
  autosize(document.getElementById("write-box"));

  return (
    <div className="relative p-4 md:p-8 w-full h-screen flex flex-col">
      <div className="flex gap-5 h-[25vh] items-end justify-end">
        {writePostItems.map((item, index) => {
          return (
            <NavLink
              to={item.to}
              children={item.text}
              key={index}
              className="!p-4"
            />
          );
        })}
      </div>

      <div className="h-full flex items-end">
        <textarea
          id="write-box"
          className={`w-full max-h-[70vh] shadow-md outline-none resize-none h-[${scrollHeight}px] box-border rounded-2xl px-6 py-4 ${className}`}
          placeholder={children}
          onChange={(e) => {
            setScrollHeight(e.target.scrollHeight);
          }}
          rows={1}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
