import React from "react";

const SubmitBtn = (props) => {
  return (
    <>
      
        <button className="font-medium text-center text-white bg-[#1997BE] max-w-max px-8 py-1 xl:py-1.5 rounded-md shadow-md">
          {props.title}
        </button>
      
    </>
  );
};

export default SubmitBtn;
