import React from 'react'
import convertTime from '../../utils/convertTime'

const BookApointment = ({ doctorId,timeSlots,fees }) => {
    console.log(doctorId);
    return (
        <div className='max-w-[400px] px-5'>
            <div className='mt-[30px]'>
                <h2 className='text-[18px] lg:text-[23px] font-[700] mb-[20px]'>
                    Available Time Slots
                </h2>
                <ul className="mt-3 text-[#707070]">
                    {timeSlots.map((item, ind) => <li key={ind} className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-semibold">{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
                        <p className="text-[15px] font-semibold">{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p>
                    </li>)}
                </ul>
            </div>
            <div className='flex items-center justify-between mt-[30px]'>
                <p className="text-[17px] mt-0 font-bold">
                    Fees
                </p>
                <span className='text-[15px] font-bold'>
                    {fees} Rs
                </span>
            </div>
            <button className='btn'>Book Appointment</button>
        </div>
    )
}

export default BookApointment