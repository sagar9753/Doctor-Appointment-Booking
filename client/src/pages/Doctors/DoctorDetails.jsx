import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import docImg from '../../assets/images/doctor-img01.jpg'
import AboutDoctor from './AboutDoctor';
import Feedback from './Feedback';
import BookApointment from './BookApointment';
import Tabs from '../../components/Tabs/Tabs';

const DoctorDetails = () => {
  const [tab, setTab] = useState("About");
  const tabs = ["About", "Feedback", "Appointment"];
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

          {/* About, Feedback and appointments switching tabs */}
          <div className='w-[700px]'>
            <Tabs tab={tab} setTab={setTab} tabs={tabs} />
            <div className="mt-[50px]">
              {tab === "About" && <AboutDoctor />}
              {tab === "Feedback" && <Feedback />}
              {tab === "Appointment" && <BookApointment />}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DoctorDetails