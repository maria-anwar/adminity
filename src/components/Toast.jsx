import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
    // Use the useEffect hook to automatically close the toast after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed top-10 left-10 p-2 bg-gray-800 text-white rounded-md shadow-md">
      {message}
    </div>
  )
}

export default Toast