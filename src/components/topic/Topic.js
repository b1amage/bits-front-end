import React from "react";
import Image from "../utilities/image/Image";
import PropTypes from "prop-types";
import Text from "../utilities/text/Text";

const Topic = ({ id, icon, className, isActive, onClick, children }) => {
	return (
		<div
			onClick={onClick}
			id={id}
			className={`w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] cursor-pointer flex flex-col gap-5 items-center justify-center transition-all duration-200 rounded-lg ${
				isActive ? "bg-primary-30" : "hover:bg-purple-50 bg-transparent"
			} ${className}`}
		>
			<Image src={icon} id={id} onClick={onClick} />

			<Text className="!text-base capitalize">{children}</Text>
		</div>
	);
};

Topic.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Topic;
