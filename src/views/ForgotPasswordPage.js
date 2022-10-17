import React from 'react'
import ForgotPasswordForm from '../components/form/ForgotPasswordForm'
import Container from '../components/utilities/container/Container'
import Text from '../components/utilities/text/Text'
import Title from '../components/utilities/text/Title'

const ForgotPasswordPage = () => {
  return (
    <Container className={"h-screen flex flex-col md:justify-evenly gap-16"}>
        <Title children={"Forgot password"} className={"text-center"}/>
        <Text children={"Please enter your registered email addres to receive your password reset intruction "} className={"text-center"}/>
        <ForgotPasswordForm />
    </Container>
  )
}

export default ForgotPasswordPage