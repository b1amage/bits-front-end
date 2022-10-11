import React from "react";

const Error = ({ children, fluid, className }) => {
	return (
		<div
			className={`flex items-center px-4 py-2 my-2 text-red-600 bg-red-600 rounded-full bg-opacity-10 ${
				fluid ? "w-full" : "w-1/2"
			} ${className}`}
		>
			<h3>{children}</h3>
		</div>
	);
};

export default Error;
