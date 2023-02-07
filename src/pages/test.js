// import React, { useState } from 'react';

// const YourFormComponent = ({ idx, onChange, values }) => {
//   return (
//     <div key={idx}>
//       <input
//         type="text"
//         name={`field1-${idx}`}
//         onChange={onChange}
//         value={values[`field1-${idx}`]}
//       />
//       <input
//         type="text"
//         name={`field2-${idx}`}
//         onChange={onChange}
//         value={values[`field2-${idx}`]}
//       />
//     </div>
//   );
// };

// const AppendComponent = () => {
//   const [components, setComponents] = useState([0]);
//   const [values, setValues] = useState({});
//   console.log("🚀 ~ file: test.js:25 ~ AppendComponent ~ values", values)

//   const handleClick = () => {
//     setComponents([...components, components.length]);
//   };

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Add Form</button>
//       {components.map((comp, idx) => (
//         <YourFormComponent
//           key={idx}
//           idx={idx}
//           onChange={handleChange}
//           values={values}
//         />
//       ))}
//     </div>
//   );
// };

// export default AppendComponent;




import React, { useState } from "react";

const TextAreaWordCount = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.split(" ").filter(Boolean).length;

  return (
    <div>
      <textarea onChange={handleChange} value={text} />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default TextAreaWordCount;
