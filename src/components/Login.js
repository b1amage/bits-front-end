import React from "react";
import Button from "./utilities/button/Button";
import Logo from "./utilities/image/Logo";
import Container from "./utilities/container/Container";
import Input from "./utilities/form/Input";
import Checkbox from "./utilities/form/Checkbox";
import Text from "./utilities/text/Text";
const Login = () => {
	return (
		<Container className="login">
			<Logo className="mx-auto" />
			<form className="flex flex-col gap-5 my-10">
				<Input fluid label="Email" required name="Email" type="text" />
				<Input
					fluid
					label="Password"
					required
					name="Password"
					type="password"
				/>
			</form>
			<div className="flex items-center justify-between">
				<Checkbox label="Remember me?" />
				<Text>Forgot Password?</Text>
			</div>

			<Button primary fluid className="my-10">
				Sign in
			</Button>
			<Text className="text-center my-15">
				Don’t have an account?{" "}
				<span className="text-primary-100">Sign up</span>
			</Text>
		</Container>
	);
};

export default Login;
