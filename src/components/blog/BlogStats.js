import comment from "assets/svg/comment.svg";
import like from "assets/svg/like.svg";
import IconStat from "components/utilities/stat/IconStat";
import PropTypes from "prop-types";

const BlogStats = ({ commentCount, likeCount, onLike, large }) => {
  const stats = [
    { icon: comment, stat: commentCount },
    { icon: like, stat: likeCount, onClick: onLike },
  ];

  return (
    <div className="flex items-center gap-5 lg:gap-8">
      {stats.length > 0 &&
        stats.map((item, index) => (
          <IconStat
            onClick={onLike}
            key={index}
            icon={item.icon}
            stat={item.stat}
          />
        ))}
    </div>
  );
};

BlogStats.propTypes = {
  commentCount: PropTypes.number,
  likeCount: PropTypes.number,
};

BlogStats.defaultProps = {
  commentCount: 0,
  likeCount: 0,
};

export default BlogStats;
