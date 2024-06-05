import React from 'react'
import { dateFormate } from '../../utils/dateFormate'

const AboutDoctor = ({ user }) => {
    console.log(user);
    return (
        <div className='max-w-[700px]'>
            <div className='mt-[50px] w-full'>
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>About <span className='text-[#cd3c54]'>{user.fullname}</span> </h2>

                <p className='w-full text_para'>
                    {user.about}
                </p>
            </div>

            <div className="mt-[30px] ">
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>Education</h2>

                <ul className='pt-4'>
                    {user.qualifications.map((item, ind) => {
                        return <li key={ind} className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-[30px]'>
                            <div>
                                <span className='text-[#cd3c54] font-[600]'>
                                    {dateFormate(item.startingDate)} - {dateFormate(item.endingDate)}
                                </span>
                                <p className='font-medium'>
                                    {item.degree}
                                </p>
                            </div>
                            <p className='font-medium'>
                                {item.university}
                            </p>
                        </li>
                    })}
                </ul>
            </div>

            <div className='mt-[50px]'>
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>Experiance</h2>

                <ul className='flex justify-center flex-wrap gap-[30px] pt-4'>
                    {user.experiences.map((item, ind) => <li key={ind} className='p-4 bg-[#abe3e8] '>
                        <span className='text-irisBlueColor text-[15px]'>
                            {dateFormate(item.startingDate)} - {dateFormate(item.endingDate)}
                        </span>
                        <p className='text-[16px] text-[#525858]'>
                            {item.position}
                        </p>
                        <p className='text-[15px] text-[#323333]'>
                            {item.hospital}
                        </p>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default AboutDoctor