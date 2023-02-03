import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 ">
            <div className="p-4 py-6 lg:px-12 md:p-8 lg:p-16">
                <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:space-y-0">
                    <address className="not-italic">
                        <p className="mb-6 text-sm font-semibold text-gray-900 uppercase ">회사 정보</p>
                        <p className="mb-3 text-gray-500 ">
                            이지레쥬메 글로벌 | Incutech LLC
                            서울특별시 강남구 테헤란로7길 22 과학기술회관 9층
                        </p>
                        <ul className="space-y-3 text-gray-500 ">
                            <li className="flex items-center">
                                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                        clipRule="evenodd"></path>
                                </svg>
                                사업자번호: <Link href="tel:830-87-02676">
                                    830-87-02676
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                이메일: <Link href="mailto:easyresume.submit@outlook.com " className="ml-2 hover:underline">easyresume.submit@outlook.com </Link>
                            </li>
                        </ul>
                    </address>
                    <address className="not-italic">
                        <p className="mb-6 text-sm font-semibold text-gray-900 uppercase ">사이트맵</p>
                        <p className="mb-3 text-gray-500 max-w-[175px]">
                            이지레쥬메 홈페이지
                            영어 이력서 실시간 신청
                            자기소개서, 추천서 번역
                            영문 이력서 제작하기
                        </p>
                    </address>
                    <address className="not-italic">
                        <p className="mb-6 text-sm font-semibold text-gray-900 uppercase ">바로가기</p>
                        <p className="mb-3 text-gray-500 max-w-[127px]">
                            실시간 상담
                            네이버 공식 블로그
                            이지레쥬메 블로그
                        </p>
                    </address>
                </div>
                <div className="items-center mt-16 text-center">
                    <span className="text-base font-normal text-gray-500 ">
                    © 2022 Easyresume Korea. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
