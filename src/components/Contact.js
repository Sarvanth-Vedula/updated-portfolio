import React, { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Robotdance from './Robotdance';  

import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault(); 

        emailjs.sendForm('service_gh3sgkj', 'template_bsnezwh', e.target, 'mxDEfKyp1GyMofIEr')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            });

        e.target.reset();
    };

    return (
        <div id='contact' className="bg-gradient-to-br from-[#ffffff] flex flex-row to-[#d5d2d4] min-h-screen p-4">
            <div className='max-w-4xl w-3/5 bg-[#d5d2d4] backdrop-blur-lg rounded-xl shadow-xl overflow-hidden p-6'>
                <h1 className='text-center text-4xl font-semibold text-[#57365b] p-4'>Contact</h1>
                <hr className='border-t-4 border-[#a05ca9]' />
                <div className='flex flex-row justify-between items-start p-8'>
                    <div className='flex flex-col w-1/2 pr-8'>
                        <form onSubmit={sendEmail} className=' space-y-6'>
                            <div>
                                <label htmlFor='fullName' className='text-xl font-medium text-gray-700 mb-4'>Full Name</label>
                                <input type='text' name='from_name' id='fullName' required placeholder='First and last name' 
                                    className='mt-1 p-2 border border-[#a05ca9] rounded-lg w-full  focus:outline-[#78427f] focus:border-transparent'/>
                            </div>

                            <div>
                                <label htmlFor='email' className='text-xl font-medium text-gray-700'>E-mail</label>
                                <input type='email' name='to_name' id='email' required placeholder='johndoe@gmail.com' 
                                    className='mt-1 p-2 border border-[#a05ca9] rounded-lg w-full focus:outline-[#78427f] focus:border-transparent'/>
                            </div>

                            <div>
                                <label htmlFor='message' className='text-xl font-medium text-gray-700'>Message</label>
                                <textarea name='message' id='message' required placeholder='Enter your message here...' rows='5' 
                                    className='mt-1 p-2 border border-[#a05ca9] rounded-lg w-full focus:outline-[#78427f] focus:border-transparent'></textarea>
                            </div>

                            <button type='submit' className='text-xl mt-2 text-white font-medium py-2 px-4 rounded-lg bg-[#a05ca9] hover:bg-[#5f3365] transition-colors'>
                                Contact Me
                            </button>
                        </form>
                    </div>

                    <div className='w-1/2 pl-8 space-y-6 mt-12'>
                        <h1 className='text-2xl font-medium text-gray-700'>Contact Info:</h1>
                        <div>
                            <h2 className='text-xl mb-3 font-medium text-gray-700'>Email: sarvanthvedula@gmail.com</h2>
                            <h2 className='text-xl font-medium text-gray-700'>Phone: +1-(571)-789-7311</h2>
                        </div>
                        <div>
                            <span className='text-xl font-medium text-gray-700'>Follow me on social media:</span>
                            <div className='flex mt-2 space-x-8'>
                                <a href="https://www.linkedin.com/in/sarvanth-vedula-06ba01191/" target="_blank" rel="noopener noreferrer" className='text-[#a05ca9] text-3xl hover:text-[#5f3365] transition-colors'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://www.instagram.com/sarvanth_1718/" target="_blank" rel="noopener noreferrer" className='text-[#a05ca9] text-3xl hover:text-[#5f3365] transition-colors'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://github.com/Sarvanth-Vedula" target="_blank" rel="noopener noreferrer" className='text-[#a05ca9] text-3xl hover:text-[#5f3365] transition-colors'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-2/5 mt-44'>
               <Canvas className=' h-2'>
                <ambientLight intensity={2}/>
                <OrbitControls enableZoom={false}/>
                  <Suspense fallback={null}>
                      <Robotdance/>
                  </Suspense>
                  <Environment preset='night'/>
               </Canvas>
            </div>
        </div>
    );
}

export default Contact;
