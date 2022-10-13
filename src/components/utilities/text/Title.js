import React from 'react'

export const Title = ({title, className}) => {
  return (
    <h1 className={`${className} text-3xl leading-10 font-bold text-secondary-100 my-6`}>{title}</h1>
  )
}
