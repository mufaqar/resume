import React, { useState } from "react";
import { Label, RitchEditor, SubTitle, Text } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { HandleExtraCurricularActivities } from "@/reducers/resume-data-slice/resume-data-slice";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
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
    dispatch(HandleExtraCurricularActivities(forms));
  }
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
          <div className="mt-4 flex group gap-4">
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
                { forms[index]?.Title === '' ? 'Untitled' : forms[index]?.Title}
              </span>
              <Label>{ forms[index]?.StartDate === '' ? 'MM / YYYY' : forms[index]?.StartDate} - { forms[index]?.EndDate === '' ? 'MM / YYYY' : forms[index]?.EndDate}</Label>
            </div>
            {
              empTab === index ? <MdKeyboardArrowUp size={26}/> : <MdKeyboardArrowDown size={26}/>
            }
              </button>
              <AiOutlineDelete
            size={55}
            className="cursor-pointer mt-3 text-gray-400 absolute -right-9 pl-6 pt-4 pb-4 group-hover:block hidden top-0 transform"
            onClick={() => handleRemove(index)}
          />
              </div>

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
                          type="date"
                          id="StartDate"
                          className="input"
                          placeholder="MM / YYYY"
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
                          placeholder="MM / YYYY"
                          required
                          name="EndDate"
                          value={form.EndDate}
                          onChange={(e) => handleChange(e, index)}
                          min='1980-01-01' max='2040-01-01'
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
