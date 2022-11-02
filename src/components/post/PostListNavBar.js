import navPostTypes from "content/navPostTypes";
import NavLink from "components/navigation/NavLink";
import Container from "components/utilities/container/Container";

const PostListNavBar = ({ current, setType }) => {
	return (
		<Container className="inline-flex flex-wrap !py-10 text-secondary-20">
			{navPostTypes.map((navType, index) => {
				return (
					<NavLink
						to={navType.to}
						children={navType.text}
						className={`relative text-xs lg:text-xl xl:text-2xl 2xl:text-3xl leading-[24px] md:text-lg text-center !text-secondary-20 hover:!text-primary-100 font-medium md:p-6 ${
							current === navType.text.toLowerCase() &&
							"!text-primary-100 after:absolute after:w-1 after:h-1 md:after:w-2 md:after:h-2 after:bg-primary-100 after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full"
						}`}
						onClick={() => setType(navType.text)}
						key={index}
					/>
				);
			})}
		</Container>
	);
};

export default PostListNavBar;
