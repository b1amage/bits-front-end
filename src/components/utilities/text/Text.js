import React from 'react'

export const Text = ({text, className}) => {
  return (
    <p className={`${className} text-base leading-5 font-medium text-secondary-20`}>{text}</p>
  )
}
