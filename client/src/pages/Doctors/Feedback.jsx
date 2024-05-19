import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import avatar from '../../assets/images/avatar-icon.png'
import { dateFormate } from '../../utils/dateFormate'
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
    const [showFeedForm, setShowFeedForm] = useState(false)
    return (
        <div className='max-w-[700px]'>
            <h2 className='text-[20px] lg:text-[23px] font-[700] mb-[20px]'>
                All reviews (272)
            </h2>
            <div className="flex flex-col justify-between gap-3 mb-[35px]">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-4'>
                        <div className="w-10 h-10 rounded-full">
                            <img className='w-full' src={avatar} alt="" />
                        </div>

                        <div>
                            <h4 className="text-[#cd3c54] text-[15px] font-[600]">Sagar Rajput</h4>
                            <p className="text-[14px]">
                                {dateFormate('02-13-2014')}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center text-[15px] gap-1 bg-[#3ccdcd] py-1 px-2 rounded-md'>
                        <FaStar className='text-[#e6b635]' />
                        <span>4.5</span>
                    </div>
                </div>
                <p className='text-[14px] text-[#363535]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, possimus?Lorem ipsum, dolor sit amet consectetur
                </p>
            </div>

            {!showFeedForm &&
                <button onClick={() => setShowFeedForm(!showFeedForm ? true : false)} className="btn">
                    Give Feedback
                </button>}
            {showFeedForm && <FeedbackForm />}
        </div>
    )
}

export default Feedback