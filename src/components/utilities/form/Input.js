import React from "react";
import Label from "./Label";
import Error from "./Error";

const Input = ({
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
		<div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
			<Label required={required}>{label}</Label>

			<div className="relative">
				<input
					autoComplete="off"
					className={`w-full px-4 py-2 text-sm transition-all duration-300 outline-none rounded-2xl bg-secondary-50 md:text-base md:px-6 md:py-4 focus:border-primary-100 placeholder:text-secondary-100 ${
						fluid ? "w-full" : "w-1/2"
					} ${className}`}
					type={type || "text"} // TODO: Optimize using PropTypes
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

				{err && <Error fluid={fluid}>{err}</Error>}
			</div>
		</div>
	);
};

export default Input;
