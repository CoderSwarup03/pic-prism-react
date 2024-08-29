import React from 'react'
import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
    return (
        <div className='sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center'>
            <form className='absolute flex justify-center items-center'>
                <input 
                    type="search"
                    name="search"
                    id="search"
                    className='py-5 px-3 w-[75vw] sm:w-[45vw] text-xl sm:text-3xl sm:rounded-xl mx-auto outline-none border-b-2 bg-bgColor' placeholder='Search Your Assect'
                />
                <IoIosSearch className='text-3xl sm:text-5xl text-gray-400 -ml-10'/>
            </form>
        </div>
    )
}


export default HeroSection
