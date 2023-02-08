import React from "react";
import { useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";

export default function Preview() {
  const PersonalDetailFields = useSelector(
    (state) => state.ResumeFormData.personalDetailState
  );
  const EmploymentHistoryFields = useSelector(
    (state) => state.ResumeFormData.employmentHistoryState
  );

  const EducationalFields = useSelector(
    (state) => state.ResumeFormData.educationState
  );

  const SkillFields = useSelector((state) => state.ResumeFormData.skillState);
  const LanguageFields = useSelector(
    (state) => state.ResumeFormData.languagesState
  );

  const CertificationFields = useSelector(
    (state) => state.ResumeFormData.certificationState
  );
  
  const ExtraCurricularActivitiesFields = useSelector(
    (state) => state.ResumeFormData.extraCurricularActivitiesState
  );
  const AddMoreSectionStateFields = useSelector(
    (state) => state.ResumeFormData.addMoreSectionState
  );

  return (
    <div className="bg-white p-3 md:p-6 flex gap-3">
      <div className="w-1/3">
        <h2 className="text-xl font-bold font-apple-sd">
          {PersonalDetailFields?.EnglishName}
        </h2>
        <p className="text-sm font-medium mt-2 text-gray-400 font-apple-sd">
          {PersonalDetailFields?.WantedJobTitle}
        </p>
        <p className="text-sm font-medium mt-2 font-apple-sd">Sales Manager</p>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">Details</h3>
          <ul className="text-sm font-medium mt-2 space-y-2 font-apple-sd">
            <li>{PersonalDetailFields?.Address}</li>
            <li>{PersonalDetailFields?.Phone}</li>
            <li>{PersonalDetailFields?.Email}</li>
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">Skills</h3>
          <ul className="text-sm font-medium mt-2 space-y-2 font-apple-sd">
            {SkillFields[0]?.map((skill, i) => {
              return (
                <li className="capitalize" key={i}>
                  {skill?.Skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">Languages</h3>
          <ul className="text-sm font-medium mt-2 space-y-2 font-apple-sd">
            {LanguageFields[0]?.map((lang, i) => {
              return (
                <li className="capitalize" key={i}>
                  {lang?.Languages}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">Links</h3>
          <ul className="text-sm font-medium mt-2 space-y-2 font-apple-sd">
            <li>LinkedIn Profile</li>
          </ul>
        </div>
      </div>
      <div className="w-2/3">
        <div>
          <h3 className="text-lg font-bold font-apple-sd">Summary</h3>
          <div className="text-sm font-medium mt-2 space-y-2 font-apple-sd">
            {ReactHtmlParser(PersonalDetailFields?.summery)}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">
            Employment History
          </h3>
          {EmploymentHistoryFields[0]?.map((emp, i) => (
            <div key={i}>
              <h4 className="text-sm font-bold mt-2 font-apple-sd">
                {emp?.jobtitle}, {emp?.Employer}, {emp?.City}
              </h4>
              <p className="text-xs font-medium uppercase mt-2 text-gray-400 font-apple-sd">
                {emp?.StartDate} - {emp?.EndDate}
              </p>
              <div className="text-sm font-medium mt-2 space-y-2 list-disc font-apple-sd _list">
                {ReactHtmlParser(emp?.Description)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">Education</h3>
          {
            EducationalFields[0]?.map((edu,i)=>(
             <div key={i}>
                <h4 className="text-sm font-bold mt-2 font-apple-sd">
                  {edu?.Degree} {edu?.University}
                </h4>
                <p className="text-xs font-medium uppercase mt-2 text-gray-400 font-apple-sd">
                {edu?.StartDate} - {edu?.EndDate}
                </p>
              </div>
            ))
            
          }
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold font-apple-sd">Certification</h3>
          {
            CertificationFields[0]?.map((cert,i)=>(
                <div key={i}>
                    <h4 className="text-sm font-bold mt-2 font-apple-sd">
                    {cert?.Title}
                    </h4>
                    <p className="text-xs font-medium uppercase mt-2 text-gray-400 font-apple-sd">
                    {cert?.Date}
                    </p>
                </div>
            ))
          }
          
          
          
        </div>
      </div>
    </div>
  );
}
