import PostList from "components/list/PostList";
import UserInfo from "components/profile/UserInfo";
import Container from "components/utilities/container/Container";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginApi from "api/loginApi";
// import Loading from "components/loading/Loading";
import blogApi from "api/blogApi";
import authorApi from "api/userApi";

const ProfilePage = () => {
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { userId } = useParams();
  const [userBlogs, setUserBlogs] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (loginApi.isLogin() === null) {
      navigate("/login");
    }
    const getUser = async () => {
      const response = await authorApi.getById(userId, navigate);
      console.log(response);
      setUser(response.data.user);
    };
    getUser();

    const getAllUserBlogs = async () => {
      const response = await blogApi.getUserBlogs({
        currentCategory: "",
        currentSearch: "",
      });
      // console.log(response.data);
      setUserBlogs(response.data.results);
      setCount(response.data.results.length);
    };
    getAllUserBlogs();
  }, [navigate, userId]);

  return (
    <Container className="w-full !pb-0 bg-teriary-gray-20">
      <UserInfo user={user} navigate={navigate} userId={userId} />
      <PostList userBlogs={userBlogs} count={count} />
    </Container>
  );
};

export default ProfilePage;
