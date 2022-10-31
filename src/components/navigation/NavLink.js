import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ children, className, to, onClick }) => {
	return (
		<Link
			onClick={onClick}
			to={to}
			className={`block capitalize py-2 pl-3 pr-4 transition-all duration-200 rounded text-secondary-100 md:bg-transparent md:p-0 md:text-lg hover:text-primary-100 ${className}`}
		>
			{children}
		</Link>
	);
};

NavLink.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string,
	onClick: PropTypes.func,
};

NavLink.defaultProps = {
	to: "/",
};

export default NavLink;
