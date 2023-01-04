import Image from "components/utilities/image/Image";
import PostInfo from "components/post/PostInfo";
import { useNavigate } from "react-router-dom";
import defaultImg from "assets/img/default.png";
const PostCard = ({
  thumbnail,
  title,
  blogId,
  likes,
  author,
  time,
  postType,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "inline-flex gap-5 md:gap-4 lg:gap-10 2xl:gap-20 bg-secondary-50 my-5 2xl:my-16 rounded-2xl p-3 md:p-6 lg:p-10 cursor-pointer"
      }
      onClick={() => navigate(`/blog/${blogId}`)}
    >
      <Image
        src={thumbnail === "default" ? defaultImg : thumbnail}
        alt={"banner"}
        imageClassName={``}
        className={`max-w-[12vw] max-h-[20vh]`}
      />
      <PostInfo
        title={title}
        likes={likes}
        author={author}
        time={time}
        postType={postType}
      />
    </div>
  );
};

export default PostCard;
