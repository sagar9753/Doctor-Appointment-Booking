import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Doctor from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import MyAccount from '../pages/User-account/MyAccount'
import DoctorDashBoard from '../pages/Doctor-account/DoctorDashBoard'

import {Routes,Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Routers = () => {

  const {user,token,role} = useSelector((state)=>state);
  const isAuth = Boolean(token);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/doctors" element={<Doctor/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
      <Route path="/users/profile/me" element={isAuth && role === 'patient' ? <MyAccount/> : <Navigate to='/login' />} />
      <Route path="/doctors/profile/me" element={isAuth && role === 'doctor' ? <DoctorDashBoard/> : <Navigate to='/login' />} />
    </Routes>
  )
}

export default Routers