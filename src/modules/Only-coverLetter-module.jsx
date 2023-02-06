import { Layout, SubTitle, Text } from "@/components/imports";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsClockFill } from "react-icons/bs";

const OnlyCoverLetterModule = () => {
  return (
    <>
      <Layout className="mt-28 pr-12" bg={false}>
        <section className="mb-20">
          <h1 className="font-bold text-[32px] mt-10 font-apple-sd">
          Cover Letter
          </h1>
          <Text>
          Please type all information, If you have any question, Please contact here.
          </Text>

          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>General Information</SubTitle>
            <div className="">
              <form className="mt-5">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      English Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your phone number"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nationality
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Operational</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Not verified</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="Country"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="Country"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Country name"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border border-gray-200 p-8">
            <SubTitle>Resume File Upload</SubTitle>
            <div className="flex flex-col gap-4 mt-6">
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <p className="text-xs  text-gray-400">
                Word, PDF File only. Max size of 800k
              </p>
            </div>
          </div>

          <div className="border border-gray-200 p-8 mt-9">
            <SubTitle>Cover Letter</SubTitle>

            <label
              for="message"
              class="block mb-2 mt-4 font-inter text-sm font-medium text-gray-900 dark:text-white"
            >
              Paragraph 1
            </label>
            <textarea
              id="message"
              rows="9"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write text here..."
            ></textarea>
            <label
              for="message"
              class="block mb-2 mt-4 font-inter text-sm font-medium text-gray-900 dark:text-white"
            >
              Paragraph 2
            </label>
            <textarea
              id="message"
              rows="9"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write text here..."
            ></textarea>
            <label
              for="message"
              class="block mb-2 mt-4 font-inter text-sm font-medium text-gray-900 dark:text-white"
            >
              Paragraph 3
            </label>
            <textarea
              id="message"
              rows="9"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write text here..."
            ></textarea>
          </div>
        </section>
        <section>
          <div className="border border-gray-200 p-3">
            <div className={"image-container mt-6 "}>
              <Image
                src="/images/cv-temp-image-1.png"
                fill
                className={"image"}
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center mb-20">
            <button className="text-white bg-blue-700 rounded-xl hover:bg-blue-700 font-inter font-medium text-base px-6 py-3 mb-2">
              Submit Request
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OnlyCoverLetterModule;
