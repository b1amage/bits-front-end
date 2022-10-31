import PropTypes from "prop-types";
import defaultImg from "../../../assets/img/default.png";

const Image = ({ src, alt, className, imageClassName, animate, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`cursor-pointer rounded-lg overflow-hidden ${className}`}
		>
			<img
				src={src}
				alt={alt}
				className={`object-cover w-full h-full ${
					animate && "transition-all duration-200 hover:scale-110"
				} ${imageClassName}`}
			/>
		</div>
	);
};

Image.propTypes = {
	alt: PropTypes.string,
	className: PropTypes.string,
	imageClassName: PropTypes.string,
	animate: PropTypes.bool,
	onClick: PropTypes.func,
};

Image.defaultProps = {
	src: defaultImg,
};

export default Image;
