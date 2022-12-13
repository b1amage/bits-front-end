import Image from "components/utilities/image/Image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import daysDifference from "helper/dateDiff";

const CommentCard = ({ comment, onLike }) => {
	let { heartCount, content, user, createdAt } = comment;
	const { avatar, username } = user;

	var currentDate = new Date();
	var createdDate = !createdAt ? new Date() : new Date(createdAt);

	const dateDiff = daysDifference(currentDate, createdDate);
	const currentUser = JSON.parse(localStorage.getItem("user"));

	const likes = comment.likes;
	const idLikes = likes.length > 0 && likes.map((item) => item._id);

	const liked =
		currentUser &&
		idLikes.length > 0 &&
		idLikes.filter((item) => item === currentUser._id);

	return (
		<div className="flex flex-col gap-5 px-5 py-8 border rounded-lg shadow-md border-secondary-50 md:gap-6">
			<div className="flex">
				<div className="flex items-center flex-1 gap-5 md:gap-8">
					<Image
						src={avatar}
						className="w-[50px] h-[50px] !rounded-full"
					/>
					<div>
						<p className="font-bold text-primary-100">
							{username || user.name}
						</p>
						<p className="text-secondary-100">{dateDiff}</p>
					</div>
				</div>

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

			<div className="mt-auto">
				<p className="text-base lg:text-lg">{content}</p>
			</div>
		</div>
	);
};

export default CommentCard;
