import Text from "components/utilities/text/Text";

const BlogContent = ({ content }) => {
	return (
		<div className="flex flex-col gap-5 my-3 lg:my-8 lg:gap-10">
			{content.length > 0 &&
				content.map((item, index) => (
					<Text
						key={index}
						className={`${
							index === 0 &&
							"first-letter:float-left first-letter:leading-[48px] first-letter:md:!text-[80px] first-letter:md:!leading-[72px] first-letter:lg:!text-[140px] first-letter:lg:!leading-[140px] first-letter:px-1 first-letter:!font-extrabold first-letter:uppercase first-letter:!text-[60px]"
						} !text-black font-medium !text-[14px] text-justify md:!text-2xl lg:!text-4xl lg:!leading-[70px]`}
					>
						{item}
					</Text>
				))}
		</div>
	);
};

export default BlogContent;
