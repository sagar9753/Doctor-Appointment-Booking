import React from 'react'
import { IoSearch } from "react-icons/io5";
import DoctorsList from '../../components/Doctors/DoctorsList';


const Doctor = () => {
  return (
    <>
      <section>
        <div className="container text-center">
          <h1 className="heading">Find A Doctor</h1>
          <div className="flex items-center justify-between max-w-[500px] mt-[30px] mx-auto rounded-md bg-[#4f52552c]">
            <IoSearch className='w-9 h-9 pl-[12px] text-[#2b2a2a]' />
            <input type="search" className='py-2 px-2 bg-transparent w-full focus:outline-none placeholder-[#2b2a2a]' placeholder='Search Doctor' />
            <button className='px-3 py-2 bg-blue-500 rounded-r-md text-white hover:bg-blue-600'>Search</button>
          </div>
        </div>
        <div className="container">
          <DoctorsList />
        </div>
      </section>
    </>
  )
}

export default Doctor