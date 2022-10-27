import React from "react";
import PostList from "../components/list/PostList";
import UserInfo from "../components/profile/UserInfo";

const ProfilePage = () => {
	return (
		<div className="inline-block w-full bg-teriary-gray">
			<UserInfo />
			<PostList />
		</div>
	);
};

export default ProfilePage;
