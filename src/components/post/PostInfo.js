import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'
import PostStats from './PostStats'

const PostInfo = ({title, views, comments, likes, author, time, postType}) => {
  return (
    <div className='w-full'>
        <Title children={title} className={"text-sm md:text-xl 2xl:text-7xl"}/>
        <PostStats title={title} views={views} comments={comments} likes={likes} author={author} time={time} postType={postType}/>
        <Text children={postType == null || postType === "post" ? time : author} className={`text-xs md:text-lg 2xl:text-5xl`}/>
    </div>
  )
}

export default PostInfo