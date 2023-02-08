import { Layout, SubTitle, Text, Preview } from "@/components/imports";
import { ChangeStoreDataState } from "@/reducers/resume-data-slice/resume-data-slice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const CoverLetterModule = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  return (
    <>
      <Layout className="mt-28 pr-12" bg={false}>
        <section className="mb-10 ">
          <h1 className="font-bold text-[32px] mt-10 font-apple-sd">
            Self Type Resume + Cover Letter
          </h1>
          <Text>
            Please type all information, If you have any question, Please
            contact here.
          </Text>
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
        <section className="border border-gray-200 p-3">
          <Preview />
        </section>
      </Layout>

      <div className="flex justify-center gap-6 mt-8 mb-10">
        <button
          onClick={()=>{
            dispatch(ChangeStoreDataState(false))
            router.push('/resume-builder')
          }}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-700 font-inter font-medium rounded-[4px] text-base px-6 py-3 mb-2"
        >
          Go Back resume
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-700 font-inter font-medium rounded-[4px] text-base px-6 py-3 mb-2"
        >
          Submit Request
        </button>
      </div>
    </>
  );
};

export default CoverLetterModule;
