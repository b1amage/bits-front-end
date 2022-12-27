import Image from "components/utilities/image/Image";
import PropTypes from "prop-types";

const IconStat = ({ icon, stat, onClick, large }) => {
  return (
    <div
      className={`flex items-center gap-2 transition-all duration-300 cursor-pointer hover:drop-shadow-md hover:-translate-y-2`}
    >
      <Image
        src={icon}
        onClick={onClick}
        className={`${large ? "w-8 h-8" : "w-4 h-4"}`}
      />
      <span className="text-sm md:text-lg lg:text-xl">{stat}</span>
    </div>
  );
};

IconStat.propTypes = {
  stat: PropTypes.number,
};

export default IconStat;
