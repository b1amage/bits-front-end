import Image from "components/utilities/image/Image";
import PropTypes from "prop-types";

const IconStat = ({ icon, stat, onClick }) => {
	return (
		<div className="flex items-center gap-2">
			<Image src={icon} onClick={onClick} />
			<span className="text-sm md:text-lg lg:text-xl">{stat}</span>
		</div>
	);
};

IconStat.propTypes = {
	stat: PropTypes.number,
};

export default IconStat;
