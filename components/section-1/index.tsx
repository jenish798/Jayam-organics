'use client'
import { useEffect, useState } from "react"

const images=[
    './products/drumstick-leaves-1.jpeg',
    './products/hero-img-2.jpg',
];

const names=[
    'DrumStick',
    'Vegetables'
]

const Section_1 =()=>{
const [image, setImage] = useState(0);

const nextImage = () =>{
    setImage((prevIndex) =>(prevIndex + 1) % images.length);
}

const prevImage =() =>{
    setImage((prevIndex)=>(prevIndex - 1 + images.length) % images.length)
}

useEffect(()=>{
    const interval = setInterval(nextImage,3000);

    return () => clearInterval(interval);
},[]);


    return(
        <div className="bg-[url('/home/hero-img.jpg')] bg-cover bg-center h-[70vh] justify-evenly flex items-center">

            <div className="w-1/2 space-y-8">
                <h1 className="text-yellow-500 text-3xl">100% Organics Products</h1>
                <h1 className="text-green-700 text-6xl font-extrabold">Organic Powders</h1>
                <div className="relative mx-auto">
            <input
                className="border-2 border-secondary w-3/4 md:w-1/4 lg:w-1/2 py-3 px-4 rounded-full"
                type="number"
                placeholder="Search"
            />
            <button
                type="submit"
                className="absolute top-0 right-[50%] border-2 border-secondary py-3 px-4 rounded-full text-white bg-green-700 hover:bg-green-800"
            >
                Submit Now
            </button>
        </div>
            </div>

            <div className="relative w-2/6 ">
            <img
            src={images[image]}
            alt={`Image ${image + 1}`}
             className="w-full h-[50vh] rounded-lg"
            />
            <h2 className="text-center absolute inset-44 text-white text-2xl bg-yellow-500/50 font-bold rounded-xl p-3">{names[image]}</h2>
            <button onClick={prevImage}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
            prev
            </button>
            <button onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
                next
            </button>

            </div>
           
        </div>
    )
}

export default Section_1
