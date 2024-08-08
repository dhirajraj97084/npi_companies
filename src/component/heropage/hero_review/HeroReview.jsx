import React from 'react'
import { TbWorld } from "react-icons/tb";
import { CiStar } from 'react-icons/ci';
import { FaRegRegistered } from 'react-icons/fa';
import { BiBus } from 'react-icons/bi';
import { GiWireframeGlobe } from 'react-icons/gi';

function HeroReview() {
    return (
        <div>
            <div className="main_box container mx-auto">
                <div className="heading py-8">
                    <h1 className=' md:text-3xl text-xl text-center  font-bold'>Why N.P Industries</h1>
                    <p className='text-center flex justify-center items-center'> <p>..........................</p> <p><GiWireframeGlobe className='text-2xl' /></p>  <p>..........................</p> </p>
                </div>
                <div className="REVIEW grid grid-cols-2 md:grid-cols-4 md:pt-4 pb-8 md:gap-12 gap-3 text-white text-center px-1">
                    <div className="review_one bg-light-blue-800/60">
                        <h1 className='py-4 flex justify-center text-2xl'><button className='p-2 bg-yellow-700 rounded-full text-light-blue-800'><TbWorld /></button></h1>
                        <h1 className='text-xl font-semibold'>SINCE 2019</h1>
                        <p className='text-sm pb-4'>IN THE MARKET</p>
                    </div>
                    <div className="review_two bg-light-blue-800/60">
                        <h1 className='py-4 flex justify-center text-2xl'><button  className='p-2 bg-yellow-700 rounded-full text-light-blue-800'><CiStar /></button></h1>
                        <h1 className='text-xl font-semibold'>4.5</h1>
                        <p className='text-sm pb-4'>RATINGS & REVIEWS</p>
                    </div>
                    <div className="review_three bg-light-blue-800/60">
                        <h1 className='py-4 flex justify-center text-2xl'><button  className='p-2 bg-yellow-700 rounded-full text-light-blue-800'><FaRegRegistered /></button></h1>
                        <h1 className='text-xl font-semibold'>REGISTERED</h1>
                        <p className='text-sm pb-4'>INDIVIDUAL-PROPRIETOR</p>
                    </div>
                    <div className="review_three bg-light-blue-800/60 ">
                        <h1 className='py-4 flex justify-center text-2xl'> <button  className='p-2 bg-yellow-700 rounded-full text-light-blue-800'><BiBus /></button></h1>
                        <h1 className='text-xl font-semibold'>B2B & B2C</h1>
                        <p className='text-sm pb-4'>BUY/BUILD/SELLING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroReview
