import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { dateFormate } from '../../utils/dateFormate'
import FeedbackForm from './FeedbackForm';

const Feedback = ({ reviews, totalRating }) => {
    const [showFeedForm, setShowFeedForm] = useState(false)
    console.log(reviews, totalRating);
    return (
        <div className='max-w-[700px]'>
            <h2 className='text-[20px] lg:text-[23px] font-[700] mb-[20px]'>
                All reviews ({totalRating})
            </h2>
            {
                reviews.map((item, ind) => <div key={ind} className="flex flex-col justify-between gap-3 mb-[35px]">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-4'>
                            <img className='w-10 h-10 rounded-full' src={item.user.photo} alt="" />

                            <div>
                                <h4 className="text-[#cd3c54] text-[15px] font-[600]">{item.user.fullname}</h4>
                                <p className="text-[14px]">
                                    {dateFormate(item.createdAt)}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center text-[15px] gap-1 bg-[#3ccdcd] py-1 px-2 rounded-md'>
                            <FaStar className='text-[#e6b635]' />
                            <span>{item.rating}</span>
                        </div>
                    </div>
                    <p className='text-[14px] text-[#363535]'>
                        {item.feedback}
                    </p>
                </div>)
            }

            {!showFeedForm &&
                <button onClick={() => setShowFeedForm(!showFeedForm ? true : false)} className="btn">
                    Give Feedback
                </button>}
            {showFeedForm && <FeedbackForm />}
        </div>
    )
}

export default Feedback