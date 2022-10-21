import React from 'react'
import UserPosts from '../components/list/UserPosts'
import UserInfo from '../components/profile/UserInfo'

const ProfilePage = () => {
  return (
    <div className='bg-teriary-gray w-full inline-block'>
      <UserInfo />
      <UserPosts />
    </div>
  )
}

export default ProfilePage