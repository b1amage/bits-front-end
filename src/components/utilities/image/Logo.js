import Image from "components/utilities/image/Image";
import logo from "assets/svg/logo.svg";
import PropTypes from "prop-types";

const Logo = ({ className }) => {
	return (
		<Image
			className={`w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 ${className}`}
			alt="blogie logo"
			src={logo}
		/>
	);
};

Logo.propTypes = {
	className: PropTypes.string,
};

export default Logo;
