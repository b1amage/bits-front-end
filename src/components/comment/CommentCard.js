import Image from "components/utilities/image/Image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillTrashFill, BsPenFill } from "react-icons/bs";
import daysDifference from "helper/dateDiff";

const CommentCard = ({ comment, onLike, onDelete, onUpdate }) => {
  console.log(comment);
  let { heartCount = 0, content, user, createdAt } = comment;
  const { avatar, username, _id } = user;

  var currentDate = new Date();
  var createdDate = !createdAt ? new Date() : new Date(createdAt);

  const dateDiff = daysDifference(currentDate, createdDate);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const likes = comment.likes;
  const idLikes = likes?.length > 0 ? likes.map((item) => item.user._id) : [];

  const liked = idLikes.includes(currentUser.userId);

  return (
    <div className="flex flex-col gap-5 px-5 py-8 border rounded-lg shadow-md border-secondary-50 md:gap-6">
      <div className="flex">
        <div className="flex items-center flex-1 gap-5 md:gap-8">
          <Image
            src={avatar || currentUser.avatar}
            className="w-[50px] h-[50px] !rounded-full"
          />
          <div>
            <p className="font-bold text-primary-100">
              {username || user.name || currentUser.name}
            </p>
            <p className="text-secondary-100">{dateDiff}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {currentUser.userId === _id && (
            <>
              <div className="cursor-pointer">
                <BsPenFill />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  onDelete(comment._id);
                }}
              >
                <BsFillTrashFill />
              </div>
            </>
          )}

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              console.log(comment);
              onLike(comment._id, liked);
            }}
          >
            <p>{heartCount}</p>
            {liked ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-base lg:text-lg">{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
