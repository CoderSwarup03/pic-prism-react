import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from './ImageCard';


const PhotoGallary = () => {
    return (
        <div className='my-20 flex flex-col justify-center items-center bg-white'>
            <h3 className='text-3xl font-semibold my-14'>Photos</h3>
            {/* All my photos inside this div */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mb-18'>
                {/* Image Cart 1*/}
                <ImageCard
                    title="Mountain"
                    author="swarup_dev"
                    price={28}
                    img="https://images.pexels.com/photos/18300841/pexels-photo-18300841/free-photo-of-mountain-landscape-with-a-town-in-the-valley.jpeg"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />
                <ImageCard
                    title="Elephant Moun"
                    author="swarup_dev"
                    price={32}
                    img="https://images.pexels.com/photos/26924196/pexels-photo-26924196/free-photo-of-an-elephant-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />
                <ImageCard
                    title="Winter_Beer_"
                    author="swarup_dev"
                    price={10}
                    img="https://images.pexels.com/photos/26755457/pexels-photo-26755457/free-photo-of-three-polar-bears-by-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />
                <ImageCard
                    title="Elephant Moun"
                    author="swarup_dev"
                    price={32}
                    img="https://images.pexels.com/photos/26924196/pexels-photo-26924196/free-photo-of-an-elephant-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />
                <ImageCard
                    title="Elephant Moun"
                    author="swarup_dev"
                    price={32}
                    img="https://images.pexels.com/photos/26755457/pexels-photo-26755457/free-photo-of-three-polar-bears-by-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />
                <ImageCard
                    title="Elephant Moun"
                    author="swarup_dev"
                    price={32}
                    img="https://images.pexels.com/photos/26924196/pexels-photo-26924196/free-photo-of-an-elephant-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />
                <ImageCard
                    title="Elephant Moun"
                    author="swarup_dev"
                    price={32}
                    img="https://images.pexels.com/photos/26755457/pexels-photo-26755457/free-photo-of-three-polar-bears-by-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    icon1={<FaShoppingCart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                    icon2={<IoIosHeart className='text-2xl hover:scale-110 transition-all duration-300 ease-linear' />}
                />

            </div>
        </div>
    )
}

export default PhotoGallary


