import React from 'react'
import ServicesList from './ServicesList'

const Services = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className='xl:w-[700px] mx-auto'>
                    <h1 className="heading text-center lg:text-[50px]">
                        Our Services
                    </h1>
                    <p className="text_para text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur laboriosam mollitia quaerat incidunt debitis!
                    </p>
                </div>
                <ServicesList/>
            </div>
        </section>
    </>
  )
}

export default Services