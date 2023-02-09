import { SubTitle, Text } from "@/components/imports";
import React, { useState } from "react";

const ServiceResumeModule = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDiscount, setSelectedDiscount] = useState(0);
  const [selectedExpressOpt, setSelectedExpressOpt] = useState(0);
  const [selectedPaymentOpt, setSelectedPaymentOpt] = useState(0);
  const SelectService = (id) => {
    setSelectedService(id);
  };
  return (
    <>
      <section className="container px-4 mx-auto md:flex gap-10">
        <section className="mb-10 md:w-[65%]">
          <h1 className="font-bold text-[32px] mt-10 font-apple-sd">
            Resume Service Checkout
          </h1>
          <Text className="mt-4">
            Please select service type and discount offer, express option
          </Text>
          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Resume Service</SubTitle>
            <div className="flex md:flex-row flex-col gap-4 mt-6">
              {[
                {
                  title:"Resume",
                  info: "원서 전문 번역가 원어민 교정(영미권) 이력서 디자인 채용 공고 맞춤형 제작",
                  badge: "인공지능 작성 도우미"
                },
                {
                  title:"Resume + Cover Letter",
                  info: "원서 전문 번역가 원어민 교정(영미권) 이력서 디자인 채용 공고 맞춤형 제작",
                  badge: "인공지능 작성 도우미"
                },
                {
                  title:"Cover Letter",
                  info: "원서 전문 첨삭가 원어민 교정(영미권) 커버레터 디자인 채용 공고 맞춤형 제작",
                  badge: "인공지능 작성 도우미"
                }
            ].map((item, i) => {
                return (
                  <div
                  key={i}
                    class={`flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border  ${
                      selectedService === i
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                  >
                    <h3 class="mb-4 text-base font-semibold">{item.title}</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                     {item.info}
                    </p>

                    <div class="bg-blue-100 flex items-center gap-2 p-1 rounded-lg mt-2">
                      <svg
                        class="flex-shrink-0 w-5 h-5 text-blue-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-xs">{item.badge}</span>
                    </div>
                    <div className="flex justify-center">
                      <button
                        href="#"
                        className="bg-blue-700 mt-6 hover:bg-blue-500 text-white p-2 px-3 rounded-lg inline-block"
                        onClick={() => SelectService(i)}
                      >
                        Select Service
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Discount Offer</SubTitle>
            <div className="flex flex-col gap-4 mt-6">
              {[{
                title: "Self Input (- 30000 KRW)",
                info:'You can get 30000 KRW Discount for self information input in Korean'
              },
            {
              title: "Auto Input",
              info:"You only need to put minumum info and current Korean resume file."
            }].map((item, i) => {
                return (
                  <div key={i}
                    class={` bg-white rounded-lg border cursor-pointer p-8 ${
                      selectedDiscount === i
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedDiscount(i)}
                  >
                    <div className="flex justify-start items-center gap-3 mb-4">
                      <span
                        className={`w-4 h-4 border-[6px] ${
                          selectedDiscount === i
                            ? "border-blue-600"
                            : "border-gray-200"
                        } rounded-full`}
                      ></span>
                      <h3 class=" text-base font-normal">
                        {item?.title}
                      </h3>
                    </div>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      {item?.info}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Express Option</SubTitle>
            <div className="flex  flex-col gap-4 mt-6">
              {[
                {
                  title:"Basic",
                  info:"Takes 3 ~ 4 Days Delivery period."
                },
                {
                  title:"24 Hours (+50000 KRW)",
                  info:"Takes 24 Hours Delivery Periods."
                },
                {
                  title:"12 Hours (+60000 KRW)",
                  info:"Takes only 12 Hours to delivery. (Only available at Business hours 9am-7pm)"
                }
              ].map((item, i) => {
                return (
                  <div key={i}
                    class={` bg-white rounded-lg border cursor-pointer p-8 ${
                      selectedExpressOpt === i
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedExpressOpt(i)}
                  >
                    <div className="flex justify-start items-center gap-3 mb-4">
                      <span
                        className={`w-4 h-4 border-[6px] ${
                          selectedExpressOpt === i
                            ? "border-blue-600"
                            : "border-gray-200"
                        } rounded-full`}
                      ></span>
                      <h3 class=" text-base font-normal">{item?.title}</h3>
                    </div>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      {item?.info}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Payment Option</SubTitle>
            <div className="flex flex-col gap-4 mt-6">
              {['Kakaopay', 'Bank Transfer', 'Toss Payment'].map((item, i) => {
                return (
                  <div key={i}
                    class={` bg-white rounded-lg border cursor-pointer p-8 ${
                      selectedPaymentOpt === i
                        ? "border-blue-600"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedPaymentOpt(i)}
                  >
                    <div className="flex justify-start items-center gap-3">
                      <span
                        className={`w-4 h-4 border-[6px] ${
                          selectedPaymentOpt === i
                            ? "border-blue-600"
                            : "border-gray-200"
                        } rounded-full`}
                      ></span>
                      <h3 class=" text-base font-normal">{item}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="md:w-[35%] md:mt-40">
          <div className="p-6 border border-gray-200">
            <SubTitle>Service Summary</SubTitle>
            <p className="mt-8 text-sm">신청 서비스</p>
            <div className="flex justify-between gap-6 mt-4 items-center">
              <h6 className="font-semibold font-apple-sd text-lg">Resume</h6>
              <p className="font-extralight ">150,000 KRW</p>
            </div>
            <div className="flex justify-between gap-6 items-center">
              <h6 className="font-semibold font-apple-sd text-lg">
                Express 24 h
              </h6>
              <p className="font-extralight ">50,000 KRW</p>
            </div>
            <div className="flex justify-between gap-6 items-center">
              <h6 className="font-semibold font-apple-sd text-lg">
                Self Input
              </h6>
              <p className="font-extralight ">-30,000 KRW</p>
            </div>
            <p className="text-sm mt-10">Total price</p>
            <h6 className="font-semibold font-apple-sd text-lg">170,000 KRW</h6>
            <p className="text-sm mt-10">Expected Develivery Date</p>
            <h6 className="font-semibold font-apple-sd text-lg">24 Hours</h6>
            <div className="mt-20 flex justify-center mb-6">
              <button className="text-white bg-blue-700 rounded-xl hover:bg-blue-700 font-inter font-medium text-base px-6 py-3 mb-2">
                Pay Now
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ServiceResumeModule;
