import Text from "components/utilities/text/Text";
import Title from "components/utilities/text/Title";
import PostStats from "components/post/PostStats";

const PostInfo = ({
	title,
	views,
	comments,
	likes,
	author,
	time,
	postType,
}) => {
	return (
		<div className="flex flex-col w-full break-words">
			<Title
				children={title}
				className={
					"text-sm sm:text-lg md:!text-xl xl:!text-xl 2xl:!text-4xl font-bold text-secondary-100 leading-[18px]"
				}
			/>
			<PostStats
				title={title}
				views={views}
				comments={comments}
				likes={likes}
				author={author}
				time={time}
				postType={postType}
			/>
			<Text
				children={
					postType == null || postType === "post" ? time : author
				}
				className={`text-[9px] sm:!text-sm md:!text-base 2xl:!text-xl leading-[24px] font-medium text-secondary-20 h-full flex items-end`}
			/>
		</div>
	);
};

export default PostInfo;
