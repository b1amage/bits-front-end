import Image from "components/utilities/image/Image";
import Title from "components/utilities/text/Title";
import Text from "components/utilities/text/Text";
import PropTypes from "prop-types";
import defaultImg from "assets/img/default.png";
import { useNavigate } from "react-router-dom";
import BlogStats from "components/blog/BlogStats";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import Button from "components/utilities/button/Button";
import blogApi from "api/blogApi";

const Blog = ({
	img,
	author,
	likeCount,
	readCount,
	title,
	date,
	topic,
	className,
	editable,
	blogId,
}) => {
	const navigate = useNavigate();

	// const deleteBlog = async () => {
	// 	const response = await blogApi.deleteBlog(blogId);
	// 	console.log(response);
	// };

	const deleteBlog = () => {
		blogApi.deleteBlog(blogId);
		window.location.reload(true);
	};

	return (
		<div className="flex flex-col flex-1 mr-10 transition-all hover:-translate-y-2 hover:shadow-xl">
			<div
				onClick={() => navigate(`/blog/${blogId}`)}
				className={`grid grid-cols-3 gap-4 px-5 py-3 rounded-xl bg-secondary-50 min-w-[320px] md:min-w-[380px] lg:min-h-[160px] md:py-5 md:px-7 cursor-pointer shadow-md lg:max-w-[420px] ${className}`}
			>
				<div className="flex items-start justify-start">
					<Image
						className="h-full max-h-[100px]"
						src={img || defaultImg}
					/>
				</div>

				<div className="flex flex-col col-span-2 gap-1">
					<Title className="!text-base leading-5 lg:!text-lg text-overflow">
						{title}
					</Title>

					<Title className="!text-sm leading-5 text-overflow">{topic}</Title>

					<div className="flex items-start justify-between flex-1">
						<Text className="!text-sm">{author}</Text>
						<Text className="!text-sm font-light">{date}</Text>
					</div>

					<BlogStats likeCount={likeCount} />
				</div>
			</div>
			{editable && (
				<div className="flex justify-center items-center gap-5 p-4 mt-2 rounded-lg bg-primary-30 max-w-[380px] lg:max-w-[420px]">
					<Button
						onClick={() => navigate(`/blog/edit/${blogId}`)}
						primary
						isRound
						className="!w-[50px] !h-[50px] transition-all duration-300"
					>
						<BsFillPencilFill />
					</Button>
					<Button
						onClick={() => deleteBlog()}
						primary
						isRound
						className="!w-[50px] !h-[50px] transition-all duration-300"
					>
						<BsFillTrashFill />
					</Button>
				</div>
			)}
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
