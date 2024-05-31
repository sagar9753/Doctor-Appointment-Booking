import { useState } from 'react'

import userImg from '../../assets/images/doctor-img01.jpg'
import MyBookings from './MyBookings'
import ProfileSetting from './ProfileSetting'
import fetchData from '../../utils/fetchData'
import { toast } from 'react-toastify'
import PropagateLoader from 'react-spinners/PropagateLoader' 

const MyAccount = () => {
  const [tab, setTab] = useState("booking");

  const { data, loading, error } = fetchData(`${import.meta.env.VITE_BACKEND}/users/profile/me`)

  if(error)
    toast.error(error)

  return (
    <div className='flex justify-center container px-5 mt-9 '>
      {loading && <div className='h-[60vh]'>
        <PropagateLoader className='mt-5 text-center' color='#36d7b7' size={30}/>
      </div> }

      {
        !loading && !error && <div className="flex gap-[100px]">

          <div className='pb-[50px]'>
            <div className='flex items-center justify-center'>
              <img src={data.photo} alt="" className='w-[130px] h-[130px] rounded-full border-2 border-solid border-primaryColor' />
            </div>

            <div className='text-center mt-3'>
              <h2 className='text-[18px] font-bold '>{data.fullname}</h2>
              <p className='text_para'>{data.email}</p>
              <p className='font-medium'>
                Blood Type : <span>O+</span>
              </p>
            </div>

            <div className='text-center mt-[30px] md:mt-[50px]'>
              <button className='btn bg-red-600'>
                Delete Account
              </button>
            </div>
          </div>
          <div>
            <div className='flex justify-center border-b border-solid border-[#05050534] '>
              <button onClick={() => setTab("booking")}
                className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "booking" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "booking" && 'hover:text-[#899c8e] hover:border-b'}`}>
                My Bookings
              </button>
              <button onClick={() => setTab("setting")}
                className={`py-2 px-4 text-[16px] text-[#333333] font-[600] ${tab === "setting" && 'border-b border-solid border-blue-600 text-blue-600 font-[800]'} ${tab !== "setting" && 'hover:text-[#899c8e] hover:border-b'}`}>
                Profile Setting
              </button>
            </div>
            {tab === "booking" && <MyBookings />}
            {tab === "setting" && <ProfileSetting />}
          </div>

        </div>
      }
    </div>
  )
}

export default MyAccount