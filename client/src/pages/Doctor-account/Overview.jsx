import React from 'react'
import { useSelector } from 'react-redux'
import { FaStar } from "react-icons/fa";
import AboutDoctor from '../Doctors/AboutDoctor';

const Overview = () => {
  const { user } = useSelector((state) => state)
  return (
    <div className='mt-5'>
      <div className='flex items-center gap-4 mb-10'>
        <div className='max-w-[200px] max-h-[200px]'>
          <img src={user.photo} alt="" className='w-full h-[200px]' />
        </div>
        <div className='space-y-2'>
          <span className='bg-[#b1e2e6] text-irisBlueColor p-2 text-[13px] lg:text-[15px]'>
            Surgen
          </span>

          <h2 className='text-[20px] lg:text-[23px] font-[700] '>
            Sagar Rajput
          </h2>

          <div className='flex items-center text-[14px] '>
            <FaStar className='text-[#e6b635]' size={18} />
            <span>4.5</span>
            <span>(100)</span>
          </div>
          <p className="text_para">
            Doctor bio Hai yeh
          </p>
        </div>
      </div>
      <AboutDoctor />
    </div>
  )
}

export default Overview