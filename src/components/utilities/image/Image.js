import React from 'react'

export const Image = ({src, alt, className, imageClassName}) => {
  return (
    <div className={`${className} w-full h-auto flex justify-center`}>
        <img src={src} alt={alt} className={`object-contain ${imageClassName}`}/>
    </div>
  )
}
