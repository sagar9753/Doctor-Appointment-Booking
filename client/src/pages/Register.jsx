import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BounceLoader from 'react-spinners/BeatLoader'
import { useSelector,useDispatch } from 'react-redux'

import uploadImgToCloudinary from '../utils/uploadCloudinary'
import { setLogin } from '../state'


const Register = () => {
  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    photo: imageURL,
    gender: "",
    role: "patient"
  })

  const navigate = useNavigate();

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleFile = async (e) => {
    const file = e.target.files[0]
    const data = await uploadImgToCloudinary(file);
    console.log(data.url);

    setImageURL(data.url);
    setFormData({ ...formData, photo: data.url });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/register`, {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const { msg } = await res.json()

      if (!res.ok)
        throw new Error(msg)

      setLoading(false);
      toast.success(msg);
      navigate('/login');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  return (
    <div className='px-5 lg:px-0 '>
      <div className="w-full max-w-[500px] mx-auto p-5 sm:p-10 shadow-md">
        <h2 className='text-center text-[20px] lg:text-[23px] font-[700] mb-[20px]'>
          Register
        </h2>
        <form onSubmit={handleSubmit} className='py-4'>
          <div className="mb-5">
            <input type="text" name="fullname" placeholder='Full Name' value={formData.fullname} onChange={handleForm}
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
            {imageURL && <div className='rounded-full border-2 flex items-center justify-center '>
              <img src={imageURL} alt="" className='w-[50px] h-[50px] rounded-full' />
            </div>}
            <div>
              <input type="file" name='photo' id='userPic'
                accept='.jpg, .png'
                onChange={handleFile}
                className="block file:cursor-pointer w-full text-sm file:py-2 file:px-4 file:rounded-md file:border-none file:font-semibold
              file:bg-[#a4a6a961] hover:file:bg-[#82838461]"
              />
            </div>
          </div>

          <button disabled={!imageURL} type='submit' onClick={()=>setLoading(true)} className='btn w-full'>
            {loading ? <BounceLoader className='text-[#0d1110]' /> : 'Register'}
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