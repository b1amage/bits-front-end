import React, { useState } from "react";
import dropdown from "assets/svg/dropdown.svg";
import Label from "./Label";
import Text from "../text/Text";
import Error from "./Error";
// import error from "../assets/svg/error.svg";

const Select = ({
  options,
  label,
  required,
  fluid,
  value,
  setItems,
  id,
  className,
  err,
}) => {
  const [showItems, setShowItems] = useState(false);
  const handleOnDropdown = () => {
    setShowItems((state) => !state);
  };
  const handleSelectItem = (item) => {
    setItems(item.value);
    handleOnDropdown();
  };
  return (
    <div
      className={`flex flex-col gap-1 md:gap-2 lg:gap-3 ${
        fluid ? "w-full" : "w-1/2"
      } ${className}`}
    >
      <Label id={id} children={label} required={required} />

      <div className="">
        <div className={`block relative w-full px-4 py-2 transition-all duration-300 bg-transparent border-2 rounded-2xl outline-none appearance-none focus:border-secondary bg-trasparent md:text-base md:px-6 md:py-4 border-primary-100`} onClick={handleOnDropdown}>
            <Text children={value === "" ? "Please select the category" : value} className='!text-sm lg:!text-lg'/>
            {/* <Input placeholder={value} fluid className="bg-transparent !p-0" /> */}
            <div className="absolute top-1/3 right-4">
                <img src={dropdown} alt="" />
            </div>
        </div>

        <div
          className={`${
            showItems ? "block" : "hidden"
          } w-full my-2 transition-all duration-300 border-2 rounded-2xl outline-none appearance-none focus:border-secondary md:text-base  border-primary-100`}
        >
          {options?.length > 0 &&
            options.map((item, index) => (
                <div onClick={() => handleSelectItem(item)} key={index}>
                    <Text children={item.value} className="hover:bg-primary-100 !text-sm lg:!text-lg px-4 py-2 md:px-6 md:py-4 rounded-[11px] border-b-1 border-b-teriary-gray-80 hover:text-white duration-300"/>    
                </div>
            ))}
        </div>
      </div>
      {err && <Error fluid>{err}</Error>}
    </div>
  );
};

export default Select;
