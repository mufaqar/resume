import Link from 'next/link'
import React from 'react'

export default function Sociol_proof() {
  return (
    <div className='bg-[#F3F4F6] rounded-lg p-12'>
        <h2 className='leading-tight text-5xl font-extrabold text-center mb-2'>
        2534+
        </h2>
        <p className='leading-tight text-xl font-semibold text-center mb-2'>
        총 제작 레쥬메
        </p>
        <Link href="#" className='text-base font-normal text-center'>
        2022년 10월 기준 <span className='text-[#1A56DB]'>*</span>
        </Link>
    </div>
  )
}
