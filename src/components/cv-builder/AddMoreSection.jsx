import React, { useState } from "react";
import { Label, RitchEditor, SubTitle } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { HandleAddMoreSection } from "@/reducers/resume-data-slice/resume-data-slice";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
const AddMoreSection = () => {
  const [OpenOther, setOpenOther] = useState(false);
  const [forms, setForms] = useState([
    {
      id: 1,
      Aсtivity: "",
      StartDate: "",
      EndDate: "",
      Description: "",
    },
  ]);
    

  const RenderComponent = (e, index) => {
    setForms([
      ...forms,
      {
        id: forms.length + 1,
        Aсtivity: "",
        StartDate: "",
        EndDate: "",
        Description: "",
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

  const getRitchTextData = ({ index, value }) => {
    const updatedForms = [...forms];
    updatedForms[index]["Description"] = value;
    setForms(updatedForms);
  };

  const dispatch = useDispatch();
  const storeDataState = useSelector(
    (state) => state.ResumeFormData.storeDataState
  );

  if (storeDataState) {
    dispatch(HandleAddMoreSection(forms));
  }


  return (
    <div>
      <SubTitle className="mt-[42px]">Add More Section</SubTitle>

      <section className={OpenOther ? "block" : "hidden"}>
        {forms.map((form, index) => (
          <div key={index}
            id="accordion-collapse"
            className="mt-6"
            data-accordion="collapse"
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
                      {forms[index]?.Aсtivity === ""
                        ? "Untitled"
                        : forms[index]?.Aсtivity}
                    </span>
                    <Label>
                      {forms[index]?.StartDate === ""
                        ? "MM / YYYY"
                        : forms[index]?.StartDate}{" "}
                      -{" "}
                      {forms[index]?.EndDate === ""
                        ? "MM / YYYY"
                        : forms[index]?.EndDate}
                    </Label>
                  </div>
                  {
                    empTab === index ? <MdKeyboardArrowUp size={26}/> : <MdKeyboardArrowDown size={26}/>
                  }
                </button>
                <AiOutlineDelete
                size={55}
                className="cursor-pointer mt-3 text-gray-400 absolute -right-9 pl-6 pt-4 pb-4 group-hover:block hidden top-0 transform"
                onClick={() => handleRemove(index)}
              /></div>
                <div
                  id="accordion-collapse-body-1"
                  class={empTab === index ? "block" : "hidden"}
                >
                  <div class="p-5 font-light border border-t-0 border-gray-200 ">
                    <form>
                      <div class="grid gap-3 md:gap-x-5 md:gap-y-4 lg:gap-x-10 lg:gap-y-8 mb-6 md:grid-cols-2 mt-[22px]">
                        <div>
                          <Label>
                            Aсtivity name, job title, book title etc.
                          </Label>
                          <input
                            type="text"
                            id="Aсtivity"
                            className="input"
                            placeholder=""
                            required
                            name="Aсtivity"
                            value={form.Aсtivity}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                        <div>
                          <Label>City</Label>
                          <input
                            type="text"
                            id="City"
                            className="input"
                            placeholder=""
                            required
                            name="City"
                            value={form.City}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3 items-end">
                          <div>
                            <Label>Start & End Date</Label>
                            <input
                              type="date"
                              id="StartDate"
                              className="input"
                              placeholder=""
                              required
                              name="StartDate"
                              value={form.StartDate}
                              onChange={(e) => handleChange(e, index)}
                              min='1980-01-01' max='2040-01-01'
                            />
                          </div>
                          <div>
                            <input
                              type="date"
                              id="EndDate"
                              className="input"
                              placeholder=""
                              required
                              name="EndDate"
                              value={form.EndDate}
                              onChange={(e) => handleChange(e, index)}
                              min='1980-01-01' max='2040-01-01' 
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="mb-2">
                      <Label>Description</Label>
                    </div>
                    <RitchEditor
                      RitchTextData={getRitchTextData}
                      index={index}
                    />
                    <Label className="font-light block pt-2">
                      Recruiter tip: write 200+ characters to increase interview
                      chances
                    </Label>
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
          Add one more employment
        </button>
      </section>

      <button
        className="text-base mt-6 text-gray-800 font-roboto flex items-center gap-2"
        onClick={() => setOpenOther(!OpenOther)}
      >
        <img src="/svg/setting.svg" alt="setting" />
        Custom Section
      </button>
    </div>
  );
};

export default AddMoreSection;
