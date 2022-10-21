import React from 'react'
import Text from '../utilities/text/Text'
import Title from '../utilities/text/Title'
import PostStats from './PostStats'

const PostInfo = ({title, stats , time}) => {
  return (
    <div className='w-full'>
        <Title children={title} className={"text-sm md:text-xl 2xl:text-7xl"}/>
        <PostStats postStats={stats} />
        <Text children={time} className={`text-xs md:text-lg 2xl:text-5xl`}/>
    </div>
  )
}

export default PostInfo