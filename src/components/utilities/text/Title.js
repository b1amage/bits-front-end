import PropTypes from "prop-types";

const Title = ({ children, className }) => {
  return (
    <h1
      className={`text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-secondary-100 ${className} `}
    >
      {children}
    </h1>
  );
};

Title.propTypes = {
  className: PropTypes.string,
};

export default Title;
