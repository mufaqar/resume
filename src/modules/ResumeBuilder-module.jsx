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



const ResumeBuilderModule = (props) => {

  return (
    <>
      <Layout>
        <section className="mb-10">
          <h1 className="font-bold text-[32px] font-apple-sd mt-[124px] mb-[72px]">
            Self Type Resume + Cover Letter
          </h1>
          <SubTitle>Personal Details</SubTitle>
          <PersonalDetailsForm />
          <SubTitle className="mt-16 mb-1">Summary</SubTitle>
          <Text className="mb-4">
            Write 2-4 short & energetic sentences to interest the reader! Mention
            your role, experience & most importantly - your biggest achievements,
            best qualities and skills.
          </Text>
          <RitchEditor ai={true}/>
          <EmploymentHistory/>
          <Education/>
          <Skills/>
          <Languages/>
          <Certification/>
          <ExtraCurricularActivities/>
          <AddMoreSection/>
         
        </section>
        <section>Right</section>
      </Layout>
    </>
  );
};

export default ResumeBuilderModule;
