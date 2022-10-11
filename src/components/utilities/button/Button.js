import React from "react";

const button = ({
	children,
	className,
	primary,
	fluid,
	onClick,
	isRound,
	shadow,
	animate,
	disabled,
}) => {
	const buttonHoverAnimationStyles = `hover:-translate-y-2 hover:shadow-2xl ${
		primary
			? "hover:bg-opacity-80"
			: "hover:bg-primary-100 hover:text-white"
	}`;

	const buttonStyles = `text-center px-4 py-3 font-semibold ${
		isRound ? "rounded-full w-[100px] h-[100px]" : "rounded-[30px]"
	} ${
		fluid ? "w-full" : "inline-flex w-[250px] justify-center items-center"
	} ${
		primary
			? "bg-primary-100 text-white"
			: "bg-transparent text-primary-100 border-2 border-primary-100"
	} ${shadow && "shadow-xl"} ${animate && "transition-all duration-200"} ${
		disabled
			? "bg-gray-400 text-white border-none select-none cursor-not-allowed"
			: buttonHoverAnimationStyles
	}`;

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${buttonStyles} ${className}`}
		>
			{children}
		</button>
	);
};

export default button;
