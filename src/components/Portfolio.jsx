import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import flappy from '../assets/flappy3.png';
import lmss from '../assets/lms.png';
import ecom from '../assets/ecom.png';
import crm from '../assets/crm.PNG';
import erp from '../assets/erp.PNG';
import tra from '../assets/travel.PNG';
import hot from '../assets/hot.PNG';
import fut from '../assets/futsal.png';
import exp from '../assets/expense.png';
import hubs from '../assets/freelance.PNG';
import port from '../assets/portfolio.png';


export default function Portfolio() {
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });

    // Add techStack property to each item
    const portfolioItems = [
        { 
            id: 1, 
            src: crm,
            demo: '',
            code: '',
            techStack: ['CRM Website','Laravel', 'My-SQL', 'Bootstrap', 'Company Project'],
        },
        { 
            id: 2, 
            src: erp,
            demo: '',
            code: '',
            techStack: ['ERP Software','Laravel', 'MySQL', 'Bootstrap', 'Company Project'],
        },
        { 
            id: 3, 
            src: tra,
            demo: 'https://nomadquest.netlify.app/',
            code: 'https://github.com/Siz-An/NomadQuest-AI',
            techStack: ['AI-Powered Travel Agency App','React', 'OpenAI API', 'TailwindCSS','Made using AI'],
        },
        { 
            id: 4, 
            src: hot,
            demo: 'https://luxxe.netlify.app/',
            code: 'https://github.com/Siz-An/luxe-Hotel',
            techStack: ['luxxe-Hotel Booking','React', 'TailwindCSS','Firebase','Made using AI'],
        },
        { 
            id: 4, 
            src: hubs,
            demo: 'https://freelancehubnepal.netlify.app/',
            code: 'https://github.com/Siz-An/freelancehub-nepal-launch',
            techStack: ['Freelance hub for Nepal','React', 'TailwindCSS','Made using AI'],
        },
        { 
            id: 5, 
            src: port,
            demo: 'https://sijanmahato.com.np/',
            code: 'https://github.com/Siz-An/portfolio-reactjs',
            techStack: ['React', 'TailwindCSS'],
        },
        { 
            id: 6, 
            src: lmss,
            demo: '',
            code: 'https://github.com/Siz-An/LibraryManagementApp-BookVerse',
            techStack: ['Flutter', 'Firebase', 'Google API'],
        },
        { 
            id: 7, 
            src: ecom,
            demo: '',
            code: 'https://github.com/Siz-An/E-Commerce_php',
            techStack: ['PHP', 'MySQL', 'CSS', 'Bootstrap'],
        },
        { 
            id: 8, 
            src: fut,
            demo: '',
            code: 'https://github.com/Siz-An/FutsalBooking-flutter',
            techStack: ['Flutter', 'Firebase'],
        },
        { 
            id: 9, 
            src: flappy,
            demo: '',
            code: 'https://github.com/Siz-An/Flappy_bird_Game',
            techStack: ['Flutter', 'Sqflite'],
        },
        { 
            id: 10, 
            src: exp,
            demo: '',
            code: 'https://github.com/Siz-An/ExpensesTracker-Flutter',
            techStack: ['Flutter', 'Firebase'],
        },
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800  text-gray-200">
            .
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    ref={aboutRef}
                    initial={{ x: "-100px", opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="pb-8"
                >
                    <p className="text-4xl font-bold font-sigs inline border-b-2 not-italic">Portfolio</p>
                    <p className="text-xl py-4 italic">Check out some of my works.</p>
                </motion.div>
                <motion.div
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 4, ease: 'easeOut' }}
                >
                    {portfolioItems.map(({ id, src, demo, code, techStack }) => (
                        <motion.div
                            key={id}
                            className="shadow-md shadow-slate-700 rounded-lg"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 * id }}
                        >
                            <div className="relative group">
                                <img 
                                    src={src} 
                                    alt={`Project ${id}`} 
                                    className="w-full h-40 object-contain rounded-t-lg"
                                />
                                {/* Tech stack overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg z-10">
                                    <span className="text-lg font-semibold mb-2">Tech Stack</span>
                                    <ul className="text-sm space-y-1">
                                        {techStack && techStack.map((tech, idx) => (
                                            <li key={idx}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <a
                                    href={demo || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-1/2 px-4 py-2 m-2 text-sm text-center rounded hover:scale-105 hover:text-blue-600 duration-200 ${
                                        demo ? 'cursor-pointer' : 'cursor-not-allowed text-gray-500'
                                    }`}
                                >
                                    Demo
                                </a>
                                <a 
                                    href={code || '#'} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`w-1/2 px-4 py-2 m-2 text-sm text-center rounded hover:scale-105 hover:text-gray-500 duration-200 ${
                                        code ? 'cursor-pointer' : 'cursor-not-allowed text-gray-500'
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