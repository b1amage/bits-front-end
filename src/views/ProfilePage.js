import PostList from "components/list/PostList";
import UserInfo from "components/profile/UserInfo";
import Container from "components/utilities/container/Container";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginApi from "api/loginApi";

const ProfilePage = () => {
	const navigate = useNavigate();
  	useEffect(() => {
    if (loginApi.isLogin() === null) {
      navigate("/login");
    }
  }, [navigate]);
  
	return (
		<Container className="w-full !pb-0 bg-teriary-gray-20">
			<UserInfo />
			<PostList />
		</Container>
	);
};

export default ProfilePage;
