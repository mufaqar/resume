import React from 'react'

const Label = ({children, className}) => {
  return (
    <label className={`font-normal capitalize text-sm text-gray-400 ${className}`}>{children}</label>
  )
}

export default Label