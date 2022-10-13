import React from "react";
import Image from "./Image";
import logo from "../../../assets/svg/logo.svg";

const Logo = () => {
	return (
		<Image
			className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
			alt="blogie logo"
			src={logo}
		/>
	);
};

export default Logo;
