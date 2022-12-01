import Label from "components/utilities/form/Label";
import Error from "components/utilities/form/Error";
import autosize from "autosize";

const TextArea = ({
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
	id,
}) => {
	autosize(document.getElementById(id));
	return (
		<div className={`flex flex-col ${label && "gap-1 md:gap-2 lg:gap-3"}`}>
			<Label id={label} required={required} className={labelClassName}>
				{label}
			</Label>

			<div className="relative">
				<textarea
					autoComplete="off"
					className={`w-full px-8 py-5 text-sm transition-all duration-300 outline-none rounded-2xl bg-secondary-50 md:text-base md:px-6 md:py-4 focus:border-primary-100 placeholder:text-secondary-100 ${
						fluid ? "w-full" : "w-1/2"
					} ${className}`}
					type={type}
					placeholder={placeholder}
					id={id || label}
					name={name || label}
					required={required}
					value={value}
					onChange={onChange}
				/>

				{icon && (
					<button
						type="button"
						onClick={onIconClick}
						className="absolute bottom-0 -translate-y-1/2 right-1"
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

export default TextArea;
