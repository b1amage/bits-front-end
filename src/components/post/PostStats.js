import React from "react";
import PostStat from "../statistic/PostStat";
import eye from "../../assets/svg/eye.svg";
import comment from "../../assets/svg/comment.svg";
import like from "../../assets/svg/like.svg";

const PostStats = ({ views, time, postType, className }) => {
  return (
    <div
      className={`${className} flex h-full gap-3 lg:gap-8 py-4 flex-wrap`}
    >
      {postType == null || postType === "post" ? (
        <>
          <PostStat
            src={eye}
            alt={"views"}
            quantity={views}
            postType={postType}
          />
          <PostStat
            src={comment}
            alt={"comments"}
            quantity={views}
            postType={postType}
          />
          <PostStat
            src={like}
            alt={"likes"}
            quantity={views}
            postType={postType}
          />
        </>
      ) : postType === "latest" ? (
        <PostStat time={time} postType={postType} />
      ) : (
        <>
          <PostStat quantity={views} detail={"viewers"} postType={postType} />
          <PostStat quantity={views} detail={"reads"} postType={postType} />
        </>
      )}
    </div>
  );
};

export default PostStats;
