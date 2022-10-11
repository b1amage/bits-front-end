import React from "react";

const button = ({ children, className, primary, fluid, onClick, isRound }) => {
	return (
		<button
			onClick={onClick}
			className={`${fluid && "w-full"} ${className}`}
		>
			{children}
		</button>
	);
};

export default button;
