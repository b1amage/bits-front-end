import React from 'react'
import Container from '../utilities/container/Container'
import Image from '../utilities/image/Image'
import PostInfo from './PostInfo'

const PostCard = ({thumbnail, title, views, comments, likes, author, time, postType}) => {
  return (
    <Container className={"inline-flex gap-5 md:gap-4 h-full lg:gap-10 2xl:gap-20 bg-secondary-50 my-5 2xl:my-16 rounded-2xl p-3 md:p-6 lg:p-10 cursor-pointer"}>
        <Image src={thumbnail} alt={'thumbnail'} imageClassName={`sm:w-[28vw] sm:h-[20vw] xl:w-[15vw] xl:h-[11vw] lg:w-[16vw] lg:h-[12vw]`} className={``}/>
        <PostInfo title={title} views={views} comments={comments} likes={likes} author={author} time={time} postType={postType}/>
    </Container>
  )
}

export default PostCard