import React from "react";

const PhoneField = (props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 lg:gap-1.5 w-full">
        <div className=" sm:w-1/2 flex flex-col gap-1 ">
          <label
            htmlFor="email"
            className="text-[#3C4349] text-sm  font-Inter font-medium"
          >
          
            <span className="sm:block xxs:hidden">Phone</span>
            <span className="sm:hidden xxs:block">Country Code</span>
          </label>

          <select
            id="countryCode"
            name="countryCode"
            value={props.codeValue}
            onChange={props.onChange}
            className={`w-full block px-3 py-1.5 lg:py-[0.47rem] text-sm text-gray-900 border rounded-sm shadow-sm outline:none focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${props.codeErrors && "border-red-500 focus:border-red-500"}`}
          >
            <option selected>+92</option>
            <option value="US">+44</option>
            <option value="CA">+51</option>
            <option value="FR">+77</option>
            <option value="DE">+90</option>
          </select>
          {props.codeErrors && (
                        <div
                          id="fname"
                          className="text-red-500"
                        >
                          {props.codeErrors}
                        </div>
                      )}
        </div>

        <div className=" sm:w-1/2 flex flex-col gap-1">
          <label
            htmlFor="phone"
            className="sm:text-[#F2F5F7] text-[#3C4349] text-sm sm:text-medium font-Inter font-medium"
          >
            Phone
          </label>
          <input
            className= {`border text-gray-700 outline:none focus:outline-none rounded-sm shadow-sm py-1 lg:py-1.5 px-3  focus:border-blue-500 ${props.phoneErrors && "border-red-500 focus:border-red-500"}`}
            type="text"
            id="phone"
            name="phone"
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
          {props.phoneErrors && (
                        <div
                          id="fname"
                          className="text-red-500"
                        >
                          {props.phoneErrors}
                        </div>
                      )}
        </div>
      </div>
    </>
  );
};
export default PhoneField;
