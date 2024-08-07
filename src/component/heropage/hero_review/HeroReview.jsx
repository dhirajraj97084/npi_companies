import React from 'react'
import { TbWorld } from "react-icons/tb";
import { CiStar } from 'react-icons/ci';
import { FaRegRegistered } from 'react-icons/fa';
import { BiBus } from 'react-icons/bi';

function HeroReview() {
    return (
        <div>
            <div className="main_box container mx-auto">
                <div className="heading py-8">
                    <h1 className=' md:text-3xl text-xl text-center  font-bold'>Why N.P Industries</h1>
                </div>
                <div className="REVIEW grid grid-cols-2 md:grid-cols-4 md:pt-4 pb-8 md:gap-12 gap-3 text-white text-center px-1">
                    <div className="review_one bg-light-blue-800/60">
                        <h1 className='py-4 flex justify-center text-2xl'><TbWorld /></h1>
                        <h1 className='text-xl font-semibold'>SINCE 2023</h1>
                        <p className='text-sm pb-4'>IN THE MARKET</p>
                    </div>
                    <div className="review_two bg-light-blue-800/60">
                        <h1 className='py-4 flex justify-center text-2xl'><CiStar /></h1>
                        <h1 className='text-xl font-semibold'>4.5</h1>
                        <p className='text-sm pb-4'>RATINGS & REVIEWS</p>
                    </div>
                    <div className="review_three bg-light-blue-800/60">
                        <h1 className='py-4 flex justify-center text-2xl'><FaRegRegistered /></h1>
                        <h1 className='text-xl font-semibold'>REGISTERED</h1>
                        <p className='text-sm pb-4'>INDIVIDUAL-PROPRIETOR</p>
                    </div>
                    <div className="review_three bg-light-blue-800/60 ">
                        <h1 className='py-4 flex justify-center text-2xl'><BiBus /></h1>
                        <h1 className='text-xl font-semibold'>B2B & B2C</h1>
                        <p className='text-sm pb-4'>BUY/BUILD/SELLING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroReview
