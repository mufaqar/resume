import { configureStore } from "@reduxjs/toolkit";
import ResumeDataSlice from "./resume-data-slice/resume-data-slice";


export const store = configureStore({
  reducer: {
    ResumeFormData: ResumeDataSlice.reducer,
  },
});