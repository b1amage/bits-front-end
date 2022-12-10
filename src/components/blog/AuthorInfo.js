import Image from "components/utilities/image/Image";
import Text from "components/utilities/text/Text";
import PropTypes from "prop-types";
import defaultAvatar from "assets/img/defaultAvatar.jpeg";
import { Link } from "react-router-dom";

const AuthorInfo = ({ name, readTime, userImg, authorId }) => {
	return (
		<div className="flex items-center gap-5">
			<Image
				src={userImg}
				className="overflow-hidden !rounded-full h-14 w-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
			/>

			<div>
				<Link to={`/profile/${authorId}`}>
					<Text className="text-lg md:text-xl lg:text-2xl !font-bold !text-secondary-100">
						{name}
					</Text>
				</Link>

				<Text className="text-sm font-thin md:text-lg lg:text-xl text-secondary-20">
					{readTime} min reads
				</Text>
			</div>
		</div>
	);
};

AuthorInfo.propTypes = {
	name: PropTypes.string,
	readTime: PropTypes.number,
};

AuthorInfo.defaultProps = {
	name: "Anonymous Author",
	readTime: 10,
	userImg: defaultAvatar,
};

export default AuthorInfo;
