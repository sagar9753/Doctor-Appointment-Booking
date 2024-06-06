import React, { useState } from 'react'
import Tabs from '../../components/Tabs/Tabs';
import { useSelector } from 'react-redux'
import Overview from './Overview'
import Appointments from './Appointments'
import { IoIosWarning } from "react-icons/io";
import Profile from './Profile';

const DoctorDashBoard = () => {
  const [tab, setTab] = useState("Overview");
  const tabs = ["Overview", "Appointments", "Profile"]
  const { user, role } = useSelector((state) => state)
  return (
    <div className='container'>
      <div>
        <Tabs tab={tab} setTab={setTab} tabs={tabs} />
        <div className='max-w-[700px] mx-auto'>
          {user.isApproved === "pending" && <div className='flex items-center mt-2 gap-2 justify-center bg-[#353535] text-[#ddbf16] rounded-md p-2'>
            <IoIosWarning size={20} />
            <p className='text-[14px]'>You are not approved for doctor.For Approvel fill all the info</p>
          </div>}
          <button className="btn bg-red-600">Delete Account</button>
          {tab === tabs[0] && <Overview />}
          {tab === tabs[1] && <Appointments />}
          {tab === tabs[2] && <Profile />}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashBoard