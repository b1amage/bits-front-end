import React from "react";
import navPostTypes from "../../content/navPostTypes";
import NavLink from "../navigation/NavLink";
import Container from "../utilities/container/Container";

const PostListNavBar = ({ current }) => {
	return (
		<Container className="inline-flex flex-wrap text-secondary-20">
			{navPostTypes.map((navType, index) => {
				return (
					<NavLink
						to={navType.to}
						children={navType.text}
						className={`text-xs lg:text-xl xl:text-2xl 2xl:text-3xl leading-[24px] md:text-lg text-center !text-secondary-20 hover:!text-primary-100 font-medium md:p-6 ${
							current === navType.text.toLowerCase() &&
							"bg-slate-600"
						}`}
						key={index}
					/>
				);
			})}
		</Container>
	);
};

export default PostListNavBar;
