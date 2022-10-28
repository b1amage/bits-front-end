import React from "react";
import Text from "../utilities/text/Text";

const BlogContent = ({ content }) => {
	return (
		<div className="flex flex-col gap-5 my-3">
			{content.length > 0 &&
				content.map((item, index) => (
					<Text
						key={index}
						className={`${
							index === 0 &&
							"first-letter:float-left first-letter:leading-[48px] first-letter:px-1 first-letter:!font-extrabold first-letter:uppercase first-letter:!text-[60px]"
						} !text-black font-medium !text-[14px] text-justify`}
					>
						{item}
					</Text>
				))}
		</div>
	);
};

export default BlogContent;
