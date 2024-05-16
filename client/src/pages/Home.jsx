import React from 'react'

import heroImg from '../assets/images/hero-img01.png'

const Home = () => {
  return (
    <>
      <section className='hero_sec 2xl:h-[650px]'>
        <div className="container">
          <div className="flex flex-col justify-between items-center w-full md:flex-row gap-[50px]">
            {/* hero section */}
            <div className='md:w-[600px]'>
              <h1 className='text-[40px] font-[700] lg:text-[55px]'>
                Lorem, ipsum dolor sit amet consectetur
              </h1>
              <p className='text_para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, atque in eius pariatur doloremque nemo architecto, numquam sunt quae maxime expedita ducimus nihil deserunt aspernatur suscipit minus illum quas corrupti.
              </p>
              <button className='btn'>Book Appointment</button>
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