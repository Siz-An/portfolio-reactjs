import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold font-nonsig inline border-b-4 border border-gray-500'>About -</p>

            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Inventore, perspiciatis pariatur beatae animi vel amet iste
                  voluptatibus, iure earum doloribus minus porro totam laudantium, 
                  maiores unde nam temporibus quibusdam esse fuga facere est. 
                  Fugit facilis, ea sint blanditiis explicabo est quibusdam commodi
                 quam laudantium atque dolorem architecto maxime officiis rerum.</p>
                 <br />
                 <p text-xl>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Quo autem voluptates in neque soluta officia distinctio facere 
                     enim rerum accusamus, sequi eaque, impedit eligendi quos pariatur 
                     explicabo? Similique dolore voluptas nam aliquam itaque vero fuga 
                     architecto in praesentium. Quasi enim quisquam sequi
                     itaque reprehenderit recusandae saepe corrupti nulla, fugiat fugit?</p>
        </div>

    </div>
  )
}

export default About