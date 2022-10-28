import Image from "./Image";
import purple from "../../../assets/svg/purple-blur.svg";

const Purple = ({ className }) => {
	return (
		<Image
			className={`w-30 h-30 md:w-40 md:h-40 lg:w-60 lg:h-60 ${className}`}
			alt="purple background"
			src={purple}
		/>
	);
};

export default Purple;
