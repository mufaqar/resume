import Image from 'next/image';
import React from 'react';
import AboutBg from '../../public/images/aboutBg.png';
import Sociol_proof from '@/components/sociol_proof';
import Link from 'next/link';
import Feature1 from '../../public/images/about2.png';
import Feature2 from '../../public/images/about1.png';
import Feature3 from '../../public/images/about3.png';

const AboutUsModule = () => {
  return (
    <>
      <section className=" bg-[url('/images/about_bg.png')] bg-right bg-no-repeat bg-cover">
        <div className="py-8 px-4 text-center lg:py-16 lg:px-12 ">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-gray-900">
              ATS 친화 레쥬메 제작
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
              ATS(지원자 추적 시스템)는 채용 관리자가 이력서에서 특정 키워드를
              스캔하고 기준에 맞지 않는 항목을 걸러내는 데 도움이 되는
              소프트웨어입니다. *아래는 ATS 작동 방식에 대한 간단한
              다이어그램이며, 중간이 ATS 작동 원리입니다.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src={AboutBg} alt="" />
          </div>
        </div>
      </section>
      <section className="md:px-20 py-24 px-4 items-center">
        <div className="lg:px-12">
          <div className="mb-16">
            <h1 className="leading-tight md:text-4xl text-3xl font-extrabold text-center">
              한국을 포함한 전 세계 고객의 이력서를 제작합니다.
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-16 text-center items-center">
            <Sociol_proof
              title=" 99%"
              content=" 외국계 포춘 5000 기업 기준 99% ATS 사용*"
            />
            <Sociol_proof
              title="80%"
              content="외국계 지원자 서류의 80%가 ATS를 통과하지 못함"
            />
            <Sociol_proof
              title="10%"
              content="지원자의 10%만 ATS 맞춤형 이력서를 제작함"
            />
          </div>
          <div className=" text-center mt-8">
            <Link href="#" className="text-sm font-normal text-center">
              <span className="text-[#1A56DB]">*</span> 출처 recruitee
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white ">
        <div className="py-8 px-4 space-y-12 lg:px-12 lg:space-y-20 sm:py-16">
          <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                ATS 맞춤 레쥬메 제작 필수 사항
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                ATS는 채용 프로세스를 관리하는 소프트웨어 프로그램입니다. 수천
                명의 지원자의 이력서를 분류하여, 채용 공고에 맞는 지원자의
                이력서만 골라 실제 인사 담당자에게 전달합니다. 따라서 우리는
                ATS와 Human 인사 담당자 모두가 만족할 수 있는 “골든 키워드” 가
                포함된 이력서를 제작해야 합니다.
              </p>

              <ul
                role="list"
                className="pt-8 my-7 space-y-5 border-t border-gray-200 "
              >
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC] "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    채용 공고 주요 ‘골든 키워드’에 맞춘 Summary 제작
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    기계가 읽을 수 있는 깔끔하고 잘 포맷팅 된 레쥬메 디자인 사용
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    간결하면서도 명확한 동작 동사 (Action Verb) 사용
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                연구에 따르면 지원자의 이력서 중 약 75%가 ATS 데이터베이스에
                의해 걸러져 담담자에게 전달되지 않습니다. 이것이 바로 ATS 친화형
                레쥬메를 제작해야 하는 이유입니다.
              </p>
            </div>
            <Image
              className="mb-4 w-full lg:mb-0"
              src={Feature1}
              alt="feature image"
            />
          </div>

          <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <Image
              className="mb-4 w-full lg:mb-0"
              src={Feature2}
              alt="feature image"
            />
            <div className="text-gray-500 sm:text-lg ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                자체 기술과 전문 첨삭가가 함께합니다.
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                이지레쥬메는(자회사 Incutech) 마이크로소프트사가 독점 공급하는
                세계 최고의 자연어 처리 (NLP) 인공지능 기술을 레쥬메, 취업 전문
                번역 맞춤으로 튜닝하여 채용 공고의 JD에 맞춤으로 Summary를
                제작하는 기능을 보유하고 있습니다. 이지레쥬메의 고객들이라면
                해당 기능을 최대 5개의 채용 공고에 맞추어 사용하실 수 있습니다.
              </p>

              <ul
                role="list"
                className="pt-8 my-7 space-y-5 border-t border-gray-200 "
              >
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC] "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    인공지능 기술을 이용한 언어 모델을 이력서 전문으로 튜닝하여
                    제작합니다.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC] "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    채용 공고를 분석하여 주요 키워드가 포함된 Summary를
                    제작합니다.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC] "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    프리랜서가 아닌 정규직 원어민 첨삭가가 모든 제작 과정에
                    참여합니다.
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-[#DEF7EC] "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 ">
                    각 직무에 맞는 전문 첨삭가가 배정되어 이력서가 제작됩니다.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
          <div className="mx-auto max-w-screen-md">
            <h2 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-gray-900">
              레쥬메 샘플
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
              이지레쥬메의 AI와 전문 첨삭가가 제작한 ATS 친화 레쥬메 샘플을
              확인하세요!
            </p>
          </div>
          <div className="flex justify-center">
            <Image src={Feature3} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#202632] py-24">
        <div className="text-center lg:px-12">
          <h2 className="leading-tight md:text-4xl text-3xl font-extrabold text-white text-center max-w-[7150px] mx-auto">
            지금 바로 공고 맞춤형 레쥬메를 제작하세요!
          </h2>
          <p className="text-xl font-normal text-white text-center my-6 max-w-[700px] mx-auto">
            대학교 취업 센터, 취업 컨설팅 회사를 위한 대량 이력서 제작 서비스
            원어민 원서 전문가 + AI 기술 융합 서비스를 할인된 가격으로
            경험하세요.
          </p>
          <Link
            href="#"
            className="inline-flex items-center bg-blue-700 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-none"
          >
            지금 바로 제작하기
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUsModule;
