import React from 'react';

const Others = () => {
  return (
    <div className='pl-8 pt-4 bg-gradient-to-br from-[#a87aa5] to-[#d1b9cd]' id='oth'> 
      <h1 className='ml-12 mt-10 text-4xl font-semibold text-[#57365b] pt-4'>Others</h1>
      
      <div className='bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-4 mx-12 mt-4'>
        <h1 className='text-3xl font-semibold mb-2'>Publications</h1>      
        <hr className='border-[#a05ca9] border-t-2' />
        <strong className="font-medium">Assiduous Study of the Hyperparameters’ Influence on CNN Using COVID-19 CT Images</strong>
        <div className='mt-2'>
          08/2022 - 10/2022
          <br/>
           <a href="https://link.springer.com/chapter/10.1007/978-981-99-1624-5_23" target='_blank' rel="noreferrer" className='font-medium hover:text-[#d45c78]'><div className=' transform transition-transform duration-300 hover:scale-95'>Verify - Click here for paper</div></a>
        </div>
        <p>This paper is published on the basis of our deep learning project. The primary purpose of writing this paper is to show
        the observations and analysis we made from our deep learning project.</p>
      </div>

      <div className='bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-4 mx-12 mt-4'>
        <h1 className='text-3xl font-semibold mb-2'>Organizations</h1>       
        <hr className='border-[#a05ca9] border-t-2' />
        <strong className="font-medium">Computer Society of India</strong>
        <p className='mt-2'>08/2022 - 10/2022<br/> While I was an undergrad, I joined the Computing Society of India student group as a core member of public relations. I frequently assist with event planning and educate people about forthcoming events for my club. Working at this club gave me a lot of experience, taught me how to interact with various types of people and find diplomatic solutions to difficulties.</p>
      </div>

      <div className='bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-4 mx-12 mt-4'>
        <h1 className='text-3xl font-semibold mb-2'>Certifications</h1>       
        <hr className='border-[#a05ca9] border-t-2' />
        <ol>
          <li className='font-medium'>Python Data Structures <a href='https://coursera.org/share/3df0398309e906a2547645189620bd54' target='_blank' rel='noreferrer' className='hover:text-[#d45c78]'><div className='font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'> Certified by The University of Michigan -- verify </div></a> </li>
          {/* More certifications listed in the same format */}
          <li className=' font-medium'>Python Data Structures <a href='https://coursera.org/share/3df0398309e906a2547645189620bd54' target='_blank' rel='noreferrer' className=' hover:text-[#d45c78] '><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'> Certified by The University of Michigan -- verify </div></a> </li>
                <li className=' font-medium'>Database Management Essentials <a href='https://coursera.org/share/bf6f514efce4111d5550ecd780cd92cd' target='_blank' rel='noreferrer' className=' hover:text-[#d45c78]'><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'>  Certified by The University of Colorado -- verify</div></a> </li>
                <li className=' font-medium'>Introduction to Back-End Development  <a href='https://coursera.org/share/5ceb320929468192aa194368b16fc566' target='_blank' rel='noreferrer' className=' hover:text-[#d45c78]'><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'>  Certified by Meta --verify</div></a> </li>
                <li className=' font-medium'>AWS Cloud Technical Essentials  <a href='https://coursera.org/share/a0ca373483f11d40b46d8dd2f81fd41e' target='_blank'  rel='noreferrer' className=' hover:text-[#d45c78]'><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'>  Certified by AWS --verify</div></a> </li>
                <li className=' font-medium'>Agile Software Development  <a href='https://coursera.org/share/dda4ee3faaaa3e607de1e4941738ff7c' target='_blank'  rel='noreferrer' className=' hover:text-[#d45c78]'><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'> Certified by The University of Minnesota --verify</div></a> </li>
                <li className=' font-medium'>The Bits and Bytes of Computer Networking  <a href='https://coursera.org/share/6d542a7c6bdda193a6137c3907c0023f' target='_blank' rel='noreferrer' className=' hover:text-[#d45c78]'><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'>  Certified by Google --verify</div></a> </li>
                <li className=' font-medium'>Introduction to Artificial Intelligence <a href='https://coursera.org/share/ad9d29dd4761cd23421d294d2262b34c' target='_blank' rel='noreferrer' className=' hover:text-[#d45c78]'><div className=' font-normal italic ml-10 transform transition-transform duration-300 hover:scale-105'> Certified by IBM --verify</div></a> </li>
        </ol>
      </div>
    </div>
  )
}

export default Others;
