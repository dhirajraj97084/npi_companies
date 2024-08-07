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
import { GiWireframeGlobe } from 'react-icons/gi';
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


function HeroProducts() {
    return (
        <div>
            <div className="main bg-gray-200">
                <div className="heading py-8">
                    <h1 className=' md:text-3xl text-xl text-center  font-bold'>Categories</h1>
                    <p className='text-center flex justify-center items-center'> <p>..........................</p> <p><GiWireframeGlobe className='text-2xl' /></p>  <p>..........................</p> </p>
                </div>
                <div className="products pb-12 container mx-auto px-3  ">
                    <div className="inner_cart  ">
                        <div className="inner_box bg grid grid-cols-1 md:grid-cols-4 gap-8 ">
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
