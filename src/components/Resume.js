import React from 'react'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { FaCuttlefish, FaJava,FaGithub, FaPython,FaRProject, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandJavascript} from 'react-icons/tb';  
import { SiSolidity } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";





const resume = () => {
    const skills = [
        { name: 'C ', icon: <FaCuttlefish className="text-[#57365b]" /> },
        { name: 'Java', icon: <FaJava className="text-[#57365b]" /> },
        { name: 'Python', icon: <FaPython className="text-[#57365b]" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-[#57365b]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#57365b]" /> },
        { name: 'JavaScript', icon: <TbBrandJavascript className="text-[#57365b]" /> },
        { name: 'React', icon: <FaReact className="text-[#57365b]" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-[#57365b]" /> },
        { name: 'Solidity', icon: <SiSolidity className="text-[#57365b]" /> },
        { name: 'SQL', icon: <BsFiletypeSql className="text-[#57365b]" /> },
        { name: 'R', icon: <FaRProject className="text-[#57365b]" /> },
        { name: 'Git', icon: <FaGithub className="text-[#57365b]" /> },




        
    ];
  return (
    <div className="pl-8 bg-gradient-to-br from-[#a87aa5] to-[#d1b9cd]" id='resume'> 
        <div>
            <h1 className=" ml-16 mt-10 text-4xl pt-6 font-semibold text-[#57365b]">Resume</h1> 
            <hr className=' hr-custom-color ml-12 mt-2 mr-14' /> <br/>
            <span className=' transform transition-transform duration-300 hover:scale-105'></span>
            <a
      href='https://drive.google.com/file/d/1hJdZWa9r7luIcdLPv2HIoU-FgZQlGFXW/view?usp=sharing'
      className='ml-24 flex items-center transition-transform duration-300 hover:scale-95 hover:text-[#d45c78]'
      target='_blank'
      rel='noreferrer'
    >
      <FontAwesomeIcon 
        icon={faFile} 
        color="#271f51" 
        size='2xl' 
        className='transition-transform duration-300 hover:text-[#d45c78]' 
      />
      <span 
        className='pl-4 text-xl font-semibold transition-transform duration-300 hover:text-[#d45c78]'
      >
        Download . . .
      </span>
    </a>
            
        </div>
        <div className=' lg:visible'>
            <h1 className=" ml-16 mt-10 text-4xl font-semibold text-[#57365b]">Technical Skills</h1> 
            <hr className=' hr-custom-color ml-12 mt-2 mr-14' />  <br/>
            {/* <div className=" lg:flex text-lg lg:ml-14">
                <div>
                    <ol class="ml-12 space-y-3 text-white">
                        <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">C</li> <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">Java</li><li class="bg-zinc-600 rounded hover:rounded-xl p-1">Python</li>
                     </ol> 
                </div>
                <div>
                    <ol class="ml-12 space-y-3 text-white">
                        <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">HTML</li> <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">CSS</li><li class="bg-zinc-600 rounded hover:rounded-xl p-1">JavaScript</li>
                    </ol>
                </div>

                <div>
                    <ol class="ml-12 space-y-3 text-white">
                         <li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">TailwindCSS</li><li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">ReactJS</li><li class="bg-zinc-600 text-center rounded hover:rounded-xl p-1">SQL</li>
                    </ol> 
                </div>
            </div> <br/> */}

            <div className=' py-10'>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                <div key={index} className=" bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <span className=' text-2xl'>{skill.icon}</span>
                    <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
                </div>
            ))}
        </div>
        </div>
        </div>
    </div>
  )
}

export default resume