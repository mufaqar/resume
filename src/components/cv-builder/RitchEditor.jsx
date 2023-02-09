import React, { useState } from "react";
import { useQuill } from "react-quilljs";
import { BsClockFill } from "react-icons/bs";
import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";
import { SubTitle, Text } from "@/components/imports";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })





const Summery = ({ ai, RitchTextData, index }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  const [content, setContent] = useState('');

  const handleChange = (value) => {
    const data = { value, index };
    setContent(value);
    RitchTextData(data);
  };

  const theme = "snow";
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  // const { quill, quillRef } = useQuill({ theme, modules });
  // const [text, setText] = useState();

  // React.useEffect(() => {
  //   if (quill) {
  //     quill.on("text-change", (delta, oldDelta, source) => {
  //       setText(quill.root.innerHTML);
  //       const content = quill.root.innerHTML;
  //       const data = { content, index };
  //       
  //     });
  //   }
  // }, [quill]);

  return (
    <>
      <div className="bg-[#EFF2F9] relative h-[236px]">
        <div style={{ width: "100%", height: 236 }}>
          {/* <div ref={quillRef} /> */}
          <ReactQuill theme={theme} modules={modules} value={content} onChange={handleChange} />
        </div>
        {ai && (
          <button
            onClick={openModal}
            className="text-sm flex items-center absolute right-3 top-2 gap-1 bg-[#DEF7EC] rounded-full px-4 py-1 text-[#03543F]"
          >
            <BsClockFill className="text-gray-500" /> AI Assistance
          </button>
        )}
      </div>
      <AIModel modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Summery;

const AIModel = ({ modalIsOpen, setIsOpen }) => {
  function closeModal() {
    return setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "8px",
    },
  };

  return (
    <div className="aimodelBox">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex justify-between items-center gap-8">
          <SubTitle>ATS Friendly Summary Generator (0/5)</SubTitle>
          <button onClick={closeModal} className="float-right">
            <RxCross1 />
          </button>
        </div>
        <section className="">
          <Text className="text-black font-normal mt-4">
            How to use AI Resume Assist?
          </Text>
          <div className="image-container">
            <Image
              src="/images/skelton-image.png"
              alt="image"
              fill
              className="image rounded-xl mt-2"
            />
          </div>
          <Text className="text-black font-normal mt-8">
            Paste the Job Description from Job posting.
          </Text>
          <div className="border border-gray-300 p-4 rounded-lg mt-2">
            <Text className="text-black">
              We Welcome Talents With The Following Traits Ability to think and
              work independently and collaboratively Being self-motivated,
              goal-oriented, and passionate about design Being highly
              responsible and accountable Strong work ethics
            </Text>
          </div>
          <div className="flex justify-center my-10">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-700  font-medium rounded-[4px] text-base px-7 py-3 mb-2"
            >
              Generate
            </button>
          </div>
          <Text className="text-black font-normal">
            Recommaned Summary Asset.
          </Text>
          <Text className="text-black text-sm">
            Click and use relevant asset for Professional Summary
          </Text>
          <div className="border border-gray-300 p-4 rounded-lg mt-2">
            <Text className="text-black">
              We Welcome Talents With The Following Traits Ability to think and
              work independently and collaboratively Being self-motivated,
              goal-oriented, and passionate about design Being highly
              responsible and accountable Strong work ethics
            </Text>
          </div>
        </section>
      </Modal>
    </div>
  );
};
