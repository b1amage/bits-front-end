import Logo from "components/utilities/image/Logo";
import Container from "components/utilities/container/Container";
import Checkbox from "components/utilities/form/Checkbox";
import Text from "components/utilities/text/Text";
import NavLink from "components/navigation/NavLink";
import LoginForm from "components/form/LoginForm";

const LoginPage = () => {
	return (
		<Container className="flex flex-col justify-center ">
			<Logo className="mx-auto" />

			<LoginForm />

			<div className="flex items-center justify-between">
				<Checkbox
					label="Remember me?"
					labelClassName={"!text-secondary-20"}
				/>
				<NavLink
					to={"/forgot-password"}
					children={"Forgot Password?"}
					className={"!text-primary-100 font-medium"}
				/>
			</div>

			<Text className="flex items-center justify-center gap-3 text-center my-15">
				Don’t have an account?{" "}
				<NavLink
					to={"/register"}
					className="!text-primary-100 !p-0 text-base lg:text-xl xl:text-2xl 2xl:text-3xl leading-[24px] font-medium text-center my-15 flex justify-center gap-3 items-center"
				>
					Sign up
				</NavLink>
			</Text>
		</Container>
	);
};

export default LoginPage;
