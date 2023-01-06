import Label from "components/utilities/form/Label";
import Error from "components/utilities/form/Error";
import PropTypes from "prop-types";

const Input = ({
  labelClassName,
  placeholder,
  label,
  required,
  icon,
  type,
  onIconClick,
  value,
  onChange,
  err,
  fluid,
  className,
  name,
}) => {
  return (
    <div className={`flex flex-col ${label && "gap-1 md:gap-2 lg:gap-3"}`}>
      <Label id={label} required={required} className={labelClassName}>
        {label}
      </Label>

      <div className="relative">
        <input
          autoComplete="off"
          className={`w-full px-4 py-3 text-sm transition-all duration-300 outline-none rounded-2xl bg-secondary-50 md:text-base md:px-6 md:py-4 focus:border-primary-100 placeholder:text-secondary-100 ${
            fluid ? "w-full" : "w-1/2"
          } ${className}`}
          type={type}
          placeholder={placeholder}
          id={label}
          name={name || label}
          required={required}
          value={value}
          onChange={onChange}
        />

        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className="absolute -translate-y-1/2 top-1/2 right-5"
          >
            <img
              src={icon}
              alt="icon input"
              className="object-cover w-full h-full"
            />
          </button>
        )}

        {err && <Error fluid>{err}</Error>}
      </div>
    </div>
  );
};

Input.propTypes = {
  labelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onIconClick: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  err: PropTypes.string,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
