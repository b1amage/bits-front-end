import { useFormik } from 'formik'
import React from 'react'
import WritePostForm from '../components/form/WritePostForm'
import WRITEPOST_CONSTANT from '../constant/WritePostConstant'
import * as Yup from 'yup';

const WritePostPage = () => {
  const formik = useFormik({
    initialValues: {
      content: WRITEPOST_CONSTANT.INITIAL_VALUE.content
    },
    validationSchema: Yup.object({
      content: Yup.string().required(WRITEPOST_CONSTANT.ERROR.required).min(100, WRITEPOST_CONSTANT.ERROR.content)
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="bg-teriary-gray-20 h-screen relative">
      <WritePostForm onSubmit={formik.handleSubmit} onChange={formik.handleChange} value={formik.values.content} err={formik.errors.content} />
    </div>
  )
}

export default WritePostPage