import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'

const UserStat = ({quantity, name, className, quantityClassName, nameClassName}) => {
  return (
    <div className={className}>
        <Title children={quantity} className={`text-lg md:text-xl xl:!text-3xl 2xl:!text-7xl 2xl:my-4 text-center ${quantityClassName}`} />
        <Text children={name} className={`md:text-lg 2xl:!text-5xl text-center ${nameClassName}`}/>
    </div>
  )
}

export default UserStat