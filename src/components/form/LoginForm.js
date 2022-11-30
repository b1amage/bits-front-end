import Input from "components/utilities/form/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CONSTANT from "constant/Constant";
import Button from "components/utilities/button/Button";
import loginApi from "api/loginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "components/utilities/form/Error";

const LoginForm = () => {
	const navigate = useNavigate();
	const [error, setError] = useState(); 

	const formik = useFormik({
		initialValues: {
			email: CONSTANT.INITIAL_VALUE.email,
			password: CONSTANT.INITIAL_VALUE.password,
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.email, CONSTANT.ERROR.email),
			password: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.password, CONSTANT.ERROR.password),
		}),
		onSubmit: (values) => {
			console.log(values);
			loginApi.login(values, navigate, setError);
		},
	});
	return (
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
				label="password"
				required
				name="password"
				type="password"
				value={formik.values.password}
				onChange={formik.handleChange}
				err={formik.errors.password}
			/>

			{error && <Error children={error} className="!w-full"/>}

			<Button type="submit" primary fluid className="my-10">
				Sign in
			</Button>
		</form>
	);
};

export default LoginForm;
