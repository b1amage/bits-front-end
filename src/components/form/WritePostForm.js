import React from "react";
import TextArea from "../utilities/textarea/TextArea";
import NavLink from "../navigation/NavLink";
import Input from "../utilities/form/Input";
const WritePostForm = () => {
  return (
    <form className="items-end relative p-4 md:p-8 w-full h-screen flex flex-col">
      <div className="flex gap-5 h-[25vh] items-end justify-end">
        <NavLink to="/draft" className="!p-2">
          {" "}
          Draft{" "}
        </NavLink>
        <Input
          type="submit"
          value="Next"
          className="w-fit bg-none block capitalize !p-2 cursor-pointer transition-all duration-200 rounded text-secondary-100 bg-transparent md:p-0 md:!text-lg hover:text-primary-100 !font-dmSans"
        />
      </div>

      <div className="h-full flex items-end w-full">
        <TextArea className="" children={"Write your story"} />
      </div>
    </form>
  );
};

export default WritePostForm;
