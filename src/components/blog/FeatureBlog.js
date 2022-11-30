import Image from "components/utilities/image/Image";
import Title from "components/utilities/text/Title";
import PropTypes from "prop-types";
import defaultAvatar from "assets/img/defaultAvatar.jpeg";
import { useNavigate } from "react-router-dom";

const FeatureBlog = ({
	className,
	userAvatar,
	name,
	readTime,
	title,
	blogId,
}) => {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/blog/${blogId}`)}
			className={`w-[90%] min-h-[150px] rounded-3xl bg-white shadow-lg px-6 py-3 flex flex-col gap-4 ${className}`}
		>
			<div className="flex items-center gap-3">
				<Image
					className="!rounded-full w-[50px] h-[50px]"
					src={userAvatar}
					alt="user avatar"
				/>

				<div className="cursor-pointer">
					<h3 className="text-lg font-semibold text-secondary-100">
						{name}
					</h3>
					<p className="font-light text-secondary-20">
						{readTime} mins read
					</p>
				</div>
			</div>

			<Title className="text-lg leading-tight md:!text-xl text-overflow">
				{title}
			</Title>
		</div>
	);
};

FeatureBlog.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	readTime: PropTypes.number,
	title: PropTypes.string.isRequired,
};

FeatureBlog.defaultProps = {
	userAvatar: defaultAvatar,
	readTime: 10,
	name: "Anonymous Author",
};

export default FeatureBlog;
