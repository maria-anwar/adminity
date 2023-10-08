import React from 'react'

const SimpleField = (props) => {
  return (
   <>
    <div className="flex flex-col gap-1 lg:gap-1.5 w-full">
                  <label
                    htmlFor="email"
                    className="text-[#3C4349] text-sm  font-Inter font-medium"
                  >
                    {props.title}
                  </label>
                  <input
                    className={`border text-gray-700 rounded-sm shadow-sm py-1 lg:py-1.5 px-3 focus:outline-none focus:border-blue-500 ${props.errors && "border-red-500 focus:border-red-500"}`}
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="jhon@gmail.com"
                  />
                  {props.errors && (
                        <div
                          id={props.id}
                          className="text-red-500"
                        >
                          {props.errors}
                        </div>
                      )}
                </div>
    
   </>
  )
}

export default SimpleField