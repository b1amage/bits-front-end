import style from "../../../assets/svg/style-icon.svg";
import Image from "./Image";
import Text from "../text/Text";
import { useState } from "react";

const Style = ({ 
	className,
}) => {
	const [isActive, setIsActive] = useState(false);

  	const handleClick = () => {
    	setIsActive(current => !current); //toggle click

  	};
	return (
		<button 
		className="rounded-[25px] focus:outline-none bg-auto"
		style={{
			backgroundColor: isActive ? '#EBE0FF' : '',
		}}
		onClick={handleClick}
		>
			<Image
				className={`w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 scale-75 ${className}`}
				alt="Style icon"
				src={style}
			/>
			<Text className="text-justify md:text-center">
				Style
			</Text>
		</button>
	);
};

export default Style;
