import React from 'react'

import NavbarCompo from '../navbar/NavbarCompo'
import Footer from '../footer/Footer'
import TopNavbar from '../navbar/TopNavbar'

function Layout({children}) {
  return (
    <div>
      <TopNavbar/>
      <NavbarCompo/>
      <div className="content">
        {children}
      </div>
     <Footer/>
    </div>
  )
}

export default Layout