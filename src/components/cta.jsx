import Link from 'next/link'
import React from 'react'

export default function Cta() {
    return (
        <section className='bg-[#202632] py-24'>
            <div className='text-center lg:px-12'>
                <h2 className='leading-tight md:text-4xl text-3xl font-extrabold text-white text-center max-w-[700px] mx-auto'>
                    대량 레쥬메 제작 & 아카데믹 번역 서비스가 필요하시나요?
                </h2>
                <p className='text-xl font-normal text-white text-center my-6 max-w-[700px] mx-auto'>
                    대학교 취업 센터, 취업 컨설팅 회사를 위한 대량 이력서 제작 서비스
                    원어민 원서 전문가 + AI 기술 융합 서비스를 할인된 가격으로 경험하세요.
                </p>
                <Link href="#" className="inline-flex items-center bg-blue-700 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-none">
                대량 계약 문의하기
                </Link>
            </div>
        </section>
    )
}
