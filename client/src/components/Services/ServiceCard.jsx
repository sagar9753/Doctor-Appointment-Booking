import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ item, ind }) => {
    return (
        <>
            <div className='py-[30px] px-3 lg:px-5 border border-solid transition-all hover:bg-[#97b1ce]'>
                <h2 className="text-[23px] text-center font-[700]">{item.name}</h2>

                <p className="text-[16px] font-[400] mt-4">{item.desc}</p>

                <div className="flex items-center justify-center mt-[30px]">
                    <Link to="/doctors" className='flex items-center gap-1 px-2 py-2 hover:bg-[#83a8cc]'>
                        <button
                            className="flex items-center text-[15px] font-[700] ">
                            Learn More
                        </button>
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ServiceCard