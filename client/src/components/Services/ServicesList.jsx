import React from 'react'
import { services } from '../../assets/data/services'
import ServiceCard from './ServiceCard'

const ServicesList = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]'>
                {
                    services.map((item, ind) => <ServiceCard item={item} key={ind} ind={ind} />)
                }
            </div>
        </>
    )
}

export default ServicesList