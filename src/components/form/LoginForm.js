import Input from "../utilities/form/Input";

const LoginForm = () => {
	return (
		<form className="flex flex-col gap-5 my-10">
			<Input fluid label="email" required name="email" type="text" />
			<Input
				fluid
				label="password"
				required
				name="password"
				type="password"
			/>
		</form>
	);
};

export default LoginForm;
