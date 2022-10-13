import React from "react";

const Title = ({ children, className }) => {
	return (
		<h1
			className={`text-3xl leading-10 font-bold text-secondary-100 ${className} `}
		>
			{children}
		</h1>
	);
};

export default Title;
