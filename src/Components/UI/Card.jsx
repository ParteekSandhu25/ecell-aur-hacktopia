import React from 'react'

const Card = ({ children, className }) => {
  return (
    <div className={`${className} border border-gray-300 p-2 w-[150px] flex-wrap rounded-md hover:shadow-xl`}>{children}</div>
  )
}

export default Card;