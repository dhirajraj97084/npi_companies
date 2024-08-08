import React from 'react'
import { CiStar } from 'react-icons/ci';
import { GiWireframeGlobe } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
};

function AutoPlayCarousal() {
    return (
        <div className='container mx-auto py-7'>
            <div className="heading py-8">
                    <h1 className=' md:text-5xl text-3xl text-center  font-bold'>OUR PRODUCTS</h1>
                    <p className='text-center flex justify-center items-center'> <p>..........................</p> <p><GiWireframeGlobe className='text-2xl' /></p>  <p>..........................</p> </p>
                </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div className="main gap-8 px-2 ">

                            <div className="inner  p-2 gap-5  w-56 shadow-md  bg-light-blue-800 text-white rounded-md">
                                <Link to={'/PHOSCHEME301'}>
                                <div className="img">
                                    <img className='w-52 rounded-md mx-auto' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1 className='text-center'>PHOSCHEME-301</h1>
                                        <div className="staar flex pt-2 justify-center">
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5 w-56 shadow-md bg-light-blue-800 text-white rounded-md">
                                <Link to={'/PHOSCHEME-301'}>
                                <div className="img">
                                    <img className='w-52 rounded-md mx-auto' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1 className='text-center'>PHOSCHEME-301</h1>
                                        <div className="staar flex pt-2 justify-center">
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner p-2 gap-5 w-56 shadow-md bg-light-blue-800 text-white rounded-md">
                                <Link to={'/PHOSCHEMEPC'}>
                                <div className="img">
                                    <img className=' w-52 rounded-md mx-auto' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1.jpeg" alt="" />
                                    <div className="name">
                                        <h1 className='text-center'>PHOSCHEME -PC</h1>
                                        <div className="staar flex pt-2 justify-center">
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5 w-56 shadow-md bg-light-blue-800 text-white rounded-md">
                                <Link to={'/exelator'}>
                                <div className="img">
                                    <img className='w-52 rounded-md mx-auto' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className='text-center' > <h1>EXELATOR</h1>
                                        <div className="staar flex pt-2 justify-center">
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        </div>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5 w-56 shadow-md bg-light-blue-800 text-white rounded-md">
                                <div className="img">
                                    <img className='w-52 mx-auto rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1 className='text-center'>PHOSCHEME -M902</h1>
                                        <div className="staar flex pt-2 justify-center">
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5 w-56 shadow-md bg-light-blue-800 text-white rounded-md">
                                <div className="img ">
                                    <img className='w-52 mx-auto rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1 className='text-center'>PHOSCHEME-301</h1>
                                        <div className="staar flex pt-2 justify-center">
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        <h1 className='text-yellow-800'><CiStar />
                                        </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AutoPlayCarousal
