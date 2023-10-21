import React from "react";
import close from "../assets/images/close.png";
import DropField from "../components/schedule-fields/DropField";
import TimeField from "../components/schedule-fields/TimeField";
import SubmitBtn from "../components/buttons/SubmitBtn";
const CreateSchedule = () => {
  return (
    <>
      <section className="w-screen h-screen">
        <div className="px-2 sm:px-4 lg:px-6 xl:px-8 flex justify-between items-center py-4 xl:py-6 w-full bg-[#D7E5C6]">
          <div className="text-black text-lg xl:text-2xl font-bold md:font-bold ">
            Create New Shift
          </div>
          <div className="flex items-center justify-center">
            <img
              src={close}
              alt="close-tab-icon"
              className="w-5 h-5 xl:w-8 xl:h-8"
            />
          </div>
        </div>

        <div className="w-full bg-[#F2F5F7] border flex md:justify-center px-2.5 xs:px-10 sm:px-20 md:px-24 lg:px-32 xl:px-64 2xl:px-96 pt-14 pb-10">
          

            <form className="flex flex-col gap-2.5 md:gap-3 w-full">
              <DropField title={"Date"} id={"date"} name={"date"} />
              <TimeField />
              <DropField title={"Location"} id={"location"} name={"location"} />
              <DropField title={"Position"} id={"position"} name={"position"} />
              <DropField
                title={"Employee/s"}
                id={"employee"}
                name={"employee"}
              />
              
              <div className="flex justify-end pt-4 xs:pt-8 lg:pt-10 xl:pt-12"><SubmitBtn title={'Create'} /></div>
            </form>
          </div>
      </section>
    </>
  );
};

export default CreateSchedule;
