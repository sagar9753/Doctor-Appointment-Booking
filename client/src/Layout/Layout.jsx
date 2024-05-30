import React from 'react'
import Header from '../components/Header/Header'
import Routers from '../Routes/Routers'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
      <div className='flex flex-col justify-between'>
        <Header />
        <main>
          <Routers />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout