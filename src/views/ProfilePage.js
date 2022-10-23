import React from 'react'
import PostList from '../components/list/PostList'
import UserInfo from '../components/profile/UserInfo'

const ProfilePage = () => {
  return (
    <div className='bg-teriary-gray w-full inline-block'>
      <UserInfo />
      <PostList />
    </div>
  )
}

export default ProfilePage