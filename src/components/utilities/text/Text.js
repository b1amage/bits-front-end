import PropTypes from "prop-types";

const Text = ({ children, className }) => {
	return (
		<p
			className={`text-base lg:text-xl xl:text-2xl 2xl:text-3xl leading-[24px] font-medium text-secondary-20 ${className}`}
		>
			{children}
		</p>
	);
};

Text.propTypes = {
	className: PropTypes.string,
};

export default Text;
