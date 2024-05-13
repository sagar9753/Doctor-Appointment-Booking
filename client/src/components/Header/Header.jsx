import { NavLink, Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import profileImg from '../../assets/images/avatar-icon.png'
import { useEffect, useRef } from 'react'

const menuItems = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find Doctor'
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

  return (
    <header className="header sticky top-0 flex items-center bg-[#e2e0ce] py-[15px]">
      <div className="container flex items-center justify-between ">
        {/* ---------------LOGO---------------------- */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* ---------------MENU ITEM------------------- */}
        <ul className="menu text-[16px] flex items-center gap-[2rem]">
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
        <div className="flex items-center gap-4">
          <div className='hidden'>
            <Link to="/">
              <img className="w-[37px]" src={profileImg} />
            </Link>
          </div>

          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header