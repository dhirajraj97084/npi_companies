import React from 'react';

import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Layout from '../../../layout/Layout';
const blogCard = [
  {
    img: "https://jmindustry.in/wp-content/uploads/2022/09/download-7.jpg",
    tital: "Ss Passivation Chemical",
    p1: "Industrial Chemical",
    src: "/ss",
  //   date: "April 27, 2024  ",
  },
  {
    img: "https://jmindustry.in/wp-content/uploads/2022/09/images-5.jpg",
    tital: "Paint Stripper Chemical",
    p1: "Industrial Chemical",
    src: "/paint",
  //   date: "March 30, 2024 ",
  },
  
  {
    img: "https://jmindustry.in/wp-content/uploads/2022/09/download-3.jpg",
    tital: "Oil Remover Chemical",
    p1: "Industrial Chemical",
    src: "/oil",
   
  },
  {
    img: "https://jmindustry.in/wp-content/uploads/2022/09/Paint-Chemicals-300x300.jpg",
    tital: "Metal Pretreatment Chemical",
    p1: "Industrial Chemical",
    src: "/metal",
  //   date: "March 24, 2024",
  },
]

const Degcheme105 = () => {
  return (
    <Layout>
    <div className=" bg-white rounded-lg overflow-hidden mt-10">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2">
        <div className="box1 img">
            <img className='w-full' src="https://jmindustry.in/wp-content/uploads/2022/09/images-3.jpg" alt="" />
        </div>
       <div className="box2 max-w-md mx-auto my-auto">
       <h2 className="text-xl font-bold text-gray-800 mb-4">
       Degcheme 105</h2>
        <p className="text-gray-600 mb-6">Home / Our Products / Industrial Chemical / Coldphosphatingl</p>

        <table className=" bg-white">
          <tbody>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Category</th>
              <td className="py-3 px-4 text-gray-600">Category Industrial Chemical</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Packaging Size</th>
              <td className="py-3 px-4 text-gray-600">40 kg</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Packaging Type</th>
              <td className="py-3 px-4 text-gray-600">Can</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Grade Standard</th>
              <td className="py-3 px-4 text-gray-600">Technical Grade</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Shelf Life</th>
              <td className="py-3 px-4 text-gray-600"> 2 Year</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <p className="text-gray-700">
          We are successfully engaged in providing a wide gamut of coldphosphating.
          </p>
        </div>
       </div>
      </div>
    </div>
    <div className="div bg-gray-100 ">
      <div className=" mx-auto container  ">
        <div className="heading">
            <h1 className='text-3xl text-center font-bold py-4'>Related products</h1>
        </div>
        <div className="items ">
          <div className="subitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {blogCard.map((item, index) => (
              <div
                key={index}
                className="inner_box m-2 p-2 md:m-4 shadow-md hover:bg-gray-200 rounded-xl bg-white "
              >
                <img className='w-full rounded-3xl' src={item.img} alt="" />
                <p className=" text-balance">{item.p1}</p>
                {/* <h2 className="text-sm font-bold text-black/60">{item.desc}</h2> */}
                <h1 className=" font-bold  ">
                  {item.tital}
                </h1>
               
                
                <Link to={item.src}>
                  <h1 className=" text-center font-bold py-3 text-[#01579b] decoration-deep-orange-700 underline-offset-8">
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
         
        </div>
        
      </div>
      
      </div>
    </Layout>
  );
};

export default    Degcheme105;





