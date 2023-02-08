import {
  EmploymentHistory,
  Layout,
  PersonalDetailsForm,
  SubTitle,
  RitchEditor,
  Text,
  Education,
  Skills,
  Languages,
  Certification,
  ExtraCurricularActivities,
  AddMoreSection,
  ResumeDesign,
} from "@/components/imports";
import Preview from "@/components/preview";
import { ChangeStoreDataState } from "@/reducers/resume-data-slice/resume-data-slice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ResumeBuilderModule = (props) => {

  const router = useRouter()
  const dispatch = useDispatch()
  

  return (
    <>
      <Layout bg={true} className="px-4 md:px-8 lg:px-16">
        <section className="mb-10">
          <h1 className="font-bold text-[32px] font-apple-sd mt-[124px] mb-[72px]">
            Self Type Resume + Cover Letter
          </h1>
          <SubTitle>Personal Details</SubTitle>
          <PersonalDetailsForm />
          <EmploymentHistory />
          <Education />
          <Skills />
          <Languages />
          <Certification />
          <ExtraCurricularActivities />
          <AddMoreSection />
        </section>
        <section>
          <div className={"image-container mt-6"}>
            <Preview/>
          </div>
          {/* select cv template design */}
          <div className="mt-10">
            <ResumeDesign />
          </div>
          <div className="flex justify-center mt-20">
            <button
              onClick={()=>{
                dispatch(ChangeStoreDataState(true))
                router.push('/cover-letter')
              }}
              className="text-white bg-blue-700 hover:bg-blue-700  font-medium rounded-[4px] text-base px-7 py-4 mb-2"
            >
              Submit Request
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ResumeBuilderModule;
