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
} from "@/components/imports";
import Image from "next/image";
import { useState } from "react";

const ResumeBuilderModule = (props) => {
  const [selectTemplate, setSelectTemplate] = useState(0);
  const SelectCVTemplate = (id) => {
    setSelectTemplate(id)
  }

  return (
    <>
      <Layout bg={true} className="px-4 md:px-8 lg:px-16">
        <section className="mb-10">
          <h1 className="font-bold text-[32px] font-apple-sd mt-[124px] mb-[72px]">
            Self Type Resume + Cover Letter
          </h1>
          <SubTitle>Personal Details</SubTitle>
          <PersonalDetailsForm />
          <SubTitle className="mt-16 mb-1">Summary</SubTitle>
          <Text className="mb-4">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </Text>
          <RitchEditor ai={true} />
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
            <Image src="/images/cv-temp-image-1.png" fill className={"image"} />
          </div>
          {/* select cv template design */}
          <div className="bg-white px-8 py-12 mt-10">
            <SubTitle className='font-bold'>Resume Design</SubTitle>
            <div className="grid grid-cols-2 gap-x-7 mt-4">
             { [1,2,3,4].map((template,i)=>{
                return(
                  <div className={`image-container mt-6 border-[3px] rounded-2xl ${selectTemplate === i ? 'border-blue-600' : 'border-transparent'}`} key={i} onClick={()=>SelectCVTemplate(i)}>
                     <Image src="/images/cv-design-seclaton.png" fill className={"image rounded-xl"} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex justify-center mt-20">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-700  font-medium rounded-[4px] text-base px-7 py-4 mb-2">Submit Request</button>
          </div>

        </section>
      </Layout>
    </>
  );
};

export default ResumeBuilderModule;
