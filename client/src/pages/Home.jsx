import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero-img01.png'

const Home = () => {
  return (
    <>
      <section className='hero_sec 2xl:h-[650px]'>
        <div className="container">
          <div className="flex flex-col justify-between items-center w-full md:flex-row gap-[50px]">
            {/* hero section */}
            <div className='md:w-[600px]'>
              <h1 className='heading'>
                Your Health, Our Priority 
              </h1>
              <p className='text_para'>
                Find and book appointments with trusted healthcare professionals in your area.
                Get the care you deserve with our easy-to-use booking platform.
              </p>
              <Link to="/doctors">
                <button className='btn'>Book Appointment</button>
              </Link>
            </div>

            <div className='flex gap-[30px] '>
              <div>
                <img src={heroImg} alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
