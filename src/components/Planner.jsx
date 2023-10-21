import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the default CSS

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const schedule = [
    {
        id: '1',
        date: selectedDate,
        position: 'dev ops'

    }
  ]
  return (
    <>
      <div className="flex justify-center items-start border py-10 px-20">
        <div className=" flex flex-col gap-1 rounded-md bg-[#D7E5C6] p-4 w-48 ">
          <div className="mb-4">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="bg-[#D7E5C6]"
            />
          </div>
          <div className="w-full flex justify-between">
            <div>created on</div>
            <div>icon</div>
          </div>
          <div>senior devops</div>
        </div>
      </div>
    </>
  );
};

export default Planner;
