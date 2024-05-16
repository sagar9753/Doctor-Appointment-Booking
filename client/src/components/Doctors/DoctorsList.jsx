import React from 'react'
import {doctors} from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'

const DoctorsList = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10 mt-[50px]'>
        {doctors.map((doctor) =>(
            <DoctorCard key={doctor.id} doctor={doctor}/>
        ))}
    </div>
  )
}

export default DoctorsList