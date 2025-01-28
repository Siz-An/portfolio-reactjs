import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion
import sizan from "../assets/sizan.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-5 ">
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2"
          initial={{ x: -100, opacity: 0 }} // Slide in from left
          animate={{ x: 0, opacity: 1 }} // Set to visible
          transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            <span className='font-nonsig'>Full~Stack</span> <span className="text-blue-600 font-sigs">Developer</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 mb-6">
            I am a full stack developer with expertise in{" "}
            <span className="text-blue-600 font-bold">Laravel</span>,{" "}
            <span className="text-green-400 font-bold">React</span>,{" "}
            <span className="text-yellow-400 font-bold">Flutter</span>,{" "}
            <span className="text-orange-500 font-bold">MySQL</span>, and{" "}
            <span className="text-blue-500 font-bold">Firebase</span>. Passionate
            about creating dynamic, user-friendly web and mobile applications.
          </p>

          <motion.div
            whileTap={{ scale: 0.95 }} // Click effect
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-5 py-2 flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-600 cursor-pointer"
            >
              View Portfolio
              <motion.span
                className="group-hover:rotate-90 cursor-pointer duration-300 ml-2"
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowForward size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="mt-6 md:mt-0 md:w-1/2 text-center"
          initial={{ scale: 0.8, opacity: 0 }} // Scale up with fade-in
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={sizan}
            alt="my profile"
            className="rounded-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg transform hover:scale-105 transition-all duration-300"
          />
          <motion.p
            className="mt-4 text-white text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }} // Fade-in with upward movement
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <span className='font-nonsig text-2xl'>Name</span><span className='font-signature text-2xl'> - </span><span className="text-2xl text-blue-400 font-signature">Sijan Mahato</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

