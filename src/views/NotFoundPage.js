import React from "react";
import Container from "components/utilities/container/Container";
import Image from "components/utilities/image/Image";
import notFound from "assets/svg/not-found.svg";
import Text from "components/utilities/text/Text";
import Button from "components/utilities/button/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<Container className="flex flex-col items-center justify-center min-h-screen">
			<Image src={notFound} />

			<Text className="mb-5 !font-semibold lg:mb-10 lg:!text-2xl">
				Sorry, we cannot find that page
			</Text>

			<Button primary>
				<Link to="/">Go back home</Link>
			</Button>
		</Container>
	);
};

export default NotFoundPage;
