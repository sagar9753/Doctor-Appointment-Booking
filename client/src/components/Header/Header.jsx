import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'
import profileImg from '../../assets/images/avatar-icon.png'

const menuItems = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Doctors'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
  {
    path: '/services',
    display: 'Services'
  },
]

const Header = () => {
  const user = useSelector((state) => state.user)
  const token = useSelector((state) => state.token)
  const role = useSelector((state) => state.role)
  console.log(user, token, role);
  return (
    <header className="sticky top-0 flex items-center bg-[#97c0f0] bg-opacity-90 py-[15px]">
      <div className="header container flex items-center justify-between ">
        {/* ---------------LOGO---------------------- */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* ---------------MENU ITEM------------------- */}
        <ul className="menu text-[16px] flex items-center gap-[2rem] ">
          {
            menuItems.map((item, ind) => <li key={ind}>
              <NavLink
                to={item.path}
                className={navClass =>
                  navClass.isActive
                    ? "text-primaryColor font-[700]"
                    : "font-[500] hover:text-primaryColor"
                }
              >
                {item.display}
              </NavLink>
            </li>)
          }
        </ul>

        {/* Profile and login btn */}
        <div>
          {user ?
            <div className='flex items-center gap-2'>
              <h1 className='text-[17px] font-semibold text-[#9a1c51]'>{user.fullname}</h1>
              <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                <img className="rounded-3xl w-[37px] h-[37px]" src={user.photo} />
              </Link>
            </div> :
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded">
                Login
              </button>
            </Link>
          }

        </div>
      </div>
    </header>
  )
}

export default Header