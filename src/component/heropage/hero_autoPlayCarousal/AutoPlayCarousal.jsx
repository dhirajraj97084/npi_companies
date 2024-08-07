import React from 'react'
import Slider from "react-slick";
const items = [
    {
        img: "https://jmindustry.in/wp-content/uploads/2022/09/images-2.jpg",
        name: "Industrial Chemical",
        // price: "  $180.00",
        desc: "Zinc, Manganese, Liquid Iron Phosphating Chemicals.",
        button: "Learn More...",
        src: "/metalpretreatment"
    },
    {
        img: "https://jmindustry.in/wp-content/uploads/2022/09/powder-coating-special-camera-worker-wearing-protective-wear-performing-metal-details-industrial-49678620-300x200.jpg",
        name: "OTHER Chemicals",
        // price: "  $95.00",
        desc: "Paint Stripper Chemical Metal Rust Cleaning Chemical E.T.P. PLANT",
        button: "Learn More...",
        src: "/paintdetackification"
    },
    {
        img: "https://jmindustry.in/wp-content/uploads/2022/09/pf0913pci-showkeyland-1-300x250.jpg",
        name: "Coating Guns ",
        // price: "  $95.00",
        desc: "Powder Coating Gun Gema Powder Coating Equipment's Spare Parts",
        button: "Learn More...",
        src: "/waterTreatmentBoiler"
    },
    {
        img: "https://jmindustry.in/wp-content/uploads/2022/09/Convection-Powder-Coating-Plant-300x250.jpg",
        name: "Coating Booth",
        // price: "  $95.00",
        desc: "Powder Coating Booth Automatic Powder Coating Booth",
        button: "Learn More...",
        src: "/wastewaterTreatment"
    },
    // {
    //     img: "https://www.vanchem.com/wp-content/uploads/2017/07/paint-stripping-thumbnail.png",
    //     name: "Paint Stripping",
    //     // price: "  $95.00",
    //     desc: "Vanchem paint strippers are effective in stripping high solids coatings, powder coatings, and most commercially used organic coatings.",
    //     button: "Learn More...",
    //     src: "/paintStripping"
    // },
    // {
    //     img: "https://www.vanchem.com/wp-content/uploads/2017/07/commodities-thumbnail.png",
    //     name: "Rockwell Thermal Fluids",
    //     // price: "  $95.00",
    //     desc: "Vanchem’s expertise in thermal fluids led to the joint development of proprietary coolants specifically designed for Rockwell / Allen-Bradley",
    //     button: "Learn More...",
    //     src: "/rockwellThermalFluids"
    // },
]


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
};

function AutoPlayCarousal() {
    return (
        <div className='container mx-auto py-7'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <div className="main gap-8 ">

                            <div className="inner  p-2 gap-5">
                                <div className="img">
                                    <img className='w-54 rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1>PHOSCHEME-301</h1>
                                        <h1>logo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5">
                                <div className="img">
                                    <img className='w-54 rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1>PHOSCHEME-301</h1>
                                        <h1>logo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner p-2 gap-5">
                                <div className="img">
                                    <img className='w-54 rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1>PHOSCHEME-301</h1>
                                        <h1>logo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5">
                                <div className="img">
                                    <img className='w-54 rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1>PHOSCHEME-301</h1>
                                        <h1>logo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5">
                                <div className="img">
                                    <img className='w-54 rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1>PHOSCHEME-301</h1>
                                        <h1>logo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main">

                            <div className="inner  p-2 gap-5">
                                <div className="img">
                                    <img className='w-54 rounded-md' src="https://jmindustry.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-14-at-2.06.48-PM-1-150x150.jpeg" alt="" />
                                    <div className="name">
                                        <h1>PHOSCHEME-301</h1>
                                        <h1>logo</h1>
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
