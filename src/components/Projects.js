import React from 'react';


const projectData = [
  {
    title: "Assiduous Study of the Hyper-parameters' Influence on CNN using COVID-19 CT Images",
    date: '08/2022 - 09/2022',
    verifyLink: 'https://shorturl.at/wBWYZ',
    details: [
      'Conducted studies on deep learning and how CT images might be used for diagnosis. This is a group project in which I continuously contributed.',
      'We trained a CNN model by changing different Hyper-parameters and observed its behavior.',
      'I personally worked on Activation functions. We also published our project in a research paper at the ICISC conference.',
    ]
  },
  {
    title: 'Created a full stack blog website',
    date: '09/2022 - 10/2022',
    verifyLink: 'https://sarvanthvedula-blogsite.netlify.app/',
    details: [
      'Created a blog website using React, CSS, and Firebase (for authentication, storage, and database) where people can read blogs.',
      'Only authorized users can create or edit the blogs.',
    ]
  },
  {
    title:
      'A Study on Pragmatic Performance and Analysis of CNN and QNN Algorithms on Various Computing Machines using COVID-19 Images',
    date: '02/2023 - 04/2023',
    verifyLink:'https://colab.research.google.com/drive/16BI4aUtoT2SU4o_bMkf_O1_Ibit-cKA2?usp=sharing',
    details: [
      'In this study, we presented the analysis of CT images using deep learning to identify COVID-19 on CPU, GPU, HPC, and quantum machines.',
      'Performance comparisons based on training duration were also made.',
      'The effect of modifying the values of various hyper-parameters in the model on various computers has also been investigated.',
    ]
  },
  {
    title:
      'Detecting Suicidal Ideation in Tweets: A Real-Time ML Approach',
    date: '03/2024 - 04/2024',
    verifyLink:'https://colab.research.google.com/drive/1AAAYTqJ9ALZ-1Q3x7-heI7y_9-Ke8iHh?usp=sharing',
    details: [
      'Developed a machine learning system to detect suicidal ideation in tweets using models like SVM, Logistic Regression, Random Forest, and BERT.',
      'The models were evaluated based on accuracy, precision, recall, and F1 score, providing a comprehensive view of their performance in classifying tweets.',
      'BERT excelled with 94.41% testing accuracy, showcasing superior NLP capabilities for real-time mental health monitoring on social media.',
    ]
  
  },
  
];

const projects = () => {
  return (
    <div className='pl-8 bg-gradient-to-br from-[#a87aa5] to-[#d1b9cd]' id='proj'>
      <h1 className='ml-16 mt-10 text-4xl font-semibold text-[#57365b] pt-4'>Projects</h1>
      <hr className='hr-custom-color ml-12 mt-2 mr-14' />
      <div className='flex flex-row flex-nowrap overflow-x-auto py-6 gap-4'>
        {projectData.map((project, index) => (
          <div key={index} className=' shadow-2xl m-4 bg-gradient-to-br from-[#a87aa5] to-[#c3a7be]  min-w-[300px] max-w-xs rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110'>
            <div className='p-6'>
              <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
              <p className='text-sm mb-2'>{project.date}</p>
              <a
                href={project.verifyLink}
                target='_blank'
                rel='noreferrer'
                className='text-[#985867] italic hover:text-[#d45c78]'
              >
                Verify - <strong>Click here</strong>
              </a>
              <ol className=' list-disc ml-4 mt-2 space-y-2'>
                {project.details.map((detail, i) => (
                  <li key={i} className=' text-base'>
                    {detail}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default projects;
