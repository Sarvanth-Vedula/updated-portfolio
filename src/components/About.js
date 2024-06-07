import React from 'react';
import '../index.css'; 
import img1 from '../images/IMG_1850.jpg';
const about = () => {
  return (
    <div className=' pl-8' id='abt' >
        <h1 className=' ml-16 mt-10 text-4xl font-semibold text-[#a05ca9]'>About</h1>
        <div className=' text-lg'>
        <hr className=' hr-custom-color ml-12 mt-2 mr-14' />
        <div className=' ml-9'>
          <p className='mx-12 mb-10 mt-6'>
            I am a <strong className=' italic text-[#a05ca9]'> meticulous</strong> and enthusiastic individual who consistently believes in the power of self.
            Whether it's tackling complex challenges or bringing creative ideas to life, I approach each task with enthusiasm and a strong belief in my abilities. I am a <strong className=' italic text-[#a05ca9]'>programmer</strong> with extensive coding knowledge.
          </p>
        </div>
        </div>

        <div className=' pl-8 mx-20 text-lg flex'>
            <ul className='space-y-3'>
              <li><strong class="font-medium">Age</strong>:21</li>
              <li><strong class="font-medium">Degree</strong>: B.Tech, M.S. (In progress)</li>
              <li><strong class="font-medium">Email</strong>: sarvanthvedula@gmail.com</li>
              <li><strong class="font-medium">Hobbies</strong>: Hiking, Cricket, Cycling, Organizing events, Learning about different cultures</li>
              <li><strong class="font-medium">Location</strong>: Arlington, Virginia</li>
              <li><strong class="font-medium">LinkedIn</strong>: <a href="https://www.linkedin.com/in/sarvanth-vedula" target="_blank" rel="noopener noreferrer" className="text-[#a05ca9] hover:underline">Sarvanth Vedula</a></li>
              <li><strong class="font-medium">GitHub</strong>: <a href="https://github.com/Sarvanth-Vedula" target="_blank" rel="noopener noreferrer" className="text-[#a05ca9] hover:underline">Sarvanth Vedula</a></li>

            </ul>
            <img src={img1}  height={5} width={150} className='rounded-3xl mx-20' alt='Sarvanth Vedula' />

            </div>

    </div>
  )
}

export default about