import PostList from "components/list/PostList";
import UserInfo from "components/profile/UserInfo";
import Container from "components/utilities/container/Container";

const ProfilePage = () => {
	return (
		<Container className="w-full !pb-0 bg-teriary-gray-20">
			<UserInfo />
			<PostList />
		</Container>
	);
};

export default ProfilePage;
