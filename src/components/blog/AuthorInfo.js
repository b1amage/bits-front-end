import Image from "../utilities/image/Image";
import avatar from "../../assets/svg/dummyAva.svg";
import Text from "../utilities/text/Text";

const AuthorInfo = ({ name, readTime, userImg }) => {
	return (
		<div className="flex items-center gap-5">
			<Image
				src={avatar}
				className="overflow-hidden rounded-full h-14 w-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
			/>

			<div>
				<Text className="text-lg md:text-xl lg:text-2xl !font-bold !text-secondary-100">
					Jakob Arcand
				</Text>
				<Text className="text-sm font-thin md:text-lg lg:text-xl text-secondary-20">
					3 min reads
				</Text>
			</div>
		</div>
	);
};

export default AuthorInfo;
