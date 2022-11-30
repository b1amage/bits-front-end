// import { useFormik } from "formik";
import React from "react";
// import WritePostForm from "components/form/WritePostForm";
// import WRITEPOST_CONSTANT from "constant/WritePostConstant";
// import * as Yup from "yup";
import Container from "components/utilities/container/Container";
import Edt from "components/editor/Editor";

const WritePostPage = () => {
	// const formik = useFormik({
	// 	initialValues: {
	// 		content: WRITEPOST_CONSTANT.INITIAL_VALUE.content,
	// 	},
	// 	validationSchema: Yup.object({
	// 		content: Yup.string()
	// 			.required(WRITEPOST_CONSTANT.ERROR.required)
	// 			.min(100, WRITEPOST_CONSTANT.ERROR.content),
	// 	}),
	// 	onSubmit: (values) => {
	// 		console.log(values);
	// 	},
	// });

	return (
		<Container className="relative h-screen bg-teriary-gray-20">
			<Edt />
		</Container>
	);
};

export default WritePostPage;
