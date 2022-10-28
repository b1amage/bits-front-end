import Image from "../image/Image";

const IconStat = ({ icon, stat }) => {
	return (
		<div className="flex items-center gap-2">
			<Image src={icon} />
			<span className="text-sm md:text-lg lg:text-xl">{stat}</span>
		</div>
	);
};

export default IconStat;
