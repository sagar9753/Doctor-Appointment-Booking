import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BounceLoader from 'react-spinners/BeatLoader'
import { useSelector, useDispatch } from 'react-redux'

import {setLogin} from '../../state'
import uploadImgToCloudinary from '../../utils/uploadCloudinary'

const ProfileSetting = () => {
  const {user,token} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const [imageURL, setImageURL] = useState(user.photo);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: user.fullname,
    email: user.email,
    photo: user.photo,
    gender: user.gender,
    bloodType:user.bloodType
  }) 

  const navigate = useNavigate();

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
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
    console.log(formData);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/users/${user._id}`, {
        method: 'put',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const { msg } = await res.json()

      if (!res.ok){
        console.log(msg);
        throw new Error(msg)
      }

      setLoading(false);
      dispatch(setLogin({
        user:res.data
      }))
      toast.success(msg);
      navigate('/login');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='py-4'>
        <div className="mb-5">
          <input type="text" name="fullname" placeholder='Full Name' value={formData.fullname} onChange={handleForm}
            className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
          />
        </div>
        <div className="mb-5">
          <input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleForm}
            className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
          />
        </div>
        {/* <div className='mb-5'>
          <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleForm}
            className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
          />
        </div> */}
        {/* <div className='mb-5'>
          <input type="text" name="bloodType" placeholder='Blood Type' value={formData.bloodType} onChange={handleForm}
            className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
          />
        </div> */}

        <div className="mb-5 flex items-center justify-between flex-wrap gap-4">
          <label className='text-[#3f3f3f] font-semibold '>
            Gender :
            <select name="gender"
              value={formData.gender}
              onChange={handleForm}
              className='ml-1 px-2 py-1 focus:outline-none bg-transparent shadow-lg'
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option >Female</option>
            </select>
          </label>
          <label className='text-[#3f3f3f] font-semibold '>
            Blood Type :
            <select name="bloodType"
              value={formData.bloodType}
              onChange={handleForm}
              className='ml-1 px-2 py-1 focus:outline-none bg-transparent shadow-lg'
            >
              <option >Select</option>
              <option >A+</option>
              <option >A-</option>
              <option >B+</option>
              <option >B-</option>
              <option >AB+</option>
              <option >AB-</option>
              <option >O+</option>
              <option >O-</option>
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

        <button disabled={(loading && true) || !imageURL} type='submit' className='btn w-full'>
          {loading ? <BounceLoader className='text-[#0d1110]' /> : 'Update Profile'}
        </button>
      </form>
    </div>
  )
}

export default ProfileSetting