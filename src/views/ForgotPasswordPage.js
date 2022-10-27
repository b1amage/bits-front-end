import React from "react";
import ForgotPasswordForm from "../components/form/ForgotPasswordForm";
import Container from "../components/utilities/container/Container";
import Text from "../components/utilities/text/Text";
import Title from "../components/utilities/text/Title";

const ForgotPasswordPage = () => {
	return (
		<Container className="flex flex-col h-screen gap-16 md:justify-evenly">
			<Title className="text-center">Forgot password</Title>
			<Text className="text-center">
				Please enter your registered email addres to receive your
				password reset intruction
			</Text>
			<ForgotPasswordForm />
		</Container>
	);
};

export default ForgotPasswordPage;
