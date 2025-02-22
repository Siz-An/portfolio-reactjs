import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/sijan-mahato-a10349284/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Siz-An',
        },
        {
            id: 3,
            child: (
                <>
                    Facebook <FaFacebook size={30} />
                </>
            ),
            href: 'https://www.facebook.com/sizan.mahato/',
        },
        {
            id: 4,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:sizanmahato@gmail.com',
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Backend-Sijan.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed italic">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-black"
                            download={download || false}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
