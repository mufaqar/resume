import Link from 'next/link'
import React from 'react'

export default function Pricing_plan() {
    return (
        <section className="bg-white items-center">
            <div className="py-8 px-4 sm:py-16 lg:px-12">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-gray-900 ">
                        이지레쥬메 전문 서비스
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl ">
                        한국, 미국, 홍콩, 캐나다, 인도 등 전 세계 고객들이 이용하는
                        이지레쥬메의 취업 문서 전문 서비스를 이용해보세요.
                    </p>
                </div>
                <div className="grid gap-8 xl:grid-cols-3 xl:gap-10">
                    <div
                        className="flex flex-col p-6 text-center bg-white rounded-lg border border-gray-200 shadow xl:p-8">
                        <h3 className="mb-4 text-2xl font-medium text-gray-900 ">영어 이력서</h3>
                        <span className="text-5xl font-extrabold text-gray-900 ">13만원</span>
                        <p className="mt-4 mb-1 text-gray-500 text-light ">원서 전문 번역가와 원어민이 제작합니다.
                        </p>
                        <Link href="#"
                            className="inline-flex justify-center items-center font-medium text-blue-700">
                           현재 30000원 할인 가능
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="#"
                            className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-8 ">
                                신청하기
                            </Link>
                        <ul role="list" className="space-y-4 text-left text-gray-900 ">
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path fillRule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>직종별 원어민 전문 첨삭, 번역가 매칭</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>ATS 맞춤형 이력서 제작</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>작업 시 개인 정보 철저히 보호 </span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-500">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                    </path>
                                </svg>
                                <span className="line-through">12시간 / 24시간 급행 가능</span>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="flex flex-col p-6 text-center bg-white rounded-lg border shadow border-blue-700 xl:p-8">
                        <div className="mb-2">
                            <span
                                className="py-1 px-3 text-sm text-blue-700 bg-[#E1EFFE] rounded ">Most
                                popular</span>
                        </div>
                        <h3 className="mb-4 text-2xl font-medium text-gray-900 ">영어 이력서 + 커버레터</h3>
                        <span className="text-5xl font-extrabold text-gray-900 ">18만원</span>
                        <p className="mt-4 mb-1 text-gray-500 text-light">원서 전문 번역가와 원어민이 제작합니다.
                        </p>
                        <Link href="#"
                            className="inline-flex justify-center items-center font-medium text-blue-700">
                            현재 30000원 할인 가능
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-8">
                                신청하기
                            </Link>
                        <ul role="list" className="space-y-4 text-left text-gray-900">
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path fillRule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>직종별 원어민 전문 첨삭, 번역가 매칭</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>ATS 맞춤형 이력서 제작</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>작업 시 개인 정보 철저히 보호 </span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                    </path>
                                </svg>
                                <span>표절율 0%, 맞춤형 커버레터 제작</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>24시간 급행 가능</span>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="flex flex-col p-6 text-center bg-white rounded-lg border border-gray-200 shadow xl:p-8">
                        <h3 className="mb-4 text-2xl font-medium text-gray-900 ">자소서/추천서 번역</h3>
                        <span className="text-5xl font-extrabold text-gray-900 ">200원/단어</span>
                        <p className="mt-4 mb-1 text-gray-500 text-light ">대기업 번역가 출신 원어민 번역가가 전담합니다.
                        </p>
                        <Link href="#"
                            className="inline-flex justify-center items-center font-medium text-blue-700">
                           바로 의뢰하기
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="#"
                            className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-8 ">
                                신청하기
                            </Link>

                        <ul role="list" className="space-y-4 text-left text-gray-900 ">
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path fillRule="evenodd"
                                        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>직종별 원어민 전문 첨삭, 번역가 매칭</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>보통 1일 이내 빠른 전달</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>작업 시 개인 정보 철저히 보호 </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
