import React from 'react'
import { dateFormate } from '../../utils/dateFormate'
import fetchData from '../../utils/fetchData'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Appointments = ({ }) => {

  const { user } = useSelector(state => state);
  const { data, loading, error } = fetchData(`${import.meta.env.VITE_BACKEND}/bookings/get-appointments/${user._id}`);

  if(error)
    toast.error(error)
  return (
    <div className='h-[37vh]'>
      {!loading && !error && <table className='mt-5 w-full text-left text-sm text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
          <tr>
            <th scope='col' className='px-6 py-3'>Name</th>
            <th scope='col' className='px-6 py-3'>Gender</th>
            <th scope='col' className='px-6 py-3'>Payment</th>
            <th scope='col' className='px-6 py-3'>Price</th>
            <th scope='col' className='px-6 py-3'>Booked on</th>
          </tr>
        </thead>

        <tbody>
          {data?.map(item => (
            <tr key={item._id}>
              <th scope='row'
                className='flex items-center px-6 py-3 text-gray-900 whitespace-nowrap'
              >
                <img src={item.user.photo} alt=""
                  className='w-14 h-10 rounded-full'
                />
                <div className='pl-3'>
                  <div className='text-base font-semibold'>{item.user.fullname}</div>
                  <div className='text-normal text-gray-500'>{item.user.email}</div>
                </div>
              </th>

              <td className='px-6 py-3'>{item.user.gender}</td>
              <td className='px-6 py-3'>
                {item.isPaid ?
                  <div className='flex items-center'>
                    <div className='h-2.5 w-2.5 rounded-full bg-green-500 mr-2'></div>
                    Paid
                  </div> :
                  <div className='flex items-center'>
                    <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2'></div>
                    UnPaid
                  </div>
                }
              </td>
              <td className='px-6 py-3'>{item.fees}</td>
              <td className='px-6 py-3'>{dateFormate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  )
}

export default Appointments