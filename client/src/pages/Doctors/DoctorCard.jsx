import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../../assets/images/hero-img01.png'
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-[#f0f0f0] rounded-t-[12px] w-[330px] ">
      <div>
        <img className='w-[330px] h-[330px]' src={doctor.photo} alt="" />
      </div>

      <div className='p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <h2 className='text-[20px] lg:text-[23px] font-[700] '>{doctor.fullname}</h2>
          <div className='flex items-center text-[12px]'>
            <FaStar className='text-[#e6b635] ' />
            <span>{doctor.avgRating}</span>
            <span>({doctor.totalRating})</span>
          </div>
        </div>

        <span className='text-[12px]'>{doctor.experiences && doctor.experiences[0]?.hospital}</span>

        <div className='flex justify-between'>
          <span className='bg-[#CCF0F3] text-irisBlueColor p-2 text-[13px] lg:text-[15px]'>{doctor.speciality}</span>
          <Link to= {`/doctors/${doctor._id}`} className='flex items-center gap-1 px-2 py-2 hover:bg-[#d1d1cf]'>
            <button
              className="flex items-center text-[15px] font-[700] ">
              Know More
            </button>
            <FaArrowRightLong />
          </Link>
        </div>

      </div>
    </div>

  )
}

export default DoctorCard