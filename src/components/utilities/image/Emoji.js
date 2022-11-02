import Image from "components/utilities/image/Image";
import emoji from "assets/svg/emoji.svg";

const Emoji = ({ className, imageClassName }) => {
	return (
		<div className="relative rounded-full">
			<div
				className={`my-11 bg-teriary-purple-20 w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] rounded-full p-8 blur-lg relative ${className}`}
			></div>
			<Image
				className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
				src={emoji}
				imageClassName={`sm:w-[10vw] md:w-[15vw] ${imageClassName}`}
			/>
		</div>
	);
};

export default Emoji;
