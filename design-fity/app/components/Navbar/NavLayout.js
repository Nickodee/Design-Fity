import React from 'react'
import TopNav from './TopNav'
import Footer from './Footer'


function NavLayout({children}) {
  return (
    <div className=' flex flex-col'>
        <TopNav/>
        <div className='flex flex-col'>
            {children}
            <Footer/>
        </div>
    </div>
  )
}

export default NavLayout