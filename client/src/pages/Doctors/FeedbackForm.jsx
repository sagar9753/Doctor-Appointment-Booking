import React, { useState, useRef } from 'react'
import { FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import BounceLoader from 'react-spinners/BeatLoader'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [loading,setLoading] = useState(false)
  const feedback = useRef();

  const {token} = useSelector(state=>state)
  const {id} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(!rating || !feedback.current.value){
      setLoading(false)
      toast.error("Rating and feedback are required")
      return
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/doctors/${id}/reviews`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body:JSON.stringify({rating,feedback:feedback.current.value})
      })

      const { msg } = await res.json()

      if (!res.ok)
        throw new Error(msg)

      setLoading(false);
      toast.success(msg);
      // navigate('/login');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
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
          ref={feedback}
        />
        <button type='submit' onClick={handleSubmit} className='btn'>
        {loading ? <BounceLoader color='#ffff' /> : 'Submit Review'}
        </button> 
      </div>
    </form>
  )
}

export default FeedbackForm