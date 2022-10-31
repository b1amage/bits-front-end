import React from "react";
import Image from "../utilities/image/Image";

const Topic = ({ id, icon, className, isActive, onClick }) => {
	return (
		<div
			onClick={onClick}
			id={id}
			className={`w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] cursor-pointer flex items-center justify-center transition-all duration-200 rounded-lg ${
				isActive ? "bg-primary-30" : "hover:bg-purple-50 bg-transparent"
			} ${className}`}
		>
			<Image src={icon} id={id} onClick={onClick} />
		</div>
	);
};

export default Topic;
