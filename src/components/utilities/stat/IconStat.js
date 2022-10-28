import Image from "../image/Image";

const IconStat = ({ icon, stat }) => {
	return (
		<div className="flex items-center gap-2">
			<Image src={icon} />
			<span className="text-sm">{stat}</span>
		</div>
	);
};

export default IconStat;
