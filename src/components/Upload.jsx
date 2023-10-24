import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const openFileSelector = () => {
    fileInputRef.current.click();
  };

  // const [selectedFile, setSelectedFile] = useState(null);
  // const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     setSelectedFile(file);
  //   };

  //   const handleUpload = () => {
  //     if (selectedFile) {
  //       console.log('Selected file:', selectedFile);
  //     } else {
  //       console.log('No file selected.');
  //     }
  //   };

  return (
    <>
      {/* <div className="flex flex-col items-center mt-4">
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt" // Define accepted file types here
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label htmlFor="fileInput" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Add
      </label>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div> */}
      <div>
        <label onClick={openFileSelector} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            className="text-[#1997BE] font-semibold w-3 h-3"
            icon={faPlus}
          />{" "}
          Click to select a file
        </label>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="*.*"
          onChange={handleFileSelect}
        />
        <p>Selected File: {selectedFile ? selectedFile.name : "None"}</p>
      </div>
    </>
  );
};

export default Upload;
