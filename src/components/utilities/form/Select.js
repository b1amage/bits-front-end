import React, { useState } from "react";
import dropdown from "assets/svg/dropdown.svg";
import Label from "./Label";
import Text from "../text/Text";
// import error from "../assets/svg/error.svg";

const Select = ({
  options,
  label,
  required,
  fluid,
  value,
  setItems,
  id,
}) => {
    const [showItems, setShowItems] = useState(false)
    const handleOnDropdown = () => {
        setShowItems(state => !state)
    }
    const handleSelectItem = (item) => {
        setItems(item.value)
        handleOnDropdown()
    }
  return (
    <div
      className={`flex lg:space-y-4 flex-col space-y-2 ${
        fluid ? "w-full" : "w-1/2"
      }`}
    >
      <Label id={id} children={label} required={required} />

      <div className="">
        <div className={`block relative w-full px-4 py-2 transition-all duration-300 bg-transparent border-2 rounded-full outline-none appearance-none focus:border-secondary bg-trasparent md:text-base md:px-6 md:py-4 border-primary-100`} onClick={handleOnDropdown}>
            <Text children={value} />
            <div className="absolute top-1/3 right-4">
                <img src={dropdown} alt="" />
            </div>
        </div>
        
        <div className={`${showItems ? "block" : "hidden"} w-full my-2 transition-all duration-300 bg-transparent border-2 rounded-xl outline-none appearance-none focus:border-secondary bg-trasparent md:text-base  border-primary-100`}>
            {options?.length > 0 &&
            options.map((item, index) => (
                <div onClick={() => handleSelectItem(item)} key={index}>
                    <Text children={item.value} className="hover:bg-primary-100 px-4 py-2 md:px-6 md:py-4 rounded-[11px] border-b-1 border-b-teriary-gray-80 hover:text-white duration-300"/>    
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
