import React from 'react'
import Image from '../utilities/image/Image'
import Avatar from './Avatar'
import Stats from './Stats'
import setting from '../../assets/svg/setting.svg'
import Container from '../utilities/container/Container'

const UserInfo = () => {
  return (
    <Container className={'2xl:max-w-full w-full'}>
        <Image src={setting} alt={'setting'} imageClassName={`w-[5vw] h-[5vw]`} className={`flex justify-end cursor-pointer`} />
        <Avatar />    
        <Stats />
    </Container>
  )
}

export default UserInfo