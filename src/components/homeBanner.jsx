import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Home_bg from '../../public/images/home_bg.png';

export default function HomeBanner() {
  return (
    <section className="relative bg-white bg-[url('/images/home_bg.png')] bg-contain bg-no-repeat min-h-[600px] bg-pos-right ">
      <div className="grid py-8 lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12 px-4 lg:px-12">
        <div className="mr-auto place-self-center lg:col-span-7 max-w-[700px]">
          <span className="bg-[#E1EFFE] py-1 px-3 rounded-[6px] text-[#1E429F] text-lg font-medium">
            ATS Friendly Resume Service
          </span>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl mt-11">
            자체 구현 ATS와 전문 첨삭가가
            <span className="text-[#1A56DB] ">공고 FIT 레쥬메</span>를
            제작합니다
          </h1>
          <p className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl mt-6 mb-10">
            취업 전문 원어민 첨삭가, 자체 구현 ATS 기술로 중복률 0%, 100%
            여러분만의 공고 맞춤 영어 이력서를 완성합니다.
          </p>
          <Link
            href="#"
            className="inline-flex items-center bg-blue-700 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-none"
          >
            레쥬메 제작
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-none"
          >
            실시간 견적
          </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex "></div>
      </div>
    </section>
  );
}
