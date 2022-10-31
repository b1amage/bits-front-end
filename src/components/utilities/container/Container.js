import PropTypes from "prop-types";

const Container = ({ children, className }) => (
	// page-container: utility class for wrappers (index.css)
	<div className={`page-container ${className}`}>{children}</div>
);

Container.propTypes = {
	className: PropTypes.string,
};

export default Container;
