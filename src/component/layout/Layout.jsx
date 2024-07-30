import React from 'react'

import NavbarCompo from '../navbar/NavbarCompo'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div>
      <NavbarCompo/>
      <div className="content">
        {children}
      </div>
     <Footer/>
    </div>
  )
}

export default Layout