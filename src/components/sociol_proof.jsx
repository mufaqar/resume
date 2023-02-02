import Link from 'next/link'
import React from 'react'

export default function Sociol_proof({title, content, link_txt}) {
  return (
    <div className='bg-[#F3F4F6] rounded-lg p-12'>
        <h2 className='leading-tight md:text-5xl text-3xl font-extrabold text-center mb-2'>
       {title}
        </h2>
        <p className='leading-tight text-xl font-semibold text-center mb-2'>
       {content}
        </p>
        <Link href="#" className='text-base font-normal text-center'>
        {link_txt}
        </Link>
    </div>
  )
}
