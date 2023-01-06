import PostStat from "components/statistic/PostStat";
import like from "assets/svg/like.svg";

const PostStats = ({
  views,
  commentCount,
  heartCount,
  time,
  postType,
  className,
}) => {
  return (
    <div
      className={`${className} flex h-full gap-2 lg:gap-8 md:py-2 flex-wrap`}
    >
      <>
        <PostStat
          src={like}
          alt={"likes"}
          quantity={heartCount}
          postType={postType}
        />
      </>
    </div>
  );
};

export default PostStats;
