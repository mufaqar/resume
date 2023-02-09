import { SubTitle, Text } from "@/components/imports";
import React, { useRef, useState } from "react";

const ServiceTranslationModule = () => {

  const [selectedPaymentOpt, setSelectedPaymentOpt] = useState(0);

  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const wordCount = text.split(" ").filter(Boolean).length;
  
  return (
    <>
      <section className="container px-4 mx-auto md:flex gap-10">
        <section className="mb-10 md:w-[65%]">
          <h1 className="font-bold text-[32px] mt-10 font-apple-sd">
            Translation Request
          </h1>
          <Text className="mt-4">
            번역하고자 하는 자기소개서, 추천서 내용을 붙여넣기 하고 결제를
            진행하세요.
          </Text>
          <div className="mt-8 border border-gray-200">
            <SubTitle className="px-6 pt-6">
              Copy and Paste your documents
            </SubTitle>
            <textarea
              className="w-full mt-6 p-6 border-none outline-none shadow-none"
              rows="15"
              onChange={handleChange} value={text} 
            ></textarea>
            <div className="bg-gray-50 p-4 text-gray-400">{`${wordCount} words`}</div>
          </div>
          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Information to get final file</SubTitle>

            <form className="mt-5">
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
            </form>
          </div>

          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Payment Option</SubTitle>
            <div className="flex flex-col gap-4 mt-6">
              {[1, 2, 3].map((item, i) => {
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
                      <h3 class=" text-base font-semibold">Bank Transfer</h3>
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
            <p className="mt-8 text-sm">Service</p>
            <h6 className="font-semibold font-apple-sd text-lg mt-2">Translation</h6>
            <h6 className="font-semibold font-apple-sd text-lg mt-2">Native Proofreading</h6>
            <div className="mt-2">
              <p className="font-extralight text-sm">Total Word</p>
              <h6 className="font-semibold font-apple-sd text-lg">
              68 words
              </h6>
            </div>
            <div className="mt-2">
            <p className="font-extralight text-sm">Total price</p>
            <h6 className="font-semibold font-apple-sd text-lg">
              13600 KRW
            </h6>
          </div>
          <div className="mt-2">
            <p className="font-extralight text-sm">Expected Develivery Date</p>
            <h6 className="font-semibold font-apple-sd text-lg">
              Into 24 Hours
            </h6>
          </div>
            
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

export default ServiceTranslationModule;
