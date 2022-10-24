import React from 'react'
import Image from '../utilities/image/Image'
import Avatar from './Avatar'
import UserStats from './UserStats'
import setting from '../../assets/svg/setting.svg'
import Container from '../utilities/container/Container'

const UserInfo = () => {
  return (
    <Container className={''}>
        <Image src={setting} alt={'setting'} imageClassName={`w-[4vw] h-[4vw]`} className={`flex justify-end cursor-pointer`} />
        <Avatar />    
        <UserStats />
    </Container>
  )
}

export default UserInfo