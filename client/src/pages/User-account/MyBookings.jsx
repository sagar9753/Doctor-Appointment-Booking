import React from 'react'
import fetchData from '../../utils/fetchData'
import DoctorCard from '../Doctors/DoctorCard'
import PropagateLoader from 'react-spinners/PropagateLoader'

const MyBookings = () => {
  const {data,loading, error} = fetchData(`${import.meta.env.VITE_BACKEND}/users/appointments/my-appointments`);
  console.log("bbbbb",data,error);

  return (
    <div className='mt-[30px]' >
      {loading && <PropagateLoader color='#36d7b7' size={20} className='mt-5 text-center'/>}
      {
        !loading && !error && <div className='grid grid-col-1 lg:grid-col-2 gap-4'>
            {data.map((doctor)=><DoctorCard doctor={doctor} key={doctor._id} />)}
        </div>
      }
      {!loading && !error && data.length === 0 && (
        <h2 className='text-center text-[20px] mt-5 font-semibold text-[#9a2f2f] '>You did not book any appointment</h2>
      )}
    </div>
  )
}

export default MyBookings