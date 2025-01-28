
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200 italic"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
            <motion.div
                  ref={aboutRef}
                  initial={{ x: "-100px", opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                   className="pb-8"
                  >
                  <p className="text-4xl font-bold font-sigs inline border-b-2">About Me ~ </p>
             </motion.div>
        </div>
        <div>
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
            Hi, I’m <span className="text-blue-500 font-extrabold italic">Sijan Mahato</span> ! <br /><br />
            I’m a full stack developer with a passion for creating innovative, user-friendly, and visually stunning digital experiences. With expertise in 
            <span className="text-blue-400 font-bold"> React.js</span>, 
            <span className="text-red-400 font-bold"> Laravel</span>, 
            <span className="text-teal-400 font-bold"> Flutter</span>,
            <span className="text-orange-400 font-bold"> MySql</span>,  and 
            <span className="text-yellow-500 font-bold"> Firebase</span>, I excel at turning ideas into seamless applications that are as functional as they are beautiful.
            <br /><br />
            At the core of my work is a blend of creativity and technology. Whether it's designing intuitive interfaces, developing dynamic web applications, or ensuring robust backend solutions, I strive to push boundaries and exceed expectations in every project.
            <br /><br />
            Let’s collaborate and build something exceptional together!
          </p>
        </div>
      </div>
    </div>
  );
}

