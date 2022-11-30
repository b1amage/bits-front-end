import Text from "components/utilities/text/Text";
import Button from "components/utilities/button/Button";
import Image from "components/utilities/image/Image";
import alreadLoginImg from "assets/svg/already-login.svg";
import { Link } from "react-router-dom";

const AlreadyLogin = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-5 min-h-[80vh]">
			<Image src={alreadLoginImg} />
			<Text>You have already login</Text>
			<Button primary>
				<Link to="/">Go to home</Link>
			</Button>
		</div>
	);
};

export default AlreadyLogin;
