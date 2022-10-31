import gaming from "../../../assets/svg/gaming-icon.svg";
import Image from "./Image";
import Text from "../text/Text";
import { useState } from "react";

const Gaming = ({ 
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
				alt="Gaming icon"
				src={gaming}
			/>
			<Text className="text-justify md:text-center">
				Gaming
			</Text>
		</button>
	);
};

export default Gaming;
