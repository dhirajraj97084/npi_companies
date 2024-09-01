import React from 'react';
 
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Layout from '../../../component/layout/Layout';
const blogCard = [
    
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
     p1: "Degreasing",
     title: "DEGCHEME 101",
     src: "/degcheme101",
    
   },
  
   {
     img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
     p1: "Degreasing",
     title: "DEGCHEME 203",
     src:"/degcheme203",
   },
   {
     img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
     p1: "Degreasing",
     title: "DEGCHEME 70",
     src: "/degcheme70",
   },
   {
     img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
     p1: "Degreasing",
     title: "DEGCHEME 80",
     src: "/degcheme80",
   },
   {
     img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
     p1: "Degreasing",
     title: "DEGCHEME 90",
     src: "/degcheme90",
   },
   {
     img: "https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47-300x300.jpg",
     p1: "Degreasing",
     title: "DEGCHEME 907",
     src: "/degcheme907",
   },
]

const    SixZero = () => {
  return (
    <Layout>
    <div className=" bg-white rounded-lg overflow-hidden mt-10">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2">
        <div className="box1 img">
            <img className='w-full' src="https://jmindustry.in/wp-content/uploads/2022/10/b8844d24-7641-4b5f-93d6-9cb40b3dfb47.jpg" alt="" />
        </div>
       <div className="box2 max-w-md mx-auto my-auto">
       <h2 className="text-xl font-bold text-gray-800 mb-4">
       DEGCHEME 60</h2>
        <p className="text-gray-600 mb-6">Home / Degreasing / DEGCHEME 60
        </p>

        <table className=" bg-white">
          <tbody>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Category </th>
              <td className="py-3 px-4 text-gray-600">Degreasing</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Packaging Size</th>
              <td className="py-3 px-4 text-gray-600">50 kg</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Self Life</th>
              <td className="py-3 px-4 text-gray-600">2 Year</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Packaging Type</th>
              <td className="py-3 px-4 text-gray-600">Bag</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Technical Grade </th>
              <td className="py-3 px-4 text-gray-600">Technical Grade</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-800">Physical State</th>
              <td className="py-3 px-4 text-gray-600">Powder</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <p className="text-gray-700">
          With our vast experience & knowledge in this field, we are engaged in providing a quality-assured range of Liquid Degreasing Chemical.
          </p>
          <p className="text-gray-700 ">
          Ferrous and non ferrous metal degreasing low temperature dip
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
                  {item.title}
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

export default   SixZero;



