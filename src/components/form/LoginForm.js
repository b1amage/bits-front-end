import Input from "components/utilities/form/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import CONSTANT from "constant/Constant";
import Button from "components/utilities/button/Button";

const LoginForm = () => {
	const formik = useFormik({
		initialValues: {
			username: CONSTANT.INITIAL_VALUE.username,
			password: CONSTANT.INITIAL_VALUE.password,
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.username, CONSTANT.ERROR.username),
			password: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.password, CONSTANT.ERROR.password),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit} className="my-10 form">
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

			<Button primary fluid className="my-10">
				Sign in
			</Button>
		</form>
	);
};

export default LoginForm;
