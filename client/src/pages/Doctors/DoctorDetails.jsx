import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import docImg from '../../assets/images/doctor-img01.jpg'
import AboutDoctor from './AboutDoctor';
import Feedback from './Feedback';
import BookApointment from './BookApointment';
import Tabs from '../../components/Tabs/Tabs';
import fetchData from '../../utils/fetchData';
import { useParams } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader'


const DoctorDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = fetchData(`${import.meta.env.VITE_BACKEND}/doctors/${id}`)
  const { fullname, about, speciality, photo, avgRating, totalRating, qualifications, experiences,timeSlots,fees } = data

  const [tab, setTab] = useState("About");
  const tabs = ["About", "Feedback", "Appointment"];
  return (
    <section>
      {loading && <PropagateLoader color='#36d7b7' size={20} className='mt-5 text-center' />}

      {!loading && !error && data.length !== 0 &&
        <div className="container flex justify-center">
          <div className='w-full flex justify-center flex-wrap gap-10'>
            {/* Doctor card */}
            <div>
              <div class="bg-[#f0f0f0] rounded-t-[12px] ">
                <div>
                  <img className='w-[300px] h-[300px]' src={photo} alt="" />
                </div>

                <div className='p-4 flex flex-col gap-2'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[20px] lg:text-[23px] font-[700] '>{fullname}</h2>
                    <div className='flex items-center text-[12px]'>
                      <FaStar className='text-[#e6b635] ' />
                      <span>{avgRating}</span>
                      <span>({totalRating})</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-[12px]'>{experiences && experiences[0]?.hospital}</span>

                    <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 text-[13px] lg:text-[15px]'>{speciality}</span>
                  </div>

                </div>
              </div>
            </div>

            {/* About, Feedback and appointments switching tabs */}
            <div className='w-[700px]'>
              <Tabs tab={tab} setTab={setTab} tabs={tabs} />
              <div className="mt-[50px]">
                {tab === "About" && <AboutDoctor fullname={fullname} about={about} qualifications={qualifications} experiences={experiences} />}
                {tab === "Feedback" && <Feedback />}
                {tab === "Appointment" && <BookApointment timeSlots={timeSlots} fees={fees} />}
              </div>
            </div>

          </div>
        </div>
      }
    </section>
  )
}

export default DoctorDetails