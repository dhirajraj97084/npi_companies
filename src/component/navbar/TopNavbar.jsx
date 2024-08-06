import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

function TopNavbar() {
  return (
    <div className='bg-[#01579b]'>
      <div className="main text-xl text-white md:flex gap-20  md:py-4 py-2 container mx-auto">
        <div className="mobile flex gap-5 items-center justify-center"><FaPhoneAlt /> <p>981-119-8755</p></div>
        <div className="email flex gap-3 items-center justify-center pt-1">
            <h1 className='md:text-3xl text-xl'><MdOutlineAttachEmail /></h1>
            <h1>info@npindustries.com.np</h1>                
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
