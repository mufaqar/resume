import {
  EmploymentHistory,
  Layout,
  PersonalDetailsForm,
  SubTitle,
  Summery,
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
          <Summery/>
          <EmploymentHistory/>

         
        </section>
        <section>Right</section>
      </Layout>
    </>
  );
};

export default ResumeBuilderModule;
