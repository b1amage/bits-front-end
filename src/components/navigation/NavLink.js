import { Link } from "react-router-dom";

const NavLink = ({ children, className, to }) => {
	return (
		<Link
			to={to}
			className={`block capitalize py-2 pl-3 pr-4 transition-all duration-200 rounded text-secondary-100 md:bg-transparent md:p-0 md:text-lg hover:text-primary-100 ${className}`}
		>
			{children}
		</Link>
	);
};

export default NavLink;
