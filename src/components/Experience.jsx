import React from 'react'
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'


const Experience = () => {

        const tech =[
            {
                id: 1,
                src: react,
                Title: 'REACT',
                style: 'shadow-blue-600'
            },
            {
                id: 2,
                src: html,
                Title: 'HTML',
                style: 'shadow-orange-500'
            },
            {
                id: 3,
                src: css,
                Title: 'CSS',
                style: 'shadow-blue-500'
            },
            {
                id: 4,
                src: tailwind,
                Title: 'TAILWIND',
                style: 'shadow-sky-500'
            },
            {
                id: 5,
                src: javascript,
                Title: 'JAVA-SCRIPT',
                style: 'shadow-yellow-500'
            },
            {
                id: 6,
                src: github,
                Title: 'GIT-HUB',
                style: 'shadow-gray-500'
            },
            {
                id: 6,
                src: react,
                Title: 'React',
                style: 'shadow-pink-500'
            }
        ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black h-full py-4'>  
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div className=''>
                <p className='text-4xl font-bold font-nonsig border border-b-4 inline  border-gray-500'>Experience</p>
                <p className='py-6'>These are the Technology I've Worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    tech.map(({id, src, Title, style}) => (
                        <div key={id} className={`shadow-md ${style} hover:scale-105 duration-500 py-2 rounded-lg`}>
                            <img src={src} alt={Title} className='w-20 mx-auto'/>
                            <p className='mt-4'>{Title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience