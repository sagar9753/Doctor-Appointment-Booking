import React from 'react'

const BookApointment = () => {
    return (
        <div className='max-w-[400px]'>
            <div className='mt-[30px]'>
                <h2 className='text-[18px] lg:text-[23px] font-[700] mb-[20px]'>
                    Available Time Slots
                </h2>
                <ul className="mt-3 text-[#707070]">
                    <li className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-semibold">Sunday</p>
                        <p className="text-[15px] font-semibold">4:00 - 9:30 PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-semibold">Tuesday</p>
                        <p className="text-[15px] font-semibold">4:00 - 9:30 PM</p>
                    </li>
                    <li className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-semibold">Thrusday</p>
                        <p className="text-[15px] font-semibold">4:00 - 9:30 PM</p>
                    </li>
                </ul>
            </div>
            <div className='flex items-center justify-between mt-[30px]'>
                <p className="text-[17px] mt-0 font-bold">
                    Fees
                </p>
                <span className='text-[15px] font-bold'>
                    500 rs
                </span>
            </div>
            <button className='btn'>Book Appointment</button>
        </div>
    )
}

export default BookApointment