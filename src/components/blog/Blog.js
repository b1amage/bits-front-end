import Image from "../utilities/image/Image";
import Title from "../utilities/text/Title";
import Text from "../utilities/text/Text";
import PropTypes from "prop-types";
import defaultImg from "../../assets/img/default.png";

const Blog = ({
	img,
	author,
	likeCount,
	readCount,
	title,
	date,
	className,
}) => {
	return (
		<div
			className={`grid grid-cols-3 gap-4 px-5 py-3 rounded-xl bg-secondary-50 min-h-[120px] max-w-[380px] lg:min-h-[160px] md:py-5 md:px-7 cursor-pointer shadow-md lg:max-w-[420px] ${className}`}
		>
			<div className="flex items-center justify-start">
				<Image
					className="h-full max-h-[100px]"
					src={
						img ||
						`https://images.unsplash.com/photo-1665686304129-a6e2d16923e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80`
					}
				/>
			</div>

			<div className="flex flex-col col-span-2 gap-1">
				<Title className="!text-base leading-5 lg:!text-lg">
					{title}
				</Title>

				<div className="flex items-center justify-between">
					<Text className="!text-sm font-light">
						{readCount} views
					</Text>
					<Text className="!text-sm font-light">
						{likeCount} likes
					</Text>
				</div>

				<div className="flex items-start justify-between">
					<Text className="!text-sm">{author}</Text>
					<Text className="!text-sm font-light">{date}</Text>
				</div>
			</div>
		</div>
	);
};

Blog.propTypes = {
	author: PropTypes.string,
	likeCount: PropTypes.number,
	readCount: PropTypes.number,
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	className: PropTypes.string,
};

Blog.defaultProps = {
	img: defaultImg,
	author: "Anonymous Author",
	likeCount: 0,
	readCount: 0,
	date: "Unknown date",
};

export default Blog;
