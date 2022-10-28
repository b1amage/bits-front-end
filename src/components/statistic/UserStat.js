import Text from "../utilities/text/Text";
import Title from "../utilities/text/Title";

const UserStat = ({
	quantity,
	name,
	className,
	quantityClassName,
	nameClassName,
}) => {
	return (
		<div className={className}>
			<Title
				children={quantity}
				className={`text-[22px] md:text-3xl lg:!text-4xl 2xl:!text-5xl 2xl:my-4 text-center ${quantityClassName}`}
			/>
			<Text
				children={name}
				className={`text-[11px] md:text-lg lg:!text-2xl 2xl:!text-3xl text-center ${nameClassName}`}
			/>
		</div>
	);
};

export default UserStat;
