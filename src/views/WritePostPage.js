import React from "react";
import Container from "components/utilities/container/Container";
import WritePostForm from "components/form/WritePostForm";

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
    <Container className="relative h-screen bg-teriary-gray-20 !p-0">
      <WritePostForm />
    </Container>
  );
};

export default WritePostPage;
