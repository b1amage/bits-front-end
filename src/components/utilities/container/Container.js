import PropTypes from "prop-types";

const Container = ({ children, className }) => (
  <div className={`page-container ${className}`}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
