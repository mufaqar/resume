import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import { BsClockFill } from 'react-icons/bs';
import {SubTitle, Text} from "@/components/imports";


const Summery = ({ai}) => {
  const theme = "snow";
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const { quill, quillRef } = useQuill({ theme, modules });
  const [text, setText] = useState();

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        setText(quill.root.innerHTML); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);
  return (
    <>
      <div className="bg-[#EFF2F9] relative h-[236px]">
        <div style={{ width: "100%", height: 236 }}>
          <div ref={quillRef} />
        </div>
        {
          ai && <button className="text-sm flex items-center absolute right-3 top-2 gap-1 bg-[#DEF7EC] rounded-full px-4 py-1 text-[#03543F]">
          <BsClockFill /> AI Assistance
        </button>
        }
        
      </div>
    </>
  );
};

export default Summery;
