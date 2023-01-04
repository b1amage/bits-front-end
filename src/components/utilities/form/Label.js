import PropTypes from "prop-types";

const Label = ({ id, required, className, children, onClick }) => {
  return (
    <label
      onClick={onClick}
      htmlFor={id}
      className={`px-4 font-semibold capitalize md:text-xl ${className}`}
    >
      <span>{children}</span>

      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Label;
