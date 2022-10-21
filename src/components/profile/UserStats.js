import React from 'react'
import stats from '../../content/userStats'
import UserStat from '../statistic/UserStat'

const UserStats = () => {
  return (
    <div className='inline-flex justify-around my-7 lg:my-12 w-full 2xl:my-24'>
        {stats.map((stat, index) => {
          return (
            <UserStat key={index} quantity={stat.quantity} name={stat.name} />
          )
        })}
    </div>
  )
}

export default UserStats