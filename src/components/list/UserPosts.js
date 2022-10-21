import React from 'react'
import { NavLink } from 'react-router-dom'
import navPostTypes from '../../content/navPostTypes'
import posts from '../../content/posts'
import PostCard from '../post/PostCard'
import Container from '../utilities/container/Container'

const UserPosts = () => {
  return (
    <div className={`2xl:max-w-full rounded-t-3xl bg-white flex flex-col justify-center md:px-0 px-8`}>
        <Container className=' text-secondary-20 flex gap-5 flex-wrap'>
          {navPostTypes.map((type, index) => {
            return (
              <NavLink to={type.to} children={type.text} className={'text-base lg:text-xl xl:text-2xl 2xl:text-3xl leading-[24px] font-medium text-secondary-20 md:text-lg'} key={index}/>
            )
          })}
        </Container>  
          
        {posts.map((post, index) => {
            return (
                <PostCard thumbnail={post.thumbnail} title={post.title} stats={post.stats} time={post.time} key={index}/>
            )
        })}
    </div>
  )
}

export default UserPosts