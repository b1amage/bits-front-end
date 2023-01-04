import Avatar from "components/profile/Avatar";
import Button from "components/utilities/button/Button";
import authenticationApi from "api/authenticationApi";
import Loading from "components/loading/Loading";

const UserInfo = ({ loading, user, navigate, userId }) => {
  const handleLogout = () => {
    const logout = async () => {
      const response = await authenticationApi.logout(navigate);
      console.log(response);
    };

    logout();
  };

  return (
    <div className={"2xl:max-w-full px-8 2xl:px-24 !py-8"}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className={`${
              userId === JSON.parse(localStorage.getItem("user"))?.userId
                ? "flex"
                : "hidden"
            } flex flex-col md:flex-row justify-end gap-5 md:gap-8 lg:gap-10`}
          >
            <Button
              onClick={() => navigate(`/profile/edit/${userId}`)}
              secondary
              className="transition-all"
            >
              Edit
            </Button>
            <Button onClick={handleLogout} primary className="transition-all">
              Logout
            </Button>
          </div>

          <Avatar
            avatar={user && user.avatar}
            username={user && user.username}
            biography={user && user.biography}
          />
          {/* <UserStats /> */}
        </>
      )}
    </div>
  );
};

export default UserInfo;
