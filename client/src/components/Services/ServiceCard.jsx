import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'

const ServiceCard = ({item, ind}) => {
  return (
    <>
        <div className='py-[30px] px-3 lg:px-5 border border-solid transition-all hover:bg-slate-100'>
            <h2 className="text-[25px] text-center font-[700]">{item.name}</h2>

            <p className="text-[16px] font-[400] mt-4">{item.desc}</p>

            <div className="flex items-center justify-center mt-[30px]">
                <Link to="/doctors"
                    className='rounded-full border border-solid border-black w-[44px] h-[44px] flex items-center justify-center hover:bg-blue-500 hover:border-none'        
                >
                    <BsArrowRight className="w-6 h-5" />
                </Link>
            </div>
        </div>
    </>
  )
}

export default ServiceCard