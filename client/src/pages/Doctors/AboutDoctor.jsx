import React from 'react'
import { dateFormate } from '../../utils/dateFormate'

const AboutDoctor = () => {
    return (
        <div className='max-w-[700px]'>
            <div className='mt-[50px] w-full'>
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>About <span className='text-[#cd3c54]'>Akash Gupta</span> </h2>

                <p className='w-full text_para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ad facere cupiditate ab, quas impedit nostrum voluptatibus ipsum praesentium maiores dicta est eos dolorem aut, voluptas error ducimus minus eligendi quam. Voluptates fuga, assumenda nostrum dignissimos porro odit iusto officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ullam?</p>
            </div>

            <div className="mt-[30px] ">
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>Education</h2>

                <ul className='pt-4'>
                    <li className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-[30px]'>
                        <div>
                            <span className='text-[#cd3c54] font-[600]'>
                                {dateFormate('5-14-2010')}
                            </span>
                            <p className='font-medium'>
                                PHD in Surgen
                            </p>
                        </div>
                        <p className='font-medium'>
                            CHL Care Hospital, Indore
                        </p>
                    </li>
                    <li className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-[30px]'>
                        <div>
                            <span className='text-[#cd3c54] font-[600]'>
                                {dateFormate('9-10-2010')}
                            </span>
                            <p className='font-medium'>
                                PHD in Surgen
                            </p>
                        </div>
                        <p className='font-medium'>
                            CHL Care Hospital, Indore
                        </p>
                    </li>
                </ul>
            </div>

            <div className='mt-[50px]'>
                <h2 className='text-[20px] lg:text-[23px] font-[700]'>Experiance</h2>

                <ul className='flex justify-center flex-wrap gap-[30px] pt-4'>
                    <li className='p-4 bg-[#abe3e8] '>
                        <span className='text-irisBlueColor text-[15px]'>
                            {dateFormate('10-5-2008')} - {dateFormate('06-10-2014')}
                        </span>
                        <p className='text-[16px] text-[#525858]'>
                            Sr. Surgen
                        </p>
                        <p className='text-[15px] text-[#323333]'>
                            CHL Care Hospital, Indore
                        </p>
                    </li>
                    <li className='p-4 bg-[#abe3e8] '>
                        <span className='text-irisBlueColor text-[15px]'>
                            {dateFormate('10-5-2008')} - {dateFormate('06-10-2014')}
                        </span>
                        <p className='text-[16px] text-[#525858]'>
                            Sr. Surgen
                        </p>
                        <p className='text-[15px] text-[#323333]'>
                            CHL Care Hospital, Indore
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutDoctor