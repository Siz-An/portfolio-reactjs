import React from 'react';
import lms from '../assets/portfolio/lms.png';
import flappy from '../assets/flappy3.png';


export default function Portfolio() {
    const portfolioItems = [
        { id: 1, src: lms },
        { id: 2, src: flappy },
        { id: 3, src: lms },
        { id: 4, src: lms },
        { id: 5, src: lms },
        { id: 6, src: lms },
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 md:h-screen text-gray-200">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-2">Portfolio</p>
                    <p className="text-xl py-4">Check out some of my works.</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">

                    {portfolioItems.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-slate-700 rounded-lg">
                            <img src={src} alt={`Project ${id}`} className="w-full h-40 object-contain  rounded-t-lg  " />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-4 py-2 m-2 text-sm rounded hover:scale-105 hover:text-blue-600 duration-200">
                                    Demo
                                </button>
                                <button className="w-1/2 px-4 py-2 m-2 text-sm  rounded hover:scale-105  hover:text-gray-500 duration-200">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
