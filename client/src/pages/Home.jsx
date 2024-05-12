import React from 'react'

import heroImg from '../assets/images/hero-img01.png'

const Home = () => {
  return (
    <>
      <section className='hero_sec pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col justify-between items-center w-full lg:flex-row gap-[90px]">
            {/* hero section */}
              <div className='lg:w-[570px]'>
                <h1 className='text-[30px] font-[700] md:text-[60px]'>
                  Lorem, ipsum dolor sit amet consectetur
                </h1>
                <p className='text_para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, atque in eius pariatur doloremque nemo architecto, numquam sunt quae maxime expedita ducimus nihil deserunt aspernatur suscipit minus illum quas corrupti.
                </p>
                <button className='btn'>Book Appointment</button>
              </div>

            <div className='flex gap-[30px] justify-end'>
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