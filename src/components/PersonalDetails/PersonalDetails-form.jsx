import React from "react";
import { Label } from "../imports";

const PersonalDetailsForm = () => {
  return (
    <form>
      <div class="grid gap-3 md:gap-x-5 md:gap-y-4 lg:gap-x-10 lg:gap-y-8 mb-6 md:grid-cols-2 mt-[22px]">
        <div>
          <Label>Wanted Job Title</Label>
          <input
            type="text"
            id="first_name"
            className="input"
            placeholder=""
            required
          />
        </div>
        <div />
        <div>
          <Label>English Name</Label>
          <input
            type="text"
            id="first_name"
            className="input"
            placeholder=""
            required
          />
        </div>
        <div>
          <Label>Address</Label>
          <input
            type="text"
            id="first_name"
            className="input"
            placeholder=""
            required
          />
        </div>
        <div>
        <Label>Email</Label>
        <input
          type="text"
          id="first_name"
          className="input"
          placeholder=""
          required
        />
      </div>
      <div>
        <Label>Phone</Label>
        <input
          type="number"
          id="first_name"
          className="input"
          placeholder=""
          required
        />
      </div>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
