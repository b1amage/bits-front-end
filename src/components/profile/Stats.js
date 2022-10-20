import React from 'react'
import stats from '../../content/userStats'
import Title from '../utilities/text/Title'
import Text from '../utilities/text/Text'


const Stats = () => {
  return (
    <div className='inline-flex justify-around my-7 lg:my-12 w-full 2xl:my-24'>
        {stats.map((stat, index) => {
          return (
            <div key={index}>
              <Title children={stat.quantity} className={'text-center 2xl:!text-7xl lg:!text-3xl md:!text-xl 2xl:my-4'} />
              <Text children={stat.name} className={'text-center 2xl:!text-5xl lg:!text-xl md:!text-lg'}/>
            </div>
          )
        })}
    </div>
  )
}

export default Stats