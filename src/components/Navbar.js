import React from 'react';
import {Link} from 'react-scroll';
import '../index.css'; 


const navbar = () => {
  return (
    <div>
        <nav className=' bg-gradient-to-br from-[#a87aa5] to-[#c1a8bd] h-screen right-0 flex flex-col items-center justify-start py-36 overflow-y-auto'>
            <ul className='space-y-10 text-2xl text-black font-semibold'>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300 hover:scale-110'> <Link activeClass='active' to='abt' spy={true} smooth={true}>About</Link> </li>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300  hover:scale-110'> <Link activeClass='active' to='resume' spy={true} smooth={true}>Resume</Link> </li>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300 hover:scale-110'> <Link activeClass='active' to='edu' spy={true} smooth={true}>Education</Link> </li>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300 hover:scale-110'> <Link activeClass='active' to='proj' spy={true} smooth={true}>Projects</Link> </li>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300 hover:scale-110'> <Link activeClass='active' to='intern' spy={true} smooth={true}>Internships</Link> </li>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300 hover:scale-110'> <Link activeClass='active' to='oth' spy={true} smooth={true}>Others</Link> </li>
            <li className='cursor-pointer hover:text-[#d45c78] transform transition-transform duration:300 hover:scale-110'> <Link activeClass='active' to='contact' spy={true} smooth={true}>Contact</Link> </li>
            </ul>
        </nav>
    </div>
  )
}

export default navbar