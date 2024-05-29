import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../state';
import BounceLoader from 'react-spinners/BeatLoader'

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/login`, {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const result = await res.json()

      if (!res.ok)
        throw new Error(result.msg)

      dispatch(setLogin({
        user: result.data,
        token: result.token,
        role: result.role
      }))

      setLoading(false);
      toast.success(result.msg);
      navigate('/home');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  }
  return (
    <div className='px-5 lg:px-0 h-[65vh] flex items-center'>
      <div className="w-full max-w-[500px] mx-auto p-5 sm:p-10 shadow-md">
        <h2 className='text-center text-[20px] lg:text-[23px] font-[700] mb-[20px]'>
          Login
        </h2>
        <form onSubmit={handleSubmit} className='py-4'>
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
          {loading ? <BounceLoader className='text-[#0d1110]' /> : 'Login'}
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