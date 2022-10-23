import React from "react";
import Image from "./Image";
import emoji from "../../../assets/svg/emoji.svg";

const Emoji = ({ className }) => {
	return (
		<Image
			className={`w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 scale-75 ${className}`}
			alt="yay emoji"
			src={emoji}
		/>
	);
};

export default Emoji;
