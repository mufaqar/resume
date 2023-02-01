import React, { useState } from "react";
import { Label, SubTitle, Text } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";

const Certification = () => {
  const [empTab, setEmpTab] = useState(null);
  
  const HandleEmpTab = (id) => {
     if(empTab === id){
          return setEmpTab(null)
     }
     setEmpTab(id)
  }

  return (
    <>
      <SubTitle className="mt-[42px]">Certification</SubTitle>
      <div id="accordion-collapse" className="mt-4" data-accordion="collapse">
        {[1].map((item, i) => {
          return (
            <div className="mt-4" key={i}>
              <button
                type="button"
                class={`flex items-center justify-between w-full px-5 py-4  font-medium text-left text-gray-500 border border-gray-200 ${
                  empTab === i ? "border-b-0" : ""
                }`}
                onClick={() => HandleEmpTab(i)}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                  Distribution Manager - Level 2 at Korea Chamber of Commerce and Industry
                  </span>
                  <Label>Feb 2022</Label>
                </div>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="accordion-collapse-body-1"
                class={empTab === i ? "block" : "hidden"}
              >
                <div class="p-5 font-light border border-t-0 border-gray-200 ">
                  <form>
                    <div class="grid gap-3 md:gap-x-5 md:gap-y-4 lg:gap-x-10 lg:gap-y-8 mb-6 mt-[22px]">
                      <div>
                        <Label>Title</Label>
                        <input
                          type="text"
                          id="first_name"
                          className="input"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 items-end">
                        <div>
                          <Label>Date</Label>
                          <input
                            type="text"
                            id="first_name"
                            className="input"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                
              </div> 
              </div>
            </div>
          );
        })}
      </div>

      <button className="text-sm font-semibold mt-6 px-5 text-[#1A91F0] font-roboto flex items-center gap-2">
        <BsPlusLg size={12} />
        Add one more course
      </button>
    </>
  );
};

export default Certification;
