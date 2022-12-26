import PostStat from "components/statistic/PostStat";
// import eye from "assets/svg/eye.svg";
// import comment from "assets/svg/comment.svg";
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
        {/* <PostStat
						src={eye}
						alt={"views"}
						quantity={views}
						postType={postType}
					/> */}
        {/* <PostStat
						src={comment}
						alt={"comments"}
						quantity={commentCount}
						postType={postType}
					/> */}
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
