import { useState } from "react";
import Label from "./Label";
import { AiOutlineCheck } from "react-icons/ai";
import PropTypes from "prop-types";

const Checkbox = ({
	label,
	labelClassName,
	value,
	onChange,
	className,
	name,
}) => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<div className="flex items-center gap-1 md:gap-2">
			<div className="relative w-6 h-6">
				<input
					type="checkbox"
					name={name}
					id={label}
					className={`appearance-none outline-none cursor-pointer w-6 h-6 ${
						isChecked ? "bg-primary-100" : "bg-gray-100"
					}  rounded border-gray-300 focus:ring-primary-100 focus:ring-2 ${className}`}
					value={value}
					onChange={onChange}
					onClick={() => setIsChecked((prev) => !prev)}
				/>

				<AiOutlineCheck
					onClick={() => setIsChecked(false)}
					className={`absolute z-10 font-semibold text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  ${
						isChecked ? "block" : "hidden"
					} `}
				/>
			</div>

			<Label
				className={labelClassName}
				id={label}
				onClick={() => setIsChecked((prev) => !prev)}
			>
				{label}
			</Label>
		</div>
	);
};

Checkbox.propTypes = {
	label: PropTypes.string,
	labelClassName: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
	name: PropTypes.string,
};

export default Checkbox;
