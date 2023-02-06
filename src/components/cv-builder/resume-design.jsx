import React, { useState } from "react";
import { SubTitle } from "@/components/imports";
import Image from "next/image";

const ResumeDesign = () => {
  const [selectTemplate, setSelectTemplate] = useState(0);
  const SelectCVTemplate = (id) => {
    setSelectTemplate(id)
  }
  return (
    <div className={`bg-white p-8 `}>
      <SubTitle className="font-bold">Resume Design</SubTitle>
      <div className="grid grid-cols-2 gap-x-7 mt-4">
        {[1, 2, 3, 4].map((template, i) => {
          return (
            <div
              className={`image-container mt-6 border-[3px] rounded-2xl ${
                selectTemplate === i ? "border-blue-600" : "border-transparent"
              }`}
              key={i}
              onClick={() => SelectCVTemplate(i)}
            >
              <Image
                src="/images/cv-design-seclaton.png"
                fill
                className={"image rounded-xl"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeDesign;
