import React from "react";

const   NameField = (props)=>{
    return(
        <>
          
            <div className="flex flex-col sm:flex-row gap-1 lg:gap-1.5 w-full">
              <div className=" sm:w-1/2 flex flex-col gap-1">
              <label
                htmlForfor="fname"
                className="text-[#3C4349] text-sm sm:text-medium font-Inter font-medium"
              >
                Full Name
              </label>
              <input
                  className={`border text-gray-700 rounded-sm shadow-sm py-1 lg:py-1.5 px-3 focus:outline-none focus:border-blue-500 ${props.fnameErrors && "border-red-500 focus:border-red-500"}`}
                  type="text"
                  id="fname"
                  name="fname"
                  value={props.fnamevalue}
                  onChange={props.onChange}
                  placeholder={props.fnplaceholder}
                />
                {props.fnameErrors && (
                        <div
                          id="fname"
                          className="text-red-500"
                        >
                          {props.fnameErrors}
                        </div>
                      )}
              </div>

              <div className=" sm:w-1/2 flex flex-col gap-1">
              <label
                htmlForfor="fname"
                className="sm:text-[#F2F5F7] text-[#3C4349] text-sm sm:text-medium font-Inter font-medium"
              >
                Last Name
              </label>
                <input
                  className={`border text-gray-700 rounded-sm shadow-sm py-1 lg:py-1.5 px-3 focus:outline-none focus:border-blue-500 ${props.lnameErrors && "border-red-500 focus:border-red-500"}`}
                  type="text"
                  id="lname"
                  name="lname"
                  value={props.lnamevalue}
                  onChange={props.onChange}
                  placeholder={props.lnplaceholder}
                />
                {props.lnameErrors && (
                        <div
                          id="fname"
                          className="text-red-500"
                        >
                          {props.lnameErrors}
                        </div>
                      )}
              </div>
            </div>
        </>
    );
};
export default NameField