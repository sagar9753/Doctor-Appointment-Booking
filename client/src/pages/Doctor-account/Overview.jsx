import React from 'react'
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import AboutDoctor from '../Doctors/AboutDoctor';

const Overview = () => {
  const { user } = useSelector((state) => state)
  const { fullname, about, speciality, photo, avgRating, totalRating, qualifications, experiences } = user
  return (
    <div className='mt-5'>
      <div className='flex flex-wrap items-center gap-4 mb-10'>
        <div className='max-w-[200px] max-h-[200px]'>
          <img src={photo} alt="" className='w-full h-[200px]' />
        </div>
        <div className='space-y-2'>
          <span className='bg-[#b1e2e6] text-irisBlueColor p-2 text-[13px] lg:text-[15px]'>
            {speciality}
          </span>

          <h2 className='text-[20px] lg:text-[23px] font-[700] '>
            {fullname}
          </h2>

          <div className='flex items-center text-[14px] '>
            <FaStar className='text-[#e6b635]' size={18} />
            <span>{avgRating}</span>
            <span>({totalRating})</span>
          </div>
          <p className="text_para">
            {experiences && experiences[0]?.hospital}
          </p>
        </div>
      </div>
      <AboutDoctor fullname={fullname} about={about} qualifications={qualifications} experiences={experiences} />
    </div>
  )
}

export default Overview