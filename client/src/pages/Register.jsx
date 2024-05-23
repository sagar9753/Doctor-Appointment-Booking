import { useState } from 'react'
import { Link } from 'react-router-dom'

import regImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img01.jpg'

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient"
  })
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFile = async (e) => {
    const file = e.target.files[0]
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className='px-5 lg:px-0 '>
      <div className="w-full max-w-[500px] mx-auto p-5 sm:p-10 shadow-md">
        <h2 className='text-center text-[20px] lg:text-[23px] font-[700] mb-[20px]'>
          Register
        </h2>
        <form onSubmit={handleSubmit} className='py-4'>
          <div className="mb-5">
            <input type="text" name="fullName" placeholder='Full Name' value={formData.fullName} onChange={handleForm}
              className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
              required
            />
          </div>
          <div className="mb-5">
            <input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleForm}
              className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
              required
            />
          </div>
          <div className='mb-5'>
            <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleForm}
              className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
              required
            />
          </div>

          <div className="mb-5 flex items-center justify-between flex-wrap gap-4">
            <label className='text-[#3f3f3f] font-semibold '>
              Your Role :
              <select name="role"
                value={formData.role}
                onChange={handleForm}
                className='ml-1 px-2 py-1 focus:outline-none bg-transparent shadow-lg'
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>
            <label className='text-[#3f3f3f] font-semibold '>
              Gender :
              <select name="gender"
                value={formData.gender}
                onChange={handleForm}
                className='ml-1 px-2 py-1 focus:outline-none bg-transparent shadow-lg'
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>

          <div className=' flex items-center gap-3'>
            <div className='w-[50px] h-[50px] rounded-full border-2 flex items-center justify-center '>
              <img src={avatar} alt="" className='w-full rounded-full' />
            </div>
            <div>
              <input type="file" name='photo' id='userPic'
                accept='.jpg, .png'
                onChange={handleFile}
                className="block file:cursor-pointer w-full text-sm file:py-2 file:px-4 file:rounded-md file:border-none file:font-semibold
              file:bg-[#a4a6a961] hover:file:bg-[#82838461]"
              />
            </div>
          </div>

          <button type='submit' className='btn w-full'>
            Register
          </button>
          <p className='mt-[10px]'>Already have an account?
            <Link to="/login" className='text-blue-500 font-semibold hover:text-blue-700'>  Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register