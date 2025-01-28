import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import flappy from '../assets/flappy3.png';
import lmss from '../assets/lms.png';
import ecom from '../assets/ecom.png';
import fut from '../assets/futsal.png';
import exp from '../assets/expense.png';
import port from '../assets/portfolio.png';


export default function Portfolio() {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });
  
    const portfolioItems = [
        { 
            id: 1, 
            src: port,
            href: 'https://github.com/Siz-An/portfolio-reactjs',
        },
        { id: 2, src: lmss,
            href: 'https://github.com/Siz-An/LibraryManagementApp-BookVerse',
         },
        
        { id: 3, src: ecom,
            href: 'https://github.com/Siz-An/E-Commerce_php',
         },
         { id: 4, src: fut,
            href: 'https://github.com/Siz-An/FutsalBooking-flutter',
         },
         { id: 5, src: flappy,
            href: 'https://github.com/Siz-An/Flappy_bird_Game',
         },
         { id: 6, src: exp,
            href: 'https://github.com/Siz-An/ExpensesTracker-Flutter',
         },
        
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 md:h-screen text-gray-200 italic">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <motion.div
                    ref={aboutRef}
                    initial={{ x: "-100px", opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold font-sigs inline border-b-2">Portfolio</p>
                    <p className="text-xl py-4">Check out some of my works.</p>
                </motion.div>
                {/* Wrap the portfolio items in motion.div */}
                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, ease: 'easeOut' }}
                >
                    {portfolioItems.map(({ id, src, href }) => (
                        <motion.div
                            key={id}
                            className="shadow-md shadow-slate-700 rounded-lg"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 * id }}
                        >
                            <img 
                                src={src} 
                                alt={`Project ${id}`} 
                                className="w-full h-40 object-contain rounded-t-lg" 
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-4 py-2 m-2 text-sm rounded hover:scale-105 hover:text-blue-600 duration-200">
                                    Demo
                                </button>
                                <a 
                                    href={href || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`w-1/2 px-4 py-2 m-2 text-sm text-center rounded hover:scale-105 hover:text-gray-500 duration-200 ${
                                        href ? 'cursor-pointer' : 'cursor-not-allowed text-gray-500'
                                    }`}
                                >
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}