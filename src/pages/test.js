import dynamic from "next/dynamic";
import { useState } from "react";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })
// const theme = "snow";
// const modules = {
//   toolbar: [
//     ["bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     ["link"],
//   ],
// };
// export default function Test() {
//   return (<div> <ReactQuill theme="snow" modules={modules} placeholder="Write description" /></div>)
// }


const Editor = () => {
  const [content, setContent] = useState('');
  console.log("🚀 ~ file: test.js:22 ~ Editor ~ content", content)

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default Editor;
