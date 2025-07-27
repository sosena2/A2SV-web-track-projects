import React from 'react'
import Link from 'next/link';
import { JobType } from '@/types/jobtypes';

const JobListCard = ({id, logoUrl, orgName, location, title, description, categories}: JobType) => {
    return (
    <Link href={`/Dashboard/${id}`} passHref>
      <div className='border border-[#D6DDEB]  rounded-[30px] w-[919px] cursor-pointer hover:shadow-md transition-shadow'>
        <div className='w-[844px] flex flex-row gap-6 my-[24px] mx-[36.5px] justify-space-between'>
          <div className='w-[66px] h-[59px] flex items-center justify-center bg-gray-100 rounded-lg'>
            {logoUrl ? (
                <img
                src={logoUrl}
                alt={orgName}
                className="w-full h-full object-contain bg-white"
                />
            ) : null}
            </div>
          <div className='flex flex-col gap-2 h-auto w-[755px]'>
            <p className='font-semibold text-[20px] leading-[1.2] text-[#25324B] h-[24px]' >{title}</p>
            <div className=' h-auto text-gray-400 text-[16px] leading-[1.6] flex flex-row justify-space-between'>
               <div>{orgName} . {location}</div>
            </div>
            <div className='font-normal text-[16px] leading-[1.6] text-[#25324B] w-[744px] pb-2'>
              {description}
            </div>
              <div className='flex flex-row gap-2 text-[12px] font-semibold leading-[1.6]'>
                <button className="rounded-[80px] py-[6px] px-[10px] bg-emerald-50 text-[#56CDAD] border border-emerald-50">
                  In Person
                </button>
          
                <div className="border-l border-l-[#D6DDEB] "></div>
              
                {categories.slice(0, 3).map((category, index) => (
                  <button 
                    key={index}
                    className={`rounded-[80px] py-[6px] px-[10px] border ${
                      index === 0 ? 'text-[#FFB836] border-[#FFB836]' :
                      index === 1 ? 'text-[#4640DE] border-[#4640DE]' :
                      ''
                    }`}
                  >
                    {category}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

}

export default JobListCard
