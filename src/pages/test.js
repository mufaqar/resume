// import React, { useState } from 'react';

// const App = () => {
//   const [forms, setForms] = useState([{ id: 1, name: '', email: '' }]);

//   const handleClick = () => {
//     setForms([...forms, { id: forms.length + 1, name: '', email: '' }]);
//   };

//   const handleChange = (e, index) => {
//     const updatedForms = [...forms];
//     updatedForms[index][e.target.name] = e.target.value;
//     setForms(updatedForms);
//   };

//   const handleRemove = index => {
//     setForms(forms.filter((form, i) => i !== index));
//   };

//   return (
//     <div>
//       {forms.map((form, index) => (
//         <div key={form.id}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={e => handleChange(e, index)}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={e => handleChange(e, index)}
//           />
//           <button onClick={() => handleRemove(index)}>Remove</button>
//         </div>
//       ))}
//       <button onClick={handleClick}>Add Form</button>
//     </div>
//   );
// };

// export default App;




import React, { useState } from 'react';
import ReactQuill from 'react-quill';


const App = () => {
  const [forms, setForms] = useState([{ id: 1, description: '' }]);

  const handleClick = () => {
    setForms([...forms, { id: forms.length + 1, description: '' }]);
  };

  const handleChange = (value, index) => {
    const updatedForms = [...forms];
    updatedForms[index].description = value;
    setForms(updatedForms);
  };

  const handleRemove = index => {
    setForms(forms.filter((form, i) => i !== index));
  };

  return (
    <div>
      {forms.map((form, index) => (
        <div key={form.id}>
          <ReactQuill
            value={form.description}
            onChange={(value) => handleChange(value, index)}
          />
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleClick}>Add Form</button>
    </div>
  );
};

export default App;
