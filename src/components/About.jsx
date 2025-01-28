import React from 'react';

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            About
          </p>
        </div>
        <div>
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
            Hi, I’m <span className="text-blue-500 font-semibold">Sizan Mahato</span>! <br /><br />
            I’m a full stack developer with a passion for creating innovative, user-friendly, and visually stunning digital experiences. With expertise in 
            <span className="text-green-400"> React.js</span>, 
            <span className="text-blue-400"> Laravel</span>, 
            <span className="text-yellow-400"> Flutter</span>, and 
            <span className="text-orange-500"> Firebase</span>, I excel at turning ideas into seamless applications that are as functional as they are beautiful.
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
