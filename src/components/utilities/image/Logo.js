import Image from "./Image";
import logo from "../../../assets/svg/logo.svg";

const Logo = ({ className }) => {
	return (
		<Image
			className={`w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 ${className}`}
			alt="blogie logo"
			src={logo}
		/>
	);
};

export default Logo;
