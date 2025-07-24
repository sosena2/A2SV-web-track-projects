import React from 'react'
import { JobAbout } from '@/types/jobs'

interface AboutProps {
  about: JobAbout;
}

const About : React.FC<AboutProps> = ({about}) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-sm'>
      <h3 className='font-[900] text-[24px] leading-[1.2] mb-4'>About</h3>
      <div className='space-y-4'>
        <div>
          <p className='text-gray-500 text-sm'>Posted On</p>
          <p>{about.posted_on}</p>
        </div>
        <div>
          <p className='text-gray-500 text-sm'>Deadline</p>
          <p>{about.deadline}</p>
        </div>
        <div>
          <p className='text-gray-500 text-sm'>Location</p>
          <p>{about.location}</p>
        </div>
        <div>
          <p className='text-gray-500 text-sm'>Start Date</p>
          <p>{about.start_date}</p>
        </div>
        <div>
          <p className='text-gray-500 text-sm'>End Date</p>
          <p>{about.end_date}</p>
        </div>
      </div>

      <h3 className='font-[900] text-[24px] leading-[1.2] mt-8 mb-4'>Categories</h3>
      <div className='flex flex-wrap gap-2'>
        {about.categories.map((category, index) => (
          <span key={index} className='px-3 py-1 bg-gray-100 rounded-full text-sm'>
            {category}
          </span>
        ))}
      </div>

      <h3 className='font-[900] text-[24px] leading-[1.2] mt-8 mb-4'>Required Skills</h3>
      <div className='flex flex-wrap gap-2'>
        {about.required_skills.map((skill, index) => (
          <span key={index} className='px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
  


export default About