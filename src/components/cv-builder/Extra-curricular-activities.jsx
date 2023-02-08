import React, { useState } from "react";
import { Label, RitchEditor, SubTitle, Text } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const ExtraCurricularActivities = () => {
  const [forms, setForms] = useState([
    {
      id: 1,
      Title: "",
      Description: "",
      StartDate: "",
      EndDate: "",
    },
  ]);
    

  const RenderComponent = (e, index) => {
    setForms([
      ...forms,
      {
        Title: "",
        Description: "",
        StartDate: "",
        EndDate: "",
      },
    ]);
  };

  const handleChange = (e, index) => {
    const updatedForms = [...forms];
    updatedForms[index][e.target.name] = e.target.value;
    setForms(updatedForms);
  };

  const handleRemove = (index) => {
    setForms(forms.filter((form, i) => i !== index));
  };

  const [empTab, setEmpTab] = useState(null);
  const HandleEmpTab = (id) => {
    if (empTab === id) {
      return setEmpTab(null);
    }
    setEmpTab(id);
  };

  const getRitchTextData = ({ index, content }) => {
    const updatedForms = [...forms];
    updatedForms[index]["Description"] = content;
    setForms(updatedForms);
  };

  return (
    <>
      <SubTitle className="mt-[42px]">Extra-curricular Activities</SubTitle>

      {forms.map((form, index) => (
        <div
          id="accordion-collapse"
          className="mt-4"
          data-accordion="collapse"
          key={form.id}
        >
          <div className="mt-4 flex gap-4">
            <div className="w-full">
              <button
                type="button"
                class={`flex items-center justify-between w-full px-5 py-4  font-medium text-left text-gray-500 border border-gray-200 ${
                  empTab === index ? "border-b-0" : ""
                }`}
                onClick={() => HandleEmpTab(index)}
              >
              <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800 capitalize">
                { forms[index]?.Title === '' ? 'Untitled' : forms[index]?.Title}
              </span>
              <Label>{ forms[index]?.StartDate === '' ? 'MM / YYYY' : forms[index]?.StartDate} - { forms[index]?.EndDate === '' ? 'MM / YYYY' : forms[index]?.EndDate}</Label>
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
                class={empTab === index ? "block" : "hidden"}
              >
                <div class="p-5 font-light border border-t-0 border-gray-200 ">
                  <form>
                    <div>
                      <Label>Title</Label>
                      <input
                        type="text"
                        id="name"
                        name="Title"
                        value={form.Title}
                        onChange={(e) => handleChange(e, index)}
                        className="input"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3 items-end mt-3">
                      <div>
                        <Label>Start & End Date</Label>
                        <input
                          type="text"
                          id="StartDate"
                          className="input"
                          placeholder="MM / YYYY"
                          required
                          name="StartDate"
                          value={form.StartDate}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="EndDate"
                          className="input"
                          placeholder="MM / YYYY"
                          required
                          name="EndDate"
                          value={form.EndDate}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="mb-2 mt-3">
                    <Label>Description</Label>
                  </div>
                  <RitchEditor RitchTextData={getRitchTextData} index={index} />
                  <Label className="font-light block pt-2">
                    Recruiter tip: write 200+ characters to increase interview
                    chances
                  </Label>
                </div>
              </div>
            </div>
            <AiOutlineDelete
              size={20}
              className="cursor-pointer mt-7"
              onClick={() => handleRemove(index)}
            />
          </div>
        </div>
      ))}

      <button
        onClick={RenderComponent}
        className="text-sm font-semibold mt-6 px-5 text-[#1A91F0] font-roboto flex items-center gap-2"
      >
        <BsPlusLg size={12} />
        Add one more activity
      </button>
    </>
  );
};

export default ExtraCurricularActivities;
