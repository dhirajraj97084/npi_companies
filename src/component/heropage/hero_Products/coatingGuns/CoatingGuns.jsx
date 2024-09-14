

import React from 'react'
import Layout from '../../../layout/Layout'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const blogCard = [
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/09/Best-Technology-Plating-Line-Tanks-300x300.jpg",
      tital: "7 Tank Pretreatment Process Chemical",
      p1: "7 & 9 Tank Process Chemical",
      src: "/sevenTankPretreatmentProcessChemical",
    //   date: "April 27, 2024  ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/09/images-3.jpg",
      tital: "Aluminum Cleaner Chemical",
      p1: "Industrial Chemical",
      src: "/aluminumCleanerChemical",
    //   date: "March 30, 2024 ",
    },
    
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/09/download-5.jpg",
      tital: "Cold Phosphating Chemicals",
      p1: "Industrial Chemical",
      src: "/coldphosphating",
      date: "March 16, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital: "DEGCHEME 101",
      p1: "Degreasing",
      src: "/digitalmarketing",
    //   date: "March 24, 2024",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 105",
      p1: "Degreasing",
      src: "/google",
      date: "March 9, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 109",
      p1: "Degreasing",
      src: "/onlineadvertising",
      date: "March 2, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 203",
      p1: "Degreasing",
      src: "/graphicdesigning",
      date: "February 24, 2024  ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 60",
      p1: "Degreasing",
      src: "/ecommercewebsite",
      date: "February 17, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 70",
      p1: "Degreasing",
      src: "/sevendigital",
      date: "January 20, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 80",
      p1: "Degreasing",
      src: "/threestrategies",
      date: "January 11, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 90",
      p1: "Degreasing",
      src: "/instagram",
      date: "January 11, 2024 ",
    },
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
      tital:"DEGCHEME 907",
      p1: "Degreasing",
      src: "/instagram",
      date: "December 16, 2023  ",
    },
  ];

function CoatingGuns() {
  return (
    <Layout>
       <div className="div  w-full ">
        <img
          className="w-full md:h-[35em]  h-[20em] opacity-75"
          src="https://img.freepik.com/premium-photo/interior-foundry-with-equipment-production-alloy-wheels_146538-672.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid"
          alt=""
        />
      </div>
      <div className="div bg-gray-100 ">
      <div className=" mx-auto container  ">
        <div className="items relative md:bottom-48 bottom-12">
          <div className="subitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {blogCard.map((item, index) => (
              <div
                key={index}
                className="inner_box m-2 p-2 md:m-4 shadow-md hover:bg-yellow-200 rounded-xl "
              >
                <img className='w-full rounded-3xl' src={item.img} alt="" />
                <p className=" text-balance">{item.p1}</p>
                {/* <h2 className="text-sm font-bold text-black/60">{item.desc}</h2> */}
                <h1 className="text-xl font-bold ">
                  {item.tital}
                </h1>
               
                
                <Link to={item.src}>
                  <h1 className=" font-bold pt-3 text-[#01579b] decoration-deep-orange-700 underline-offset-8">
                    Read More...
                  </h1>
                </Link>
                {/* <hr className="py-4 " /> */}
                {/* <div className="box">
                  <h1>{item.date}</h1>
                </div> */}
              </div>
            ))}
          </div>
          <div className="box flex space-x-4 pt-10">
        <div className="box1"><Link to={'/metalpretreatment'}><button className='p-4 rounded-md border-2 hover:bg-orange-300 text-black border-black cursor-pointer'>A</button></Link></div>
        <div className="box2"><Link to={'/paintdetackification'}><button className='p-4 rounded-md border-2 hover:bg-orange-400 text-black border-black cursor-pointer'>B</button></Link></div>
        <div className="box3"><Link to={'/waterTreatmentBoiler'}><button className='p-4 rounded-md border-2 bg-orange-300 text-black border-black cursor-pointer'>C</button></Link></div>
        <div className="box3"><Link to={'/wastewaterTreatment'}><button className='p-4 rounded-md border-2 hover:bg-orange-300 text-black border-black cursor-pointer'><FaArrowRightLong className='text-xl' /></button></Link></div>
      </div>
        </div>
        
      </div>
      
      </div>
    </Layout>
  )
}

export default CoatingGuns


