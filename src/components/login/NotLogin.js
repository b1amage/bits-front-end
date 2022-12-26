import Image from "components/utilities/image/Image";
import errorImg from "assets/svg/error.svg";
import Title from "components/utilities/text/Title";
import Button from "components/utilities/button/Button";
import { useNavigate } from "react-router-dom";

const NotLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-[80vh]">
      <Image src={errorImg} alt="error assets" />

      <Title>You haven't logged in yet!</Title>

      <Button primary className="my-5 lg:my-10" onClick={() => navigate("/login")}>
		    Click here to sign in
      </Button>
    </div>
  );
};

export default NotLogin;
