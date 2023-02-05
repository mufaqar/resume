import React from 'react'

const Container = ({children, className, container, bg}) => {
  return (
    <div className={`md:flex ${container ? 'container mx-auto' : ''}`}>
      <div className='md:w-[56%] px-4 md:px-7 lg:px-12'> {children[0]}</div>
      <div className={`md:w-[44%] ${className} py-9 ${bg ? 'bg-[#E3E3E3]' : ''}`}> {children[1]}</div>
    </div>
  )
}

export default Container