import Image from "components/utilities/image/Image";
import Avatar from "components/profile/Avatar";
import UserStats from "components/profile/UserStats";
import setting from "assets/svg/setting.svg";
import Container from "components/utilities/container/Container";

const UserInfo = () => {
	return (
		<Container className={"2xl:max-w-full px-8 2xl:px-60"}>
			<Image
				src={setting}
				alt={"setting"}
				imageClassName={`w-[3vw] h-[3vw]`}
				className={`flex justify-end cursor-pointer`}
			/>
			<Avatar />
			<UserStats />
		</Container>
	);
};

export default UserInfo;
