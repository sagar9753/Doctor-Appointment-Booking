import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Doctor from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'

import {Routes,Route} from 'react-router-dom'

const Routers = () => {
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
    </Routes>
  )
}

export default Routers