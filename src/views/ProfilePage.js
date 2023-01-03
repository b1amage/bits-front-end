import PostList from "components/list/PostList";
import UserInfo from "components/profile/UserInfo";
import Container from "components/utilities/container/Container";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import loginApi from "api/loginApi";
// import Loading from "components/loading/Loading";
// import blogApi from "api/blogApi";
import authorApi from "api/userApi";
import Loading from "components/loading/Loading";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const { userId } = useParams();
  const [userBlogs, setUserBlogs] = useState([]);
  const [nextCursor, setNextCursor] = useState()

  useEffect(() => {
    if (loginApi.isLogin() === null || !userId) {
        console.log(userId)
        console.log(loginApi.isLogin())
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

  }, [navigate, userId]);

  return (
    <Container className="w-full !pb-0 2xl:!px-20">
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-teriary-gray-20">
          <UserInfo user={user} navigate={navigate} userId={userId} />
          <PostList userBlogs={userBlogs} userId={userId} setUserBlogs={setUserBlogs} nextCursor={nextCursor} setNextCursor={setNextCursor} />
        </div>
      )}
    </Container>
  );
};

export default ProfilePage;
