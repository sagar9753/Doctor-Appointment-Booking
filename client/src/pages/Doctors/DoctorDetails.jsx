import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import docImg from '../../assets/images/doctor-img02.jpg'
import AboutDoctor from './AboutDoctor';
import Feedback from './Feedback';

const DoctorDetails = () => {
  const [tab, setTab] = useState(true);
  return (
    <section>
      <div className="container flex justify-center">
        <div className='w-[1200px]'>

          <div className="flex gap-4 flex-wrap">
            <div className=''>
              <img src={docImg} alt="" className='w-[230px] h-[230px]' />
            </div>
            <div className="flex items-center">
              <div>
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>Akash Gupta</h2>
                <div className='flex items-center text-[13px] font-[600] py-2'>
                  <FaStar className='text-[#e6b635] ' />
                  <span>4.5</span>
                  <span>(200)</span>
                </div>
                <span className='bg-[#58bdc6] text-[#1b5b61] px-2 py-1 text-[14px] lg:text-[16px]'>Surgen</span>
                <div className='text-[15px] mt-3'>CHL Care Hospital Indore</div>
              </div>
            </div>
          </div>

          <div className='border-b border-solid border-[#05050534] mt-[50px]'>
            <button onClick={() => setTab(true)} className={`py-2 px-5 mr-5 text-[16px] text-[#333333] font-[600] ${tab && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${!tab && 'hover:text-[#899c8e] hover:border-b'}`}>
              About
            </button>
            <button onClick={() => setTab(false)} className={`py-2 px-5 mr-5 text-[16px] text-[#333333] font-[600] ${!tab && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab && 'hover:text-[#899c8e] hover:border-b'}`}>
              Feedback
            </button>
          </div>

          <div className="mt-[50px]">
            {
              tab ? <AboutDoctor /> : <Feedback />
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails