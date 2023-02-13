import React, { useState } from "react";
import { Label, SubTitle, Text } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { HandleLanguages } from "@/reducers/resume-data-slice/resume-data-slice";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
const Languages = ({getData}) => {
  const [forms, setForms] = useState([
    {
      id: 1,
      Languages: "",
      LangType:""
    },
  ]);
    

  const RenderComponent = (e, index) => {
    setForms([
      ...forms,
      {
        id: forms.length + 1,
        Languages: "",
        LangType:""
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

  const dispatch = useDispatch();
  const storeDataState = useSelector(
    (state) => state.ResumeFormData.storeDataState
  );

  if (storeDataState) {
    dispatch(HandleLanguages(forms));
  }
  getData(forms)
  return (
    <>
      <SubTitle className="mt-[42px]">Languages</SubTitle>
      {forms.map((form, index) => (
        <div
          id="accordion-collapse"
          className="mt-4"
          data-accordion="collapse"
          key={index}
        >
          <div className="mt-4 group flex gap-4">
            <div className="w-full">
            <div className="group relative">
            <button
              type="button"
              class={`flex items-center justify-between w-full px-5 py-4  font-medium text-left text-gray-500 border border-gray-200 ${
                empTab === index ? "border-b-0" : ""
              }`}
              onClick={() => HandleEmpTab(index)}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800 capitalize">
                  { forms[index]?.Languages === '' ? 'Untitled' : forms[index]?.Languages} - { forms[index]?.LangType === '' ? 'Untitled' : forms[index]?.LangType}
                </span>
              </div>
              {
                empTab === index ? <MdKeyboardArrowUp size={26}/> : <MdKeyboardArrowDown size={26}/>
              }
            </button>
            <AiOutlineDelete
                  size={55}
                  className="cursor-pointer mt-1 text-gray-400 absolute -right-9 pl-6 pt-4 pb-4 group-hover:block hidden top-0 transform"
                  onClick={() => handleRemove(index)}
                />
            </div>

            <div
              id="accordion-collapse-body-1"
              class={empTab === index ? "block" : "hidden"}
            >
              <div class="p-5 font-light border border-t-0 border-gray-200 ">
                <form>
                  <div >
                    <div>
                      <Label>Languages</Label>
                      <input
                        type="text"
                        id="Languages"
                        className="input"
                        placeholder=""
                        required
                        name="Languages"
                      value={form.Languages}
                      onChange={(e) => handleChange(e, index)}
                      />
                    </div>
                    <div className="mt-3">
                    <Label>Type</Label>
                    <select
                      id="countries"
                      class="border input"
                      name="LangType"
                      value={form.LangType}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option selected>Choose a Type</option>
                      <option value="Conversational">Conversational</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Native">Native</option>
                    </select>
                  </div>
                  </div>
                </form>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      ))}

      <button
        onClick={RenderComponent}
        className="text-sm font-semibold mt-6 px-5 text-[#1A91F0] font-roboto flex items-center gap-2"
      >
        <BsPlusLg size={12} />
        Add one more language
      </button>
    </>
  );
};

export default Languages;
