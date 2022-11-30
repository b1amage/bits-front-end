import React from "react";
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
			<Image src={errorImg} />

			<Title>{error}</Title>

			<Button primary className="my-5 lg:my-10">
				<Link>Go to home</Link>
			</Button>
		</Container>
	);
};

export default ErrorPage;
