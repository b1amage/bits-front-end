import React from 'react'
import Button from '../utilities/button/Button'

import Input from '../utilities/form/Input'

const ForgotPasswordForm = () => {
  return (
    <form className='flex flex-col md:justify-evenly gap-16'>
        <Input fluid label={"Email"} className={"h-12 lg:h-14 xl:h-16 2xl:h-20"}/>
        <Button children={"Submit"} className={"h-12 lg:h-14 xl:h-16 2xl:h-20"} primary animate/>
    </form>
  )
}

export default ForgotPasswordForm