import React from "react";
import Container from "../components/utilities/container/Container";
import Logo from "../components/utilities/image/Logo";
import Input from "../components/utilities/form/Input";
import Button from "../components/utilities/button/Button";

const RegisterPage = () => {
	return (
		<Container className="flex flex-col items-center justify-center h-screen">
			<Logo className="mx-auto" />

			<form className="flex flex-col w-full gap-10 my-10">
				<Input fluid label="email" required name="email" type="text" />

				<Input
					fluid
					label="username"
					required
					name="username"
					type="text"
				/>

				<Input
					fluid
					label="password"
					required
					name="password"
					type="password"
				/>

				<Input
					fluid
					label="confirm password"
					required
					name="confirmPassword"
					type="password"
				/>
			</form>

			<Button primary fluid class="my-10 md:py-5">
				Sign up
			</Button>
		</Container>
	);
};

export default RegisterPage;
