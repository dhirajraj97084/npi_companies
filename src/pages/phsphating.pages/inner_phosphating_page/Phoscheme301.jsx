import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../../component/layout/Layout';

const blogCard = [
    {
      img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
      tital: "PHOSCHEME-503",
      p1: "Phosphating",
      src: "/phoscheme503",
    //   date: "April 27, 2024  ",
    },
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
     tital: "PHOSCHEME-109",
     p1: "Phosphating",
     src: "/phoscheme109",
   //   date: "April 27, 2024  ",
   },
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
      tital: "PHOSCHEME-PC",
      p1: "Phosphating",
      src: "/phoschemePc",
    //   date: "March 30, 2024 ",
    },
    
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
     tital: "PHOSCHEME-501",
     p1: "Phosphating",
     src: "/phoscheme501",
     
    },
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
     tital: "PHOSCHEME-M901",
     p1: "Phosphating",
     src: "/phoschemeM901",
    //   date: "March 24, 2024",
    },
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
     tital: "PHOSCHEME-M902",
     p1: "Phosphating",
     src: "/phoschemeM902",
    //   date: "March 24, 2024",
    },
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
     tital: "PHOSCHEME-507",
     p1: "Phosphating",
     src: "/phoscheme507",
    //   date: "March 24, 2024",
    },
    {
     img: "https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg",
     tital: "PHOSCHEME-505",
     p1: "Phosphating",
     src: "/phoscheme505",
    //   date: "March 24, 2024",
    },
]



function Phoscheme301() {
  return (
    <Layout>
       <div className=" bg-white rounded-lg overflow-hidden mt-10">
       <div className="p-6 grid grid-cols-1 md:grid-cols-2">
         <div className="box1 img">
             <img className='w-full' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg" alt="" />
         </div>
        <div className="box2 max-w-md mx-auto my-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
        Phoscheme-301</h2>
         <p className="text-gray-600 mb-6">Home / Phoscheme-301</p>
 
         <table className=" bg-white">
           <tbody>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Category Phosphating</th>
               <td className="py-3 px-4 text-gray-600">Category Industrial Chemical</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Purity</th>
               <td className="py-3 px-4 text-gray-600">86%</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Usage/Application</th>
               <td className="py-3 px-4 text-gray-600">Industrial</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Grade Standard</th>
               <td className="py-3 px-4 text-gray-600">Reagent Grade</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Packaging Type</th>
               <td className="py-3 px-4 text-gray-600"> can</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Packaging Size</th>
               <td className="py-3 px-4 text-gray-600">40 kg</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Shelf Life</th>
               <td className="py-3 px-4 text-gray-600">2 years</td>
             </tr>
             <tr className="border-b">
               <th className="text-left py-3 px-4 font-semibold text-gray-800">Density (20 DegreeC,g/cm3)</th>
               <td className="py-3 px-4 text-gray-600">1.5+-0.01</td>
             </tr>
           </tbody>
         </table>
 
         <div className="mt-6">
           <p className="text-gray-700">
           With an objective to fulfill the demands of our clients, we are engaged in providing a widearray of 3 In 1 Phosphating Chemicals.
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
                 <p className=" text-balance text-sm">{item.p1}</p>
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
  )
}

export default Phoscheme301
