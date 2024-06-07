import React from 'react';
const edu = () => {
  return (
    // <div className=' h-screen w-full bg-cover bg-center' style={{backgroundImage:`url(${backgroundImage})`}}>
    //     <h1 className=' text-white text-8xl p-14'>Hey there</h1>
    // </div>
    <div className=' pl-8' id='edu'>
          <h1 className=' ml-16 mt-10 text-4xl font-semibold text-[#a05ca9]'>Education</h1>
          <hr className=' hr-custom-color ml-12 mt-2 mr-14' />
        <div>
            <div className=' pt-4'>
                <ol className=" list-decimal ml-6 mt-2">
                    <li className="lg:ml-12">
                        <strong className="font-medium italic text-[#a05ca9]">Masters Degree</strong> in <strong className="font-medium">Computer Science</strong><br/>The George Washington University, DC, USA
                        <br/><p className="text-sm">08/2023 - present </p> 
                    </li> <br/>
                    <li className="lg:ml-12">
                        <strong className="font-medium italic text-[#a05ca9]">Bachelor of Technology</strong> in <strong className="font-medium">Computer Science and Engineering</strong><br/>Gandhi Institute of Technology and Management, Visakhapatnam, India
                        <br/><p className="text-sm">06/2019 - 06/2023 </p> <br/>
                    </li>
                </ol>
            </div>
        </div> 
    </div>
  )
}

export default edu