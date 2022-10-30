import Container from "../components/utilities/container/Container";
import Title from "../components/utilities/text/Title";
import Text from "../components/utilities/text/Text";
import key from "../assets/svg/key.svg";
import Image from "../components/utilities/image/Image";
import Input from "../components/utilities/form/Input";
import Button from "../components/utilities/button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import CONSTANT from "../constant/Constant";

const ResetPage = () => {
	const formik = useFormik({
		initialValues: {
			newPassword: CONSTANT.INITIAL_VALUE.password,
			confirmPassword: CONSTANT.INITIAL_VALUE.confirmPassword,
		},
		validationSchema: Yup.object({
			newPassword: Yup.string()
				.required(CONSTANT.ERROR.required)
				.matches(CONSTANT.REGEX.password, CONSTANT.ERROR.password),
			confirmPassword: Yup.string()
				.required(CONSTANT.ERROR.required)
				.oneOf(
					[Yup.ref("newPassword"), null],
					CONSTANT.ERROR.passwordMatch
				)
				.matches(CONSTANT.REGEX.password, CONSTANT.ERROR.password),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<Container>
			<div className="flex flex-col gap-4 md:gap-8">
				<Title className="text-center">Reset Password</Title>
				<Text className="text-center">
					Enter your old password and new password below. We’re just
					being extra safe
				</Text>
			</div>

			<Image src={key} className="md:w-1/3 md:mx-auto" />

			<form onSubmit={formik.handleSubmit} className="form">
				<Input
					fluid
					label="new password"
					required
					name="newPassword"
					type="password"
					value={formik.values.newPassword}
					onChange={formik.handleChange}
					err={formik.errors.newPassword}
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
					Reset password
				</Button>
			</form>
		</Container>
	);
};

export default ResetPage;
