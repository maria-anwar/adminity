import React from "react";

const DropdownField = (props)=>{
    return(
        <>
            <div className="flex flex-col gap-1 lg:gap-1.5 w-full">
                  <label
                    htmlFor="email"
                    className="text-[#3C4349] text-sm  font-Inter font-medium"
                  >
                    {props.title}
                  </label>
                  <select
                      id={props.id}
                      name={props.name}
                      value={props.value}
                      onChange={props.onChange}
                      className="w-full selection:block p-1.5 text-sm text-gray-900 border rounded-sm shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Asia/Karachi</option>
                      <option value="US">UK/London</option>
                      <option value="CA">US</option>
                      <option value="FR">UK/London</option>
                      <option value="DE">UK/London</option>
                    </select>
                </div>
        </>
    );
};
export default DropdownField;