import PropTypes from "prop-types";

const Category = ({ children, id, isActive, className, onClick }) => {
	return (
		<span
			id={id}
			onClick={onClick}
			className={`px-6 py-2 capitalize cursor-pointer hover:bg-primary-100 hover:text-white transition-all duration-200 rounded-3xl text-center text-lg scroll-item ${
				isActive
					? "bg-primary-100 text-white"
					: "bg-secondary-50 text-secondary-100"
			} ${className}`}
		>
			{children}
		</span>
	);
};

Category.propTypes = {
	id: PropTypes.string,
	isActive: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default Category;
