import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../components/utilities/container/Container";
import Logo from "../components/utilities/image/Logo";
import Input from "../components/utilities/form/Input";
import Button from "../components/utilities/button/Button";

import REGISTER_CONSTANT from "../constant/RegisterConstant";

const RegisterPage = () => {
	const formik = useFormik({
		initialValues: {
			email: REGISTER_CONSTANT.INITIAL_VALUE.email,
			username: REGISTER_CONSTANT.INITIAL_VALUE.username,
			password: REGISTER_CONSTANT.INITIAL_VALUE.password,
			confirmPassword: REGISTER_CONSTANT.INITIAL_VALUE.confirmPassword,
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required(REGISTER_CONSTANT.ERROR.required)
				.matches(
					REGISTER_CONSTANT.REGEX.email,
					REGISTER_CONSTANT.ERROR.email
				),
			username: Yup.string()
				.required(REGISTER_CONSTANT.ERROR.required)
				.matches(
					REGISTER_CONSTANT.REGEX.username,
					REGISTER_CONSTANT.ERROR.username
				),
			password: Yup.string()
				.required(REGISTER_CONSTANT.ERROR.required)
				.matches(
					REGISTER_CONSTANT.REGEX.password,
					REGISTER_CONSTANT.ERROR.password
				),
			confirmPassword: Yup.string()
				.required(REGISTER_CONSTANT.ERROR.required)
				.oneOf(
					[Yup.ref("password"), null],
					REGISTER_CONSTANT.ERROR.passwordMatch
				)
				.matches(
					REGISTER_CONSTANT.REGEX.password,
					REGISTER_CONSTANT.ERROR.password
				),
		}),
		onSubmit: (values) => {
			console.log(values);
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

				<Button type="submit" primary fluid class="my-10 md:py-5">
					Sign up
				</Button>
			</form>
		</Container>
	);
};

export default RegisterPage;
