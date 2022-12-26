import Image from "components/utilities/image/Image";
import PropTypes from "prop-types";

const IconStat = ({ icon, stat, onClick }) => {
	return (
		<div className="flex items-center gap-2">
			<Image className="md:w-[1.5vw] w-[2.5vw]" src={icon} onClick={onClick} />
			<span className="text-sm md:text-lg lg:text-xl">{stat}</span>
		</div>
	);
};

IconStat.propTypes = {
	stat: PropTypes.number,
};

export default IconStat;
