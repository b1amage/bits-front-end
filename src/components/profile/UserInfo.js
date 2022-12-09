// import Image from "components/utilities/image/Image";
import Avatar from "components/profile/Avatar";
// import UserStats from "components/profile/UserStats";
// import setting from "assets/svg/setting.svg";
// import Container from "components/utilities/container/Container";
import Button from "components/utilities/button/Button";
import { useNavigate, useParams } from "react-router-dom";
import authenticationApi from "api/authenticationApi";
import { useEffect, useState } from "react";
import authorApi from "api/userApi";

const UserInfo = () => {
  const navigate = useNavigate();
  const {userId} = useParams();
  const [user, setUser] = useState()

  const handleLogout = () => {
    const logout = async () => {
      const response = await authenticationApi.logout(navigate);
      console.log(response);
    };

    logout();
  };

  useEffect(() => {
    const getUser = async() => {
      const response = await authorApi.getById(userId)
      console.log(response)
      setUser(response.data.user)
    }
    getUser()
  }, [userId])

  return (
    <div className={"2xl:max-w-full px-8 2xl:px-60 !py-8"}>
      <div className={`${userId === JSON.parse(localStorage.getItem("user")).userId ? "flex" : "hidden"} flex justify-end gap-5 md:gap-8 lg:gap-10`}>
        <Button onClick={() => navigate(`/profile/edit/${userId}`)} secondary className="transition-all">
          Edit
        </Button>
        <Button onClick={handleLogout} primary className="transition-all">
          Logout
        </Button>
      </div>

      <Avatar avatar={user && user.avatar} username={user && user.username} biography={user && user.biography} />
      {/* <UserStats /> */}
    </div>
  );
};

export default UserInfo;
