import film from "../../../assets/svg/film-icon.svg";
import Image from "./Image";
import Text from "../text/Text";
import { useState } from "react";

const Film = ({ 
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
				alt="Film icon"
				src={film}
			/>
			<Text className="text-justify md:text-center">
				Film
			</Text>
		</button>
	);
};

export default Film;
