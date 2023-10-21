import React from 'react'
import ProfileNavbar from "../../components/ProfileNavbar";

const Unavailability = () => {
  return (
    <>
 <section className="  xxs:px-3 xs:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="bg-[#F2F5F7] flex flex-col gap-4 mt-3 xs:mt-3 md:mt-4 mb-10 lg:mb-16 py-2 md:py-5 lg:py-6 rounded-md shadow-md">
          <ProfileNavbar />
          <div className="flex flex-col xxs:px-4 xs:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-36">
          Unavailability
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Unavailability