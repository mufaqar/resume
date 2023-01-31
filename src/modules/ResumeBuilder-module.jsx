import {
  Layout,
  PersonalDetailsForm,
  SubTitle,
  Text,
} from "@/components/imports";
import React from "react";

const ResumeBuilderModule = () => {
  return (
    <>
      <Layout>
          <section>
          <h1 className="font-bold text-[32px] font-apple-sd mt-[124px] mb-[72px]">
            Self Type Resume + Cover Letter
          </h1>
          <SubTitle>Personal Details</SubTitle>
          <PersonalDetailsForm />
          <SubTitle className="mt-16">Summary</SubTitle>
          <Text>
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </Text>
          </section>
          <section>Right</section>
      </Layout>
    </>
  );
};

export default ResumeBuilderModule;
