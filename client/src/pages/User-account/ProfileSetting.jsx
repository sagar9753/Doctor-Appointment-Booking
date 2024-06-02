import { useState } from 'react'
import { toast } from 'react-toastify'
import BounceLoader from 'react-spinners/BeatLoader'
import { useSelector, useDispatch } from 'react-redux'

import {setLogin} from '../../state'
import uploadImgToCloudinary from '../../utils/uploadCloudinary'

const ProfileSetting = () => {
  const {user,token,role} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const [imageURL, setImageURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: user.fullname,
    email: user.email,
    photo: user.photo,
    gender: user.gender,
    bloodType:user.bloodType
  }) 

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

  const checkUpdatedOrNot = ()=>{
    console.log("Check or ");
    if(user.fullname !== formData.fullname)
      return true;
    else if(user.email !== formData.email)
      return true;
    else if(user.photo !== formData.photo)
      return true;
    else if(user.gender !== formData.gender)
      return true;
    else if(user.bloodType !== formData.bloodType)
      return true;

    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!checkUpdatedOrNot()){
      setLoading(false)
      toast.warning("You did not updated anything");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/users/${user._id}`, {
        method: 'put',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

      const { msg,data } = await res.json()

      if (!res.ok){
        throw new Error(msg)
      }
      setLoading(false);
      dispatch(setLogin({
        user:data,
        token:token,
        role:role
      }))
      toast.success(msg);
      // navigate('/login');

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
          {user.photo && <div className='rounded-full border-2 flex items-center justify-center '>
            <img src={user.photo} alt="" className='w-[50px] h-[50px] rounded-full' />
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

        <button onClick={()=>setLoading(true)} type='submit' className='btn w-full'>
          {loading ? <BounceLoader color='#fff' /> : 'Update Profile'}
        </button>
      </form>
    </div>
  )
}

export default ProfileSetting