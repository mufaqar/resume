import React, { useState } from "react";
import { Label, RitchEditor, SubTitle } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";

const AddMoreSection = () => {

  const [empTab, setEmpTab] = useState(null);
  const [OpenOther, setOpenOther] = useState(false);
  const HandleEmpTab = (id) => {
     if(empTab === id){
          return setEmpTab(null)
     }
     setEmpTab(id)
  }

  return (
    <div>
      <SubTitle className="mt-[42px]">Add More Section</SubTitle>
      <button className="text-base mt-6 text-gray-800 font-roboto flex items-center gap-2" onClick={()=>setOpenOther(!OpenOther)}>
        <img src="/svg/setting.svg" alt="setting" />
        Custom Section
      </button>

      <section className={OpenOther ? 'block' : 'hidden'}>
        <div id="accordion-collapse" className="mt-6" data-accordion="collapse">
              <div className="mt-4" >
                <button
                  type="button"
                  class={`flex items-center justify-between w-full px-5 py-4  font-medium text-left text-gray-500 border border-gray-200 `}
                  onClick={() => HandleEmpTab(i)}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800">
                      Sales Management Assistant at Google
                    </span>
                    <Label>Feb 2014 - Jan 2017</Label>
                  </div>
                  <svg
                    data-accordion-icon
                    class="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="accordion-collapse-body-1"
                >
                  <div class="p-5 font-light border border-t-0 border-gray-200 ">
                    <form>
                      <div class="grid gap-3 md:gap-x-5 md:gap-y-4 lg:gap-x-10 lg:gap-y-8 mb-6 md:grid-cols-2 mt-[22px]">
                        <div>
                          <Label>Job Title</Label>
                          <input
                            type="text"
                            id="first_name"
                            className="input"
                            placeholder=""
                            required
                          />
                        </div>
                        <div>
                          <Label>Employer</Label>
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
                            <Label>Start & End Date</Label>
                            <input
                              type="text"
                              id="first_name"
                              className="input"
                              placeholder=""
                              required
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              id="first_name"
                              className="input"
                              placeholder=""
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label>City</Label>
                          <input
                            type="text"
                            id="first_name"
                            className="input"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                    </form>
                    <div className="mb-2">
                      
                      <Label>Description</Label>
                    </div>
                    <RitchEditor />
                    <Label className="font-light block pt-2">
                      Recruiter tip: write 200+ characters to increase interview
                      chances
                    </Label>
                  </div>
                </div>
              </div>
        </div>

        <button className="text-sm font-semibold mt-6 px-5 text-[#1A91F0] font-roboto flex items-center gap-2">
          <BsPlusLg size={12} />
          Add one more employment
        </button>
      </section>
    </div>
  );
};

export default AddMoreSection;
