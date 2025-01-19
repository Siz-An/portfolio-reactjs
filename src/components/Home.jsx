import React from 'react'
import hehe from '../assets/hehe.png'
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
        <div>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'am a Full-Stack <span className='text-blue-800 font-nonsig'>Developer</span> </h2>
          <p className='text-gray-700 py-4 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellat reiciendis 
            a culpa quam quod accusantium reprehenderit perspiciatis omnis, 
            consectetur ratione debitis numquam nihil velit eius eligendi. Iure, quidem odio.
            </p>
            <div>
              <button className='group text-white font-signature w-fit px-4 py-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>
                PortFolio 
                <span className='group-hover:rotate-90 duration-300 items-center'>
                  <IoIosArrowForward size={15} className='ml-1'/>
                  </span>
              </button>
            </div>
        </div>
        <div>
        <img src={hehe} alt="my profile" className="rounded-2xl mx-auto w-1/2 md:w-full"/>

        </div>
      </div>

    </div>
  )
}

export default Home