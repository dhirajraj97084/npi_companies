import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const items = [
    {
        img: "https://img.freepik.com/premium-photo/drink-is-poured-into-plastic-bottles-juice-production_1042628-22763.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid",
        name: "Phoschame",
        price: "  $180.00",
        desc: " With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        button: "Book Now",
        src: "/phoschame"
    },
    {
        img: "data:image/jpeg;base64,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",
        name: "Degchame",
        price: "  $95.00",
        desc: " With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        button: "Book Now",
        src: "/apple"
    },
    {
        img: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
        name: " Apple AirPods",
        price: "  $95.00",
        desc: " With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        button: "Book Now",
        src: "/apple"
    },
]


function HeroProducts() {
    return (
        <div>
            <div className="main bg-gray-100">
                <div className="heading py-8">
                    <h1 className=' md:text-3xl text-xl text-center  font-bold'>Best Quality <span className='text-cyan-200 md:text-4xl text-2xl'>Chemical Products</span></h1>
                </div>
                <div className="products  ">
                    <Card className=" container mx-auto grid md:grid-cols-3 grid-cols-1   ">
                        {
                            items.map((item, index) => (
                                <div className="box">
                                    <div key={index} className="box w-96">
                                        <CardHeader shadow={false} floated={false} className="h-96">
                                            <img
                                                src={item.img}
                                                alt="card-image"
                                                className="h-full w-full object-cover"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <div className="mb-2 flex items-center justify-between">
                                                <Typography color="blue-gray" className="font-medium">
                                                    {item.name}
                                                </Typography>
                                                <Typography color="blue-gray" className="font-medium">
                                                    {item.price}
                                                </Typography>
                                            </div>
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="font-normal opacity-75"
                                            >
                                                {item.desc}
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="pt-0">
                                            <Button
                                                ripple={false}
                                                fullWidth={true}
                                                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                            >
                                                {item.button}
                                            </Button>
                                        </CardFooter>
                                    </div>
                                </div>
                            ))
                        }
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HeroProducts
