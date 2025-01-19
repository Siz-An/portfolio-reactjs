import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'



const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1, 
            text: 'Home', 
            url: '/'
        },
        {
            id: 2, 
            text: 'About', 
            url: '/about'},
        {
            id: 3, 
            text: 'portfolio', 
            url: '/portfolio'},
        {
            id: 4, 
            text: 'exeperince', 
            url: '/exeperince'
        },
        {
            id: 4, 
            text: 'Contact', 
            url: '/contact'
        },
    
    
    ]

  return (
    <div className="flex justify-between items-center w-full h-20
     text-white bg-black fixed"> 
     <div>
    <h1 className="text-5xl font-bold font-signature ml-2">PortFolio</h1>
    </div>

    <ul className="flex mr-2 md:flex hidden">

{
    links.map((link) => {
        const {id, text,} = link
        return (
            <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 
            capitalize hover:scale-105 duration-200">{text}</li>
        )
    }
    )
}
    </ul>
    <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 text-gray-50 md:hidden'>
        {
            nav ? <FaTimes size={30} /> : <FaBars size={30}/>
        }
    </div>
        {
            nav && (
                <ul className='flex flex-col justify-center items-center 
                absolute top-20 left-0 w-full h-screen bg-black text-gray-500'>
        
                {
            links.map((link) => {
                const {id, text,} = link
                return (
                    <li key={id} className="px-4 cursor-pointer 
                     text-gray-500 py-6 text-4xl">{text}</li>
                )
            }
            )
        }
                </ul>

            )
            
        }


    </div>
  )
}

export default NavBar