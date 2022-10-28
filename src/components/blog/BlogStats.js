import eye from "../../assets/svg/eye.svg";
import comment from "../../assets/svg/comment.svg";
import like from "../../assets/svg/like.svg";
import IconStat from "../utilities/stat/IconStat";

const BlogStats = ({ viewCount, commentCount, likeCount }) => {
	const stats = [
		{ icon: eye, stat: viewCount || 1234 },
		{ icon: comment, stat: commentCount || 999 },
		{ icon: like, stat: likeCount || 5678 },
	];

	return (
		<div className="flex items-center gap-5">
			{stats.length > 0 &&
				stats.map((item, index) => (
					<IconStat key={index} icon={item.icon} stat={item.stat} />
				))}
		</div>
	);
};

export default BlogStats;
