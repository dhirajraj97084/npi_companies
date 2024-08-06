import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const items = [
    {
        img: "https://www.vanchem.com/wp-content/uploads/2017/07/metal-pretreatment-thumbnail.png",
        name: "Metal Pretreatment",
        // price: "  $180.00",
        desc: " Prior to painting metal and plastic, specific pre-treatment chemicals must be used to clean,.",
        button: "Learn More...",
        src: "/metalpretreatment"
    },
    {
        img: "https://www.vanchem.com/wp-content/uploads/2017/07/paint-detack-thumbnail.png",
        name: "Paint Detackification",
        // price: "  $95.00",
        desc: "Paint detackification is a specific process in which tacky paint overspray is rendered non-tacky by chemical reaction.",
        button: "Learn More...",
        src: "/paintdetackification"
    },
    {
        img: "https://www.vanchem.com/wp-content/uploads/2017/07/water-treatment-thumbnail.png",
        name: " Water Treatment & Boiler ",
        // price: "  $95.00",
        desc: " Vanchem Performance Chemicals supplies a line of water treatment chemicals.",
        button: "Learn More...",
        src: "/waterTreatmentBoiler"
    },
    {
        img: "https://www.vanchem.com/wp-content/uploads/2017/07/waste-water-treatment-thumbna.png",
        name: "Wastewater Treatment ",
        // price: "  $95.00",
        desc: "Waste water pretreatment is a process that removes heavy metals and phosphates from water utilized by industry.",
        button: "Learn More...",
        src: "/wastewaterTreatment"
    },
    {
        img: "https://www.vanchem.com/wp-content/uploads/2017/07/paint-stripping-thumbnail.png",
        name: "Paint Stripping",
        // price: "  $95.00",
        desc: "Vanchem paint strippers are effective in stripping high solids coatings, powder coatings, and most commercially used organic coatings.",
        button: "Learn More...",
        src: "/paintStripping"
    },
    {
        img: "https://www.vanchem.com/wp-content/uploads/2017/07/commodities-thumbnail.png",
        name: "Rockwell Thermal Fluids",
        // price: "  $95.00",
        desc: "Vanchem’s expertise in thermal fluids led to the joint development of proprietary coolants specifically designed for Rockwell / Allen-Bradley",
        button: "Learn More...",
        src: "/rockwellThermalFluids"
    },
]


function HeroProducts() {
    return (
        <div>
            <div className="main bg-gray-200">
                <div className="heading py-8">
                    <h1 className=' md:text-3xl text-xl text-center  font-bold'>Best Quality <span className='text-cyan-200 md:text-4xl text-2xl'>Chemical Products</span></h1>
                </div>
                <div className="products pb-12 container mx-auto px-3  ">
                    <div className="inner_cart  ">
                        <div className="inner_box bg grid grid-cols-1 md:grid-cols-3 gap-8 ">
                            {items.map((item,index)=>(
                                <div key={index} className="box bg-white rounded-md shadow-md p-4 hover:bg-gray-200  ">
                                   <Link to={item.src}>
                                   <div className="img"><img className='w-96 h-96 mx-auto' src={item.img} alt="img" /></div>
                                    <div className="box flex justify-between ">
                                    <div className="name py-3 text-xl font-semibold te"><h1>{item.name}</h1></div> 
                                    <div className="price py-3 text-xl font-semibold te"><h2>{item.price}</h2></div>                               
                                    </div>
                                    <div className="dec ">
                                        <p>{item.desc}</p>                                      
                                    </div>
                                    <div className="button flex justify-center pt-3">
                                        <button className='px-6 py-2 bg-deep-orange-500 hover:bg-deep-orange-700 text-white rounded-md'>{item.button}</button>
                                    </div>
                                   </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroProducts
