import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../components/utilities/container/Container";
import Logo from "../components/utilities/image/Logo";
import Input from "../components/utilities/form/Input";
import Button from "../components/utilities/button/Button";

const RegisterPage = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
					"Please enter a valid email address!"
				),
			username: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^[A-Za-z0-9 ]+$/,
					"Username must not contain special character"
				),
			password: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*].{8,}$/,
					"Password must have at least 8 characters, has at least 1 uppercase, 1 lowercase, 1 digit, 1 special character!"
				),
			confirmPassword: Yup.string()
				.required("Please fill in this field!")
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*].{8,}$/,
					"Password must have at least 8 characters, has at least 1 uppercase, 1 lowercase, 1 digit, 1 special character!"
				),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Container className="flex flex-col items-center justify-center h-screen">
			<Logo className="mx-auto" />

			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col w-full gap-10 my-10"
			>
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
