import edu from "../../../assets/svg/education-icon.svg";
import Image from "./Image";
import Text from "../text/Text";
import { useState } from "react";

const Edu = ({ 
	className,
}) => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(current => !current); //toggle click
  	};
	return (
		<button 
		className="rounded-[25px] focus:outline-none bg-cover
		absolute top-1/2"
		style={{
			backgroundColor: isActive ? '#EBE0FF' : '',
		}}
		onClick={handleClick}
		>
			<Image
				className={`w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 scale-75 ${className}`}
				alt="Education icon"
				src={edu}
			/>
			<Text className="text-justify md:text-center">
				Education
			</Text>
		</button>
	);
};


export default Edu;
