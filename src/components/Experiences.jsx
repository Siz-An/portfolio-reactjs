import React, { useRef } from 'react'; // Add useRef here

import { motion, useInView } from "framer-motion";
import laravel from '../assets/portfolio/lara-logo.png';
import react from '../assets/portfolio/react.png';
import tailwind from '../assets/portfolio/tailwind-css.svg';
import flutter from '../assets/portfolio/flutter.png';
import mysql from '../assets/portfolio/mysql.svg';
import fire from '../assets/portfolio/fire.svg';

export default function Experiences() {
        const aboutRef = useRef(null);
        const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
    const experiences = [
        {
            id: 1,
            src: laravel,
            title: 'LARAVEL',
            style: 'shadow-red-500',
        },
        {
            id: 2,
            src: react,
            title: 'REACT',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: tailwind,
            title: 'TAILWIND CSS',
            style: 'shadow-teal-500',
        },
        {
            id: 4,
            src: flutter,
            title: 'FLUTTER',
            style: 'shadow-blue-900',
        },
        {
            id: 5,
            src: mysql,
            title: 'MY-SQL',
            style: 'shadow-orange-500',
        },
        {
            id: 6,
            src: fire,
            title: 'FIREBASE',
            style: 'shadow-yellow-500',
        },
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black md:h-screen italic">
            <div className="max-w-screen-lg pt-16 p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div>
                              <motion.div
                                      ref={aboutRef}
                                      initial={{ x: "-100px", opacity: 0 }}
                                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                                      transition={{ duration: 0.8, ease: "easeOut" }}
                                      className="pb-8"
                                  >
                                      <p className="text-4xl font-bold inline border-b-2 font-sigs">Experience </p>
                                      <p className="text-xl py-4">These are the technologies I specialize in.</p>
                                  </motion.div>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {experiences.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-400 py-2 min-w-[110px] min-h-[160px] rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-16 h-16 object-contain mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
