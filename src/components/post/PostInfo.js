import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'
import PostStats from './PostStats'

const PostInfo = ({title, views, comments, likes, author, time, postType}) => {
  return (
    <div className='flex flex-col w-full break-words'>
        <Title children={title} className={"text-sm md:!text-2xl xl:!text-3xl 2xl:!text-4xl font-bold text-secondary-100 leading-[18px]"}/>
        <PostStats title={title} views={views} comments={comments} likes={likes} author={author} time={time} postType={postType}/>
        <Text children={postType == null || postType === "post" ? time : author} className={`text-[9px] md:text-base lg:text-lg xl:!text-2xl 2xl:text-3xl leading-[24px] font-medium text-secondary-20 h-full flex items-end`}/>
    </div>
  )
}

export default PostInfo