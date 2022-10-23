import React from "react";

const ScrollContainer = ({ children, vertical, className }) => {
	return (
		<div
			className={`scrollbar-hide flex gap-2 py-4 snap-mandatory snap-x scroll-smooth ${
				vertical ? "overflow-y-scroll" : "overflow-x-scroll"
			} ${className}`}
		>
			{children}
		</div>
	);
};

export default ScrollContainer;
