import React from 'react'
import PostStat from '../statistic/PostStat'

const PostStats = ({postStats, className}) => {
  return (
    <div className={`${className} flex gap-2 my-2 md:my-4 lg:my-5 xl:my-7 2xl:my-14`}>
        {postStats.map((stat, index) => {
            return (
                <PostStat icon={stat.icon} quantity={stat.quantity} key={index} />
            )
        })}
    </div>
  )
}

export default PostStats