import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

import logo from '../../assets/images/logo.png'

const socialLinks = [
  {
    path: 'https://www.instagram.com/_sagar_rajput_03/',
    display: <AiOutlineInstagram className='hover:text-white w-5 h-5' />
  },
  {
    path: 'https://github.com/sagar9753',
    display: <AiFillGithub className='hover:text-white w-5 h-5' />
  },
  {
    path: 'https://www.linkedin.com/in/sagar-rajput-247b92228/',
    display: <AiFillLinkedin className='hover:text-white w-5 h-5' />
  },
];


const Footer = () => {
  return (
    <>
      <footer className='mt-[60px] py-6 bg-[#acc3de] bg-opacity-70'>
        <div className="container">
          <div className="flex justify-between  md:flex-row flex-wrap gap-[20px]">
            <div>
              <img src={logo} alt="" />
              <p className='text-[16px] font-[400] mt-4'>
                Copyright © {new Date().getFullYear} devloped by Sagar Rajput
              </p>
            </div>
            <div className='flex items-center gap-3 mt-4' >
              {socialLinks.map((link, ind) => (
                <Link to={link.path} key={ind} target='_blank'
                  className='flex items-center justify-center w-9 h-9 border border-solid border-black rounded-full group hover:bg-blue-400 hover:border-none'
                >
                  {link.display}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer