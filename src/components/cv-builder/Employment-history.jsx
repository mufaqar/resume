import React, { useState } from "react";
import { Label, RitchEditor, SubTitle, Text } from "@/components/imports";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { HandleEmploymentHistory } from "@/reducers/resume-data-slice/resume-data-slice";

const EmploymentHistory = ({getData}) => {
  const [forms, setForms] = useState([
    {
      id: 1,
      jobtitle: "",
      Employer: "",
      City: "",
      StartDate: "",
      EndDate: "",
      Description: "",
    }
  ]);
 

  const RenderComponent = (e, index) => {
    setForms([
      ...forms,
      {
        id: forms.length + 1,
        jobtitle: "",
        Employer: "",
        City: "",
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

  getData(forms)

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

  const getRitchTextData = ({index, value}) => {
    const updatedForms = [...forms];
    updatedForms[index]['Description'] = value
    setForms(updatedForms);
  }

  const dispatch = useDispatch();
  const storeDataState = useSelector(
    (state) => state.ResumeFormData.storeDataState
  );

  if (storeDataState) {
    dispatch(HandleEmploymentHistory(forms));
  }


  return (
    <>
      <SubTitle className="mt-[42px]">Employment History</SubTitle>
      <Text className="mt-1 mb-1">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </Text>
      {forms.map((form, index) => (
        <div id="accordion-collapse" className="mt-4" data-accordion="collapse" key={form.id}>
          <div className="mt-4 flex  gap-4">
            <div className="w-full">
              <div className="relative group">
              <button
                type="button"
                class={`flex items-center justify-between w-full px-5 py-4  font-medium text-left text-gray-500 border border-gray-200 ${
                  empTab === index ? "border-b-0" : ""
                }`}
                onClick={() => HandleEmpTab(index)}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    { forms[index]?.jobtitle === '' ? 'Untitled' : forms[index]?.jobtitle}
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
                    <div class="grid gap-3 md:gap-x-5 md:gap-y-4 lg:gap-x-10 lg:gap-y-8 mb-6 md:grid-cols-2 mt-[22px]">
                      <div>
                        <Label>Job Title</Label>
                        <input
                          type="text"
                          id="name"
                          name="jobtitle"
                          value={form.jobtitle}
                          onChange={e => handleChange(e, index)}
                          className="input"
                          placeholder=""
                          required
                          
                        />
                      </div>
                      <div>
                        <Label>Employer</Label>
                        <input
                          type="text"
                          id="Employer"
                          className="input"
                          placeholder=""
                          required
                          name="Employer"
                          value={form.Employer}
                          onChange={e => handleChange(e, index)}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3 items-end">

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
                            onChange={e => handleChange(e, index)}
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
                            onChange={e => handleChange(e, index)}
                            min='1980-01-01' max='2040-01-01'
                          />
                        </div>
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
                          onChange={e => handleChange(e, index)}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="mb-2">
                    <Label>Description</Label>
                  </div>
                  <RitchEditor RitchTextData={getRitchTextData} index={index}  />
                  
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
        onClick={() => RenderComponent()}
        className="text-sm font-semibold mt-6 px-5 text-[#1A91F0] font-roboto flex items-center gap-2"
      >
        <BsPlusLg size={12} />
        Add one more employment
      </button>
    </>
  );
};

export default EmploymentHistory;
