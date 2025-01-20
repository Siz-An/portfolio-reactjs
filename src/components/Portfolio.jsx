import React from 'react'
import asset from '../assets/portfolio/arrayDestruct.jpg'

function Portfolio() {


    const portfolio = [
        {
            id: 1,
            src: asset,

            },
        {
            id: 2,
            src: asset,
            },
        {
            id: 3,
            src: asset,
            },
        {
            id: 4,
            src: asset,
            },
        {
            id: 5,
            src: asset,
            },
        {
            id: 5,
            src: asset,
            },

    ]

  return (
    <div name='portfolio' className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border font-nonsig border-gray-500'>Portfolio -</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                
                portfolio.map(({id, src}) => (

                    <div  key={id}  className='shadow-md shadow-gray-600'>
                    <img src={src} alt="my pro" className='rounded-md hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>code</button>
                    </div>
        
                    </div>
 


                ))
        }
            </div>

        </div>
    </div>

  )
}

export default Portfolio