import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import docImg from '../../assets/images/doctor-img01.jpg'
import AboutDoctor from './AboutDoctor';
import Feedback from './Feedback';
import BookApointment from './BookApointment';

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="container flex justify-center">
        <div className='w-full flex justify-center flex-wrap gap-10'>
            {/* Doctor card */}
          <div>
            <div class="bg-[#f0f0f0] rounded-t-[12px] ">
              <div>
                <img className='w-[300px] h-[300px]' src={docImg} alt="" />
              </div>

              <div className='p-4 flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-[20px] lg:text-[23px] font-[700] '>Akash Sharma</h2>
                  <div className='flex items-center text-[12px]'>
                    <FaStar className='text-[#e6b635] ' />
                    <span>4.2</span>
                    <span>(270)</span>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-[12px]'>CHL Care Hospital, Indore</span>

                    <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 text-[13px] lg:text-[15px]'>Surgen</span>
                </div>

              </div>
            </div>
          </div>

          {/* About and Feedback navbar */}
          <div className='w-[700px]'>
            <div className='flex justify-center border-b border-solid border-[#05050534] '>
              <button onClick={() => setTab("about")} 
              className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "about" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "about" && 'hover:text-[#899c8e] hover:border-b'}`}>
                About
              </button>
              <button onClick={() => setTab("feedback")} 
              className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "feedback" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "feedback" && 'hover:text-[#899c8e] hover:border-b'}`}>
                Feedback
              </button>
              <button onClick={() => setTab("book")} 
              className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "book" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "book" && 'hover:text-[#899c8e] hover:border-b'}`}>
                Appointment
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <AboutDoctor />}
              {tab === "feedback" && <Feedback />}
              {tab === "book" && <BookApointment />}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails