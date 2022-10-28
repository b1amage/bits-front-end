import Image from "../utilities/image/Image";
import Avatar from "./Avatar";
import UserStats from "./UserStats";
import setting from "../../assets/svg/setting.svg";
import Container from "../utilities/container/Container";

const UserInfo = () => {
	return (
		<Container className={"2xl:max-w-full px-8"}>
			<Image
				src={setting}
				alt={"setting"}
				imageClassName={`w-[4vw] h-[4vw]`}
				className={`flex justify-end cursor-pointer`}
			/>
			<Avatar />
			<UserStats />
		</Container>
	);
};

export default UserInfo;
