import React, { useState, useRef } from 'react'
import { FaStar } from "react-icons/fa";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()
  }
  return (
    <form action="" className='mt-[30px]'>
        <h3 className='text-[17px] font-semibold'>Rate your Experience</h3>

        <div className='mt-2'>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button key={index} type='button'
                className={`${index <= (hover) ? 'text-[#dbce5a]' : 'text-[#8a8a87]'} bg-transparent border-none mr-1 text-[20px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <FaStar />
              </button>
            )
          })}
          <textarea className='focus:outline-none w-full p-2 rounded-md placeholder-black mt-2'
            rows={4}
            placeholder='Write your feedback'
            onChange={e => setFeedback(e.target.value)}
          />
          <button type='submit' onClick={handleSubmit} className='btn'>
            Submit Feedback
          </button>
        </div>
    </form>
  )
}

export default FeedbackForm