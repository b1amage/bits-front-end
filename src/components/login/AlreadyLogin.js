import Text from "components/utilities/text/Text";
import Button from "components/utilities/button/Button";
import Image from "components/utilities/image/Image";
import alreadLoginImg from "assets/svg/already-login.svg";
import { Link } from "react-router-dom";
import authenticationApi from "api/authenticationApi";
import { useNavigate } from "react-router-dom";

const AlreadyLogin = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		const logout = async () => {
			const response = await authenticationApi.logout(navigate);
			console.log(response);
		};

		logout();
	};

	return (
		<div className="flex flex-col items-center justify-center gap-5 min-h-[80vh]">
			<Image src={alreadLoginImg} />
			<Text>You have already login</Text>

			<div className="flex gap-5 md:gap-8 lg:gap-10">
				<Button
					onClick={handleLogout}
					secondary
					className="transition-all"
				>
					Logout
				</Button>
				<Button primary className="transition-all">
					<Link to="/">Go to home</Link>
				</Button>
			</div>
		</div>
	);
};

export default AlreadyLogin;
