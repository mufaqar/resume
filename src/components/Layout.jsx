import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:flex'>
      <div className='md:w-[60%] px-4 md:px-7 lg:px-12'> {children[0]}</div>
      <div className='md:w-[40%] px-4 md:px-7 lg:px-10 py-9 bg-[#E3E3E3]'> {children[1]}</div>
    </div>
  )
}

export default Container