import PropTypes from "prop-types";

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

ScrollContainer.propTypes = {
	className: PropTypes.string,
	vertical: PropTypes.bool,
};

export default ScrollContainer;
