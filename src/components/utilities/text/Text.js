import React from "react";

const Text = ({ children, className }) => {
	return (
		<p
			className={`text-base leading-[24px] font-medium text-secondary-20 ${className}`}
		>
			{children}
		</p>
	);
};

export default Text;
