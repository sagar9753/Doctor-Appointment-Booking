import React, { useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";

import DoctorCard from './DoctorCard';
import fetchData from '../../utils/fetchData'
import PropagateLoader from 'react-spinners/PropagateLoader'


const Doctor = () => {
  const [query, setQuery] = useState("");
  const searchText = useRef();

  const handleSearch = () => {
    setQuery(searchText.current.value)
  }

  const { data, loading, error } = fetchData(`${import.meta.env.VITE_BACKEND}/doctors?query=${query}`)

  return (
    <>
      <section>
        <div className="container text-center">
          <h1 className="heading">Find A Doctor</h1>
          <div className="flex items-center justify-between max-w-[500px] mt-[30px] mx-auto rounded-md bg-[#9d9fa02c]">
            <IoSearch className='w-9 h-9 pl-[12px] text-[#afa7a7]' />
            <input type="search" placeholder='Search Doctor'
              className='py-2 px-2 bg-transparent w-full focus:outline-none placeholder-[#afa7a7]'
              ref={searchText}
            />
            <button onClick={handleSearch} className='px-3 py-2 bg-blue-500 rounded-r-md text-white hover:bg-blue-600'>Search</button>
          </div>
        </div>
        <div className="container">
          {loading && <div className='h-[60vh]'>
            <PropagateLoader className='mt-5 text-center' color='#36d7b7' size={30} />
          </div>}

          {!loading && !error && <div className='flex flex-wrap justify-center gap-10 mt-[50px]'>
            {data.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>}
        </div>
      </section>
    </>
  )
}

export default Doctor