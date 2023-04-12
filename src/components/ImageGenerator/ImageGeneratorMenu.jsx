import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "./ImageGeneratorMenu.css";

// const ResizeHandle = (props) => {
//   return (
//     <div
//       {...props}
//       className='resize-handle'
//       style={{
//         ...props.style,
//         background: "#ccc",
//         width: "10px",
//         height: "100%",
//         right: "0",
//         cursor: "col-resize",
//       }}
//     />
//   );
// };

const ImageGeneratorMenu = ({ setShowMenu }) => {
  const [width, setWidth] = useState(200);

  // const handleResize = (event, { size }) => {
  //   setWidth(size.width);
  // };

  return (
    <div className='px-4 py-6 text-white shadow-lg transition-all duration-300 ease-in-out'>
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2'>Select a style</label>
        <select className='w-full p-2 border rounded'>
          {/* Add your style options here */}
          <option>Style 1</option>
          <option>Style 2</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2'>Select a model</label>
        <select className='w-full p-2 border rounded'>
          {/* Add your model options here */}
          <option>Model 1</option>
          <option>Model 2</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2'>Add a prompt</label>
        <input
          type='text'
          className='w-full p-2 border rounded'
          placeholder='Enter a prompt'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-bold mb-2'>Upload an image</label>
        <input type='file' className='w-full p-2 border rounded' />
      </div>

      <button
        className='block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => setShowMenu(false)}
      >
        Hide Menu
      </button>
    </div>
  );
};

export default ImageGeneratorMenu;
