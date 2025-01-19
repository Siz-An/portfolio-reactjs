import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram} from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

  const Links = [
    {
      id: 1,
      child:(
        <>Linkdin <FaLinkedin size={30}/>
                 </>
      ),
      href: 'https://www.linkedin.com/in/sijan-mahato-a10349284/',
    },
    {
      id: 2,
      child:(
        <>Github <FaGithub size={30}/>
                 </>
      ),
      href: 'https://github.com/Siz-An',
    },
    {
      id: 3,
      child:(
        <>Linkdin <FaFacebook size={30}/>
                 </>
      ),
      href: 'https://www.facebook.com/sizan.mahato/',
    },
    {
      id: 4,
      child:(
        <>Instagram <FaInstagram size={30}/>
                 </>
      ),
      href: 'https://www.linkedin.com/in/sijan-mahato-a10349284/',
    },
    {
      id: 5,
      child:(
        <>Mail <FiMail size={30}/>
                 </>
      ),
      href: 'sizanmahato@gmail.com',

    },
    {
      id: 6,
      child:(
        <>Resume <BsFillPersonLinesFill size={30}/>
                 </>
      ),
      href: '/Sizan-PHP.pdf',
      style: 'rounded-br-md',
      download: true

    },

  ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'> 
        <ul>
          {Links.map(({id, child, href, style, download}) => (
                      <li
                      key={id} 
                      className= {"flex flex-justify-between items-center w-40 h-14 px-4 bg-gray-400 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"+
                       " " +
                        style
                        }>
                      <a href={href} 
                      className='flex justify-between items-center w-full text-white'
                      download={download}
                      target='_blank'
                      rel="noreferrer" 
                        >
                       {child}
                   
                        </a></li>
          ))}
        </ul>

    </div>
  )
  
}

export default SocialLinks