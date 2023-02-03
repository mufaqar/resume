import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Feature from '../../public/images/feature.png';

export default function Features() {
    return (
        <section className="bg-white">
            <div
                className="gap-8 items-center py-8 px-4 lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-12">
                <Image className="mb-4 w-full lg:mb-0 rounded-lg"
                    src={Feature}
                    alt="feature image" />
                <div className="">
                    <h2 className="leading-tight md:text-4xl text-3xl font-extrabold">
                        ATS 친화형 레쥬메를 제작 해야 하는 이유
                    </h2>
                    <p className="mb-8 text-gray-500 text-xl font-normal">
                        ATS는 채용 프로세스를 관리하는 소프트웨어 프로그램입니다. 수천 명의 지원자의 이력서를 분류하여, 채용 공고에 맞는 지원자의 이력서만 골라 실제 인사 담당자에게 전달합니다.
                    </p>
                    <div className="py-8 mb-6 border-t border-b border-gray-200 ">
                        <div className="flex">
                            <div
                                className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-[#E1EFFE] shrink-0">
                                <svg className="w-5 h-5 text-[#1C64F2]" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900">
                                    외국계 기업의 90%는 ATS를 사용합니다.
                                </h3>
                                <p className="mb-2 font-light text-gray-500">
                                    평균적으로 각 외국계 회사 채용 공고에 250명의 지원자가 있으며, 때로는 수천 명 이상이 되기도 합니다. 이지레쥬메는 지원자의 이력서가 수많은 지원자 속에서 돋보이도록 ATS & 휴먼 맞춤형 레쥬메를 제작합니다.
                                </p>
                                <Link href="#"
                                    className="inline-flex items-center text-[#1C64F2]">
                                    Learn more
                                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-8">
                            <div
                                className="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full shrink-0">
                                <svg className="w-5 h-5 text-purple-600" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 ">
                                    75% 이상의 레쥬메는 사람에게 전달 조차 되지 않습니다.
                                </h3>
                                <p className="mb-2 font-light text-gray-500">
                                    연구에 따르면 지원자의 이력서 중 약 75%가 ATS 데이터베이스에 의해 걸러져 담담자에게 전달되지 않습니다. 이것이 바로 ATS 친화형 레쥬메를 제작해야 하는 이유입니다.
                                </p>
                                <Link href="#"
                                    className="inline-flex items-center text-[#1C64F2]">
                                    Learn more
                                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex pt-8">
                            <div
                                className="flex justify-center items-center mr-4 w-8 h-8 bg-teal-100 rounded-full shrink-0">
                                <svg className="w-5 h-5 text-teal-600" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-gray-900 ">
                                    ATS 프로그램, 인사 담당자 모두 선호하는 레쥬메 제작.
                                </h3>
                                <p className="mb-2 font-light text-gray-500">
                                    프로그램은 인공지능이 이해합니다. 이지레쥬메는 AI NLP 기술로 공고를 분석하고 최적의 Summary를 제작합니다. 이후 전문 첨삭가가 채용 담당자의 입장에서 손수 이력서를 제작하여 AI, 휴먼 모두 선호할 수 있는 레쥬메를 제작합니다.
                                </p>
                                <Link href="#"
                                    className="inline-flex items-center text-[#1C64F2]">
                                    Learn more
                                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
