import Image from "components/utilities/image/Image";
import { AiOutlineHeart } from "react-icons/ai";
import daysDifference from "helper/dateDiff";

const CommentCard = ({ comment }) => {
	const { heartCount, content, user, createdAt } = comment;
	const { avatar, username } = user;

	var currentDate = new Date();
	var createdDate = new Date(createdAt);

	const dateDiff = daysDifference(currentDate, createdDate);

	return (
		<div className="flex flex-col gap-5 px-5 py-8 border rounded-lg shadow-md border-secondary-50 md:gap-6">
			<div className="flex">
				<div className="flex items-center flex-1 gap-5 md:gap-8">
					<Image
						src={avatar}
						className="w-[50px] h-[50px] !rounded-full"
					/>
					<div>
						<p className="font-bold text-primary-100">{username}</p>
						<p className="text-secondary-100">{dateDiff}</p>
					</div>
				</div>

				<div className="flex items-center gap-2 cursor-pointer">
					<p>{heartCount}</p>
					<AiOutlineHeart />
				</div>
			</div>

			<div className="mt-auto">
				<p className="text-base lg:text-lg">{content}</p>
			</div>
		</div>
	);
};

export default CommentCard;
