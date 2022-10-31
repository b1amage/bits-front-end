import Image from "../image/Image";
import PropTypes from "prop-types";

const IconStat = ({ icon, stat }) => {
	return (
		<div className="flex items-center gap-2">
			<Image src={icon} />
			<span className="text-sm md:text-lg lg:text-xl">{stat}</span>
		</div>
	);
};

IconStat.propTypes = {
	stat: PropTypes.number,
};

export default IconStat;
