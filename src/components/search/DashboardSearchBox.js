import Input from "components/utilities/form/Input";
// import Image from "components/utilities/image/Image";
import React from "react";
// import search from "assets/svg/search.svg";
const DashboardSearchBox = ({handleChange, className}) => {
  return (
    <div className={`relative h-full ${className}`}>
      <Input
        onChange={handleChange}
        fluid
        placeholder="Search"
        className="!px-4 md:!px-8 text-xl"
      />
    </div>
  );
};

export default DashboardSearchBox;
