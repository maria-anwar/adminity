import React from 'react'

const TimeField = () => {
  return (
    <>
        <div className="flex items-center gap-2 w-full">
        <label className="w-[40%] xs:w-[30%] sm:w-[23%] md:w-[20%] lg:w-[17%] xl:w-[16.58%] 2xl:w-[14.5%] text-black font-medium md:font-semibold text-right">
          Time
        </label>
        <div className='flex gap-2 w-[60%] xs:w-[70%] sm:w-[77%] md:w-[80%] lg:w-[83%] xl:w-[83.58%]  2xl:w-[85.5%]'>

        <select
          id='startTime'
          name='startTime'
          className="w-[60%] xs:w-[70%] sm:w-[77%] md:w-[80%] lg:w-[83%] xl:w-[83.58%]  2xl:w-[85.5%] selection:block border border-[#C9C9C9] px-3 py-1.5 lg:py-[0.47rem] text-sm text-gray-900 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected></option>
          <option value="US">UK/London</option>
          <option value="CA">US</option>
          <option value="FR">UK/London</option>
          <option value="DE">UK/London</option>
        </select>

        <select
          id='endTime'
          name='endTime'
          className="w-[60%] xs:w-[70%] sm:w-[77%] md:w-[80%] lg:w-[83%] xl:w-[83.58%]  2xl:w-[85.5%] selection:block border border-[#C9C9C9] px-3 py-1.5 lg:py-[0.47rem] text-sm text-gray-900 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected></option>
          <option value="US">UK/London</option>
          <option value="CA">US</option>
          <option value="FR">UK/London</option>
          <option value="DE">UK/London</option>
        </select>

        <select
          id='breakTime'
          name='breakTime'
          className="w-[60%] xs:w-[70%] sm:w-[77%] md:w-[80%] lg:w-[83%] xl:w-[83.58%]  2xl:w-[85.5%] selection:block border border-[#C9C9C9] px-3 py-1.5 lg:py-[0.47rem] text-sm text-gray-900 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected></option>
          <option value="US">UK/London</option>
          <option value="CA">US</option>
          <option value="FR">UK/London</option>
          <option value="DE">UK/London</option>
        </select>
        </div>
        
      </div>
    </>
  )
}

export default TimeField