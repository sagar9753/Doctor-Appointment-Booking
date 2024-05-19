import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className='px-5 lg:px-0 h-[65vh] flex items-center'>
      <div className="w-full max-w-[500px] mx-auto p-5 sm:p-10 shadow-md">
        <h2 className='text-center text-[20px] lg:text-[23px] font-[700] mb-[20px]'>
          Login
        </h2>
        <form className='py-4'>
          <div className="mb-5">
            <input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleForm}
              className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
              required
            />
          </div>
          <div>
            <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleForm}
              className='w-full p-2 border-b border-solid border-[#67696c61] text-[#3f3f3f] placeholder:text-[#5b5b5b] bg-transparent focus:outline-none focus:border-b-blue-600'
              required
            />
          </div>
          <button type='submit' className='btn w-full'>
            Login
          </button>
          <p className='mt-[10px]'>Don't have account?
            <Link to="/register" className='text-blue-500 font-semibold hover:text-blue-700'>  Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login