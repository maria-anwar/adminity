import React from "react";

const EmailField = (props)=>{
    return(
        <>
        <div className="flex flex-col gap-1 lg:gap-1.5 w-full">
                  <label
                    htmlFor="email"
                    className="text-[#3C4349] text-sm  font-Inter font-medium"
                  >
                    Email
                  </label>
                  <input
                    className="border  text-gray-700 rounded-sm shadow-sm py-1 lg:py-1.5 px-3 focus:outline-none focus:border-blue-500"
                    type="email"
                    name="email"
                    id="email"
                    value={props.emailValue}
                    onChange={props.onChange}
                    placeholder="jhon@gmail.com"
                  />
                </div>
        </>
    );
};
export default EmailField;
