import { useState } from 'react'

import Tabs from '../../components/Tabs/Tabs'
import MyBookings from './MyBookings'
import ProfileSetting from './ProfileSetting'
import fetchData from '../../utils/fetchData'
import { toast } from 'react-toastify'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { useSelector } from 'react-redux'

const MyAccount = () => {
  const [tab, setTab] = useState("My Bookings");
  const user = useSelector(state => state.user)
  const tabs = ["My Bookings", "Profile Setting"]

  // const { data, loading, error } = fetchData(`${import.meta.env.VITE_BACKEND}/users/profile/me`)

  // if(error)
  //   toast.error(error)

  return (
    <div className='max-w-[1170px] mx-auto px-5 mt-9'>
      {/* {loading && <div className='h-[60vh]'>
        <PropagateLoader className='mt-5 text-center' color='#36d7b7' size={30}/>
      </div> } */}

      {/* {!loading && !error &&  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">

        <div className='pb-[50px]'>
          <div className='flex items-center justify-center'>
            <img src={user.photo} alt="" className='w-[130px] h-[130px] rounded-full border-2 border-solid border-primaryColor' />
          </div>

          <div className='text-center mt-3'>
            <h2 className='text-[18px] font-bold '>{user.fullname}</h2>
            <p className='text_para'>{user.email}</p>
            <p className='font-medium'>
              Blood Type : <span>{user.bloodType}</span>
            </p>
          </div>

          <div className='text-center mt-[30px] md:mt-[50px]'>
            <button className='btn bg-red-600'>
              Delete Account
            </button>
          </div>
        </div>
        {/* Profile and My Appointments switching tabs */}
        <div className='w-[450px]'>
          <Tabs tab={tab} setTab={setTab} tabs={tabs} />
          {tab === tabs[0] && <MyBookings />}
          {tab === tabs[1] && <ProfileSetting />}
        </div>

      </div>
      {/* } */}
    </div>
  )
}

export default MyAccount