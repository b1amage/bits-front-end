import React from 'react'
import Image from '../utilities/image/Image'
import background from '../../assets/svg/parallelogram.svg'
import camera from '../../assets/svg/camera.svg'
import avatar from '../../assets/svg/avatar.svg'
import Title from '../utilities/text/Title'

const Avatar = () => {
  return (
    <div className={`relative`}>
        <Image src={background} alt={"background"} imageClassName={``} className={``} />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[30vw] h-[30vw] flex'>
          <Image src={avatar} alt={"avatar"} imageClassName={``} className={`bg-teriary-purple !rounded-full`}/>
          <Image src={camera} alt={'camera'} imageClassName={``} className={`bg-primary-30 w-[10vw] h-[10vw] p-3 sm:p-4 md:p-5 lg:p-8 xl:p-12 2xl:p-16 !rounded-full absolute bottom-0 right-0 cursor-pointer`}/>
        </div>
        <Title children={"Davis Gouse"} className={`text-center text-lg md:!text-2xl lg:!text-3xl 2xl:!text-4xl`} />
    </div>
  )
}

export default Avatar