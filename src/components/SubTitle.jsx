import React from 'react'

const SubTitle = ({children, className}) => {
  return (
    <h3 className={`font-semibold text-xl text-gray-900 font-roboto ${className}`}>{children}</h3>
  )
}

export default SubTitle