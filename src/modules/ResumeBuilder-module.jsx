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
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ResumeBuilderModule = (props) => {
  

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
            <Preview />
            {/* <Image src="/images/cv-temp-image-1.png" fill className={"image"} /> */}
          </div>
          {/* select cv template design */}
         <div className="mt-10"><ResumeDesign /></div>
          <div className="flex justify-center mt-20">
          <Link href="/cover-letter"  className="text-white bg-blue-700 hover:bg-blue-700  font-medium rounded-[4px] text-base px-7 py-4 mb-2">Submit Request</Link>
          </div>

        </section>
      </Layout>
    </>
  );
};

export default ResumeBuilderModule;
