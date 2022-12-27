import { useParams, Link } from "react-router-dom";
import Container from "components/utilities/container/Container";
import Image from "components/utilities/image/Image";
import errorImg from "assets/svg/error.svg";
import Title from "components/utilities/text/Title";
import Button from "components/utilities/button/Button";

const ErrorPage = () => {
	const { error } = useParams();
	return (
		<Container className="flex flex-col items-center justify-center min-h-screen">
			<Image src={errorImg} alt="error assets" />

			<Title>{error}</Title>
			<Link to="/">
				<Button primary className="my-5 lg:my-10">
					Go to home
				</Button>
			</Link>
		</Container>
	);
};

export default ErrorPage;
