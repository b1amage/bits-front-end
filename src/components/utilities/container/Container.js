const Container = ({ children, className }) => (
	// page-container: utility class for wrappers (index.css)
	<div className={`page-container ${className}`}>{children}</div>
);

export default Container;
