import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function TopNavbar() {
  return (
    <div data-aos="fade-in" data-aos-duration="2000" className='bg-[#01579b]'>
      <div className="main text-xl text-white md:py-4 py-2 container mx-auto md:flex justify-between">
      <div className="mobile flex gap-5 items-center justify-center cursor-pointer">
      <a href="tel:9811198755" className="flex gap-2 items-center">
        <FaPhoneAlt />
        <p>981-119-8755</p>
      </a>
    </div>
        <div className="email flex gap-3 items-center justify-center cursor-pointer pt-1">
          <h1 className='md:text-3xl text-xl'><MdOutlineAttachEmail /></h1>
          <h1>info@npindustries.com.np</h1>
        </div>
        {/* social */}
        <div  className="social flex items-center justify-center  gap-5 pt-2">
          <div className="face">
            <Link target='_blank' to={'https://www.facebook.com/profile.php?id=61558131133212&mibextid=JRoKGi'}><button className='rounded-full p-1 bg-white cursor-pointer'><FaFacebook className='text-cyan-600' /></button></Link>
          </div>
          <div className="insta">
            <Link target='_blank'><button className='rounded-full p-1 bg-white cursor-pointer'><FaInstagram className='text-red-400' /></button></Link>
          </div>
          <div className="twitter">
            <Link target='_blank'><button className='rounded-full p-1 bg-white cursor-pointer'><FaSquareTwitter className='text-cyan-400'/></button></Link>
          </div>
          <div className="linkden">
            <Link target='_blank'><button className='rounded-full p-1 bg-white cursor-pointer'><CiLinkedin className='text-blue-800'/></button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
