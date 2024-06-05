import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'
import fetchData from '../../utils/fetchData'
import PropagateLoader from 'react-spinners/PropagateLoader'

const DoctorsList = () => {
  const { data, loading, error } = fetchData(`${import.meta.env.VITE_BACKEND}/doctors`)
  return (
    <div>
      {loading && <div className='h-[60vh]'>
        <PropagateLoader className='mt-5 text-center' color='#36d7b7' size={30} />
      </div>}
      <div className='flex flex-wrap justify-center gap-10 mt-[50px]'>
        {data.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default DoctorsList