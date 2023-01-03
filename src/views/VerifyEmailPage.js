import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import authenticationApi from "../api/authenticationApi";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const VerifyEmailPage = () => {
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const loginInfo = await authenticationApi.verifyToken(query);

      console.log(loginInfo);
      navigate("/successful");
    };

    verifyToken();
  }, [query, navigate]);

  return <div className="page-container"></div>;
};

export default VerifyEmailPage;
