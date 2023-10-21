import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default CSS


const MyCalendar = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return (
    <>
      
      <div className="w-1/2 mx-auto p-4">
      <h1 className="text-2xl mb-4">Calendar with Datepicker</h1>
      <div className="mb-4">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="mb-4">
        <p>Selected Date: {selectedDate.toDateString()}</p>
        {selectedDate.toDateString() === currentDate.toDateString() ? (
          <p>Data for the current date: Your information goes here</p>
        ) : (
          <p>Data for the selected date: Your information for other dates</p>
        )}
      </div>
    </div>
    
    </>
  )
}

export default MyCalendar