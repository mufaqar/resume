import React from 'react'

const Text = ({children, className}) => {
  return (
    <p className={`text-base text-[#828BA2] font-light font-roboto ${className}`}>{children}</p>
  )
}

export default Text