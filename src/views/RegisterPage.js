import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

import Container from "components/utilities/container/Container";
import Logo from "components/utilities/image/Logo";
import Input from "components/utilities/form/Input";
import Button from "components/utilities/button/Button";

import CONSTANT from "constant/Constant";
import Text from "../components/utilities/text/Text";

const RegisterPage = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: CONSTANT.INITIAL_VALUE.email,
			username: CONSTANT.INITIAL_VALUE.username,
			password: CONSTANT.INITIAL_VALUE.password,
			confirmPassword: CONSTANT.INITIAL_VALUE.confirmPassword,
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.email, CONSTANT.ERROR.email),
			username: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.username, CONSTANT.ERROR.username),
			password: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.password, CONSTANT.ERROR.password),
			confirmPassword: Yup.string()
				.required(CONSTANT.ERROR.required)
				.oneOf(
					[Yup.ref("password"), null],
					CONSTANT.ERROR.passwordMatch
				)
				.matches(CONSTANT.REGEX.password, CONSTANT.ERROR.password),
		}),
		onSubmit: (values) => {
			localStorage.setItem("registerInfo", JSON.stringify(values));
			navigate("/register/img");
		},
	});

	return (
		<Container className="flex flex-col items-center justify-center min-h-screen">
			<Logo className="mx-auto" />

			<form onSubmit={formik.handleSubmit} className="my-10 form">
				<Input
					fluid
					label="email"
					required
					name="email"
					type="text"
					value={formik.values.email}
					onChange={formik.handleChange}
					err={formik.errors.email}
				/>

				<Input
					fluid
					label="username"
					required
					name="username"
					type="text"
					value={formik.values.username}
					onChange={formik.handleChange}
					err={formik.errors.username}
				/>

				<Input
					fluid
					label="password"
					required
					name="password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					err={formik.errors.password}
				/>

				<Input
					fluid
					label="confirm password"
					required
					name="confirmPassword"
					type="password"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					err={formik.errors.confirmPassword}
				/>

				<Button type="submit" primary fluid className="my-10 md:py-5">
					Sign up
				</Button>
			</form>

			<Text>
				Already have account?{" "}
				<Link to="/login" className="cursor-pointer text-primary-100">
					Sign in
				</Link>
			</Text>
		</Container>
	);
};

export default RegisterPage;
