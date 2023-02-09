import { HandlePersonalDetail } from "@/reducers/resume-data-slice/resume-data-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Label, RitchEditor, SubTitle, Text } from "../imports";

const PersonalDetailsForm = () => {
  const [formField, setFormField] = useState({
    WantedJobTitle: "",
    Phone: "",
    Email: "",
    Address: "",
    EnglishName: "",
  });
  
  const [summery, setsummery] = useState('')

  const getRitchTextData = ({value, index}) => {
    setsummery(value)
  }

  const handleChange = (event) => {
    setFormField({
      ...formField,
      [event.target.name]: event.target.value,
    });
  };
  
  const dispatch = useDispatch();
  const storeDataState = useSelector(
    (state) => state.ResumeFormData.storeDataState
  );

  // if (storeDataState) {
    dispatch(HandlePersonalDetail({...formField, summery}));
  // }

  return (
    <form>
      <div class="grid gap-3 md:gap-x-5 md:gap-y-4 lg:gap-x-10 lg:gap-y-8 mb-6 md:grid-cols-2 mt-[22px]">
        <div>
          <Label>Wanted Job Title</Label>
          <input
            type="text"
            id="WantedJobTitle"
            className="input"
            placeholder=""
            required
            name="WantedJobTitle"
            value={formField.WantedJobTitle}
            onChange={handleChange}
          />
        </div>
        <div />
        <div>
          <Label>English Name</Label>
          <input
            type="text"
            id="EnglishName"
            className="input"
            placeholder=""
            required
            name="EnglishName"
            value={formField.EnglishName}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Address</Label>
          <input
            type="text"
            id="Address"
            className="input"
            placeholder=""
            required
            name="Address"
            value={formField.Address}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Email</Label>
          <input
            type="text"
            id="Email"
            className="input"
            placeholder=""
            required
            name="Email"
            value={formField.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>Phone</Label>
          <input
            type="number"
            id="Phone"
            className="input"
            placeholder=""
            required
            name="Phone"
            value={formField.Phone}
            onChange={handleChange}
          />
        </div>
      </div>
      <SubTitle className="mt-16 mb-1">Summary</SubTitle>
      <Text className="mb-4">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </Text>
      <RitchEditor RitchTextData={getRitchTextData} ai={true} />
    </form>
  );
};

export default PersonalDetailsForm;
