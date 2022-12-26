import PostList from "components/list/PostList";
import UserInfo from "components/profile/UserInfo";
import Container from "components/utilities/container/Container";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginApi from "api/loginApi";
// import Loading from "components/loading/Loading";
import blogApi from "api/blogApi";
import authorApi from "api/userApi";
import Loading from "components/loading/Loading";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { userId } = useParams();
  const [userBlogs, setUserBlogs] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // if (loginApi.isLogin() === null) {
    //   navigate(`/profile/${JSON.parse(localStorage.getItem("user")).userId}`);
    // } else{
    //   navigate("/login", {replace: true})
    // }
    if (loginApi.isLogin() === null || userId === null) {
        navigate(`/login`, {replace: true});
      }
  }, [navigate, userId])

  useEffect(() => {
      const getUser = async () => {
        setLoading(true);
        const response = await authorApi.getById(userId, navigate);
        console.log(response);
        setUser(response.data.user);
        setLoading(false);
      };
      getUser();

      const getAllUserBlogs = async () => {
        setLoading(true);
        const response = await blogApi.getUserBlogs({
          currentCategory: "",
          currentSearch: "",
        });
        // console.log(response.data);
        setUserBlogs(response.data.results);
        setCount(response.data.results.length);
        setLoading(false);
      };
      getAllUserBlogs();
    
  }, [navigate, userId]);

  return (
    <Container className="w-full !pb-0 bg-teriary-gray-20">
      {loading ? (
        <Loading />
      ) : (
        <>
          <UserInfo user={user} navigate={navigate} userId={userId} />
          <PostList userBlogs={userBlogs} count={count} />
        </>
      )}
    </Container>
  );
};

export default ProfilePage;
