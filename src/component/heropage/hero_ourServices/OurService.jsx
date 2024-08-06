import React from 'react'

function OurService() {
  return (
    <div>
      <div className="box container mx-auto ">
        <div className="img  ">
            <img className='w-full h-[15em] md:h-full' src="https://www.vanchem.com/wp-content/uploads/2016/05/chemical-warehouse.png" alt="" />
        </div>
        <div className="text bg-[#33678f] text-white md:w-[34em] md:mx-auto relative md:bottom-32 bottom-20 mx-1">
            <div className="box p-8">
                <h1 className='text-4xl pb-8 '>Our Services</h1>
                <p className='text-xl'>Vanchem Performance Chemicals is widely recognized as an efficient and effective supplier, giving competitive value to customers. We are comprised of competent, decisive, flexible and innovative personnel that are motivated to pursue achievement. One of our greatest strengths over the years is our commitment to servicing our customers.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurService
