import React, { useState } from 'react';
import Toast from "./Toast";

const MyToast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  
  return (
    <>
      <div>
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSave}
        >
          Save
        </button>

        {showToast && (
          <Toast
            message="Data saved successfully!"
            onClose={handleCloseToast}
          />
        )}
      </div>
    </>
  );
};

export default MyToast;
