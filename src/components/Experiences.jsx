import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import js from '../assets/js.jpg';
import tailwindcss from '../assets/tailwindcss.jpg';

export default function Experiences() {
    const experiences = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwindcss,
            title: 'Tailwind CSS',
            style: 'shadow-teal-500',
        },
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black md:h-screen">
            <div className="max-w-screen-lg pt-16 p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-2 border-gray-500 p-2 inline">
                        Experiences
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {experiences.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-400 py-2  min-h-[180px] rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
