// import Image from "components/utilities/image/Image";
import Avatar from "components/profile/Avatar";
// import UserStats from "components/profile/UserStats";
// import setting from "assets/svg/setting.svg";
import Container from "components/utilities/container/Container";
import Button from "components/utilities/button/Button";
import { useNavigate } from "react-router-dom";
import authenticationApi from "api/authenticationApi";

const UserInfo = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const logout = async () => {
      const response = await authenticationApi.logout(navigate);
      console.log(response);
    };

    logout();
  };
  return (
    <Container className={"2xl:max-w-full px-8 2xl:px-60 !py-8"}>
      <div className="flex justify-end gap-5 md:gap-8 lg:gap-10">
        <Button secondary className="transition-all">
          Edit
        </Button>
        <Button onClick={handleLogout} primary className="transition-all">
          Logout
        </Button>
      </div>

      <Avatar avatar={JSON.parse(localStorage.getItem("user")).avatar} username={JSON.parse(localStorage.getItem("user")).name} />
      {/* <UserStats /> */}
    </Container>
  );
};

export default UserInfo;
