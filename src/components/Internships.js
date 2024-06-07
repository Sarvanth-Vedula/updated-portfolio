import React from 'react';

const Internships = () => {
  return (
    <div className='pl-8 pt-4' id='intern'>
      <h1 className='ml-16 mt-10 text-4xl font-semibold text-[#57365b]'>Internships</h1>
      <hr className='ml-12 mt-2 mr-14 border-t-4 border-[#a05ca9]' />
      <div className='flex justify-center items-start mt-12 relative'>
        
        {/* Vertical Line */}
        <div className='w-1 bg-[#a05ca9] h-full absolute left-1/2 transform -translate-x-1/2'></div>

        {/* Internship Detail Left */}
        <div className='w-2/5'>
        <hr className=' bg-[#a05ca9] h-1 size-1/6 float-end'/>

          <div className=' mr-6 2xl:ml-24'> 
          <div className='text-left'>
            <h2 className='text-xl font-semibold mb-2'>Software Development Intern at MyEdMaster</h2>
            <p className='text-sm mb-2'>05/2024 - Present</p>
            <a
              href='https://drive.google.com/file/d/1kvJGz4G86fnDIllwt4IaThT65TGWAauD/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='text-[#985867] italic hover:text-[#d45c78]'>
              <div className=' transform transition-transform duration-300 hover:scale-95'>Verify - <strong>Click here</strong></div>
            </a>
            <ol className='list-disc space-y-2 mt-2 mr-4'>
              <li>Developing online educational and health software products that use AI and Machine Learning.</li>
              <li>Working on a new feature for a health product that takes help of AI and ML.</li>
            </ol>
          </div> </div>

          <div className=' mt-96'>
          <hr className=' bg-[#a05ca9] h-1 size-1/6 float-end'/>
          <div className=' mr-6 2xl:ml-24'>
          <div className='text-left'>

            <h2 className='text-xl font-semibold mb-2'>Web Development and Designing Intern at The Sparks Foundation</h2>
            <p className='text-sm mb-2'>03/2022 - 04/2022</p>
            <a
              href='https://truecertificates.com/verified/2VTVGPXHGW'
              target='_blank'
              rel='noreferrer'
              className='text-[#985867] italic hover:text-[#d45c78]'>
              <div className=' transform transition-transform duration-300 hover:scale-95'>Verify - <strong>Click here</strong></div>
            </a>
            <ol className='list-disc space-y-2 mt-2 mr-4'>
              <li>Designed a website for donating money to a charity. Used JavaScript for validation.</li>
              <li>For payment gateway I have used "razorpay" test mode api.</li>
            </ol>
          </div></div>
          </div>
        </div>
        

        {/* Internship Detail Right */}
        
        <div className=' w-2/5 mt-80'>
        <hr className='bg-[#a05ca9] h-1 w-1/6 ml-0 float-start relative left-0 top-4'/>
          <div>
          <div className='text-left 2xl:ml-44 ml-20 pl-4'>

            <h2 className='text-xl font-semibold mb-2'>Data Science Intern at Yoshops.com</h2>
            <p className='text-sm mb-2'>06/2022 - 08/2022</p>
            <a
              href='https://drive.google.com/file/d/1CNHvdiMIOBky2fHfNoSCBtRBOPW2iqHE/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
              className='text-[#985867] italic hover:text-[#d45c78]'>
              <div className=' transform transition-transform duration-300 hover:scale-95'>Verify - <strong>Click here</strong></div>
            </a>
            <ol className='list-disc space-y-2 mt-2 ml-4'>
              <li>Created data visualization graphics, translating complex data sets into comprehensive visual representations.</li>
              <li>Performed advanced data extraction and data manipulation. Explored Python to inspect large datasets</li>
            </ol>
          </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Internships;
