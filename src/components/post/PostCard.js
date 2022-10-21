import React from 'react'
import Container from '../utilities/container/Container'
import Image from '../utilities/image/Image'
import PostInfo from './PostInfo'

const PostCard = ({thumbnail, title, stats, time}) => {
  return (
    <Container className={"inline-flex gap-5 lg:gap-10 2xl:gap-20 bg-secondary-50 my-5 2xl:my-16 rounded-3xl 2xl:max-w-full"}>
        <Image src={thumbnail} alt={'thumbnail'} imageClassName={``} className={`w-1/3 h-full`}/>
        <PostInfo title={title} stats={stats} time={time}/>
    </Container>
  )
}

export default PostCard