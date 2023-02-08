import React, { useState } from "react";
import { Label } from "../imports";

const PersonalDetailsForm = () => {
  const [formField, setFormField] = useState({
    WantedJobTitle : "",
    Phone:"",
    Email:"",
    Address:"",
    EnglishName:""
  })
  console.log("🚀 ~ file: PersonalDetails-form.jsx:12 ~ PersonalDetailsForm ~ formField", formField)

  const handleChange = event => {
    setFormField({
      ...formField,
      [event.target.name]: event.target.value
    });
  };

  
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
    </form>
  );
};

export default PersonalDetailsForm;
