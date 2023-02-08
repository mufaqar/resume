const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  storeDataState: false,
  personalDetailState: {},
  employmentHistoryState:[],
  educationState: [],
  skillState: [],
  languagesState: [],
  certificationState: [],
  extraCurricularActivitiesState: [],
  addMoreSectionState: [],
};

const ResumeDataSlice = createSlice({
  name: "resume data slice",
  initialState,
  reducers: {
    ChangeStoreDataState: (state, action) => {
      state.storeDataState = action.payload
    },
    HandlePersonalDetail: (state, action) => {
     state.personalDetailState = action.payload
    },
    HandleEmploymentHistory: (state, action) => {
     state.employmentHistoryState.push(action.payload)
    },
    HandleEducation: (state, action) => {
     state.educationState.push(action.payload)
    },
    HandleSkills: (state, action) => {
     state.skillState.push(action.payload)
    },
    HandleLanguages: (state, action) => {
     state.languagesState.push(action.payload)
    },
    HandleCertification: (state, action) => {
     state.certificationState.push(action.payload)
    },
    HandleExtraCurricularActivities: (state, action) => {
     state.extraCurricularActivitiesState.push(action.payload)
    },
    HandleAddMoreSection: (state, action) => {
     state.addMoreSectionState.push(action.payload)
    },
  },
});

export const {
  ChangeStoreDataState,
  HandlePersonalDetail,
  HandleEmploymentHistory,
  HandleEducation,
  HandleSkills,
  HandleLanguages,
  HandleCertification,
  HandleExtraCurricularActivities,
  HandleAddMoreSection,
} = ResumeDataSlice.actions;
export default ResumeDataSlice;
