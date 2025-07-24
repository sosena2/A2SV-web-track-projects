import React from 'react'
import { JobPosting } from '@/types/jobs'
const Descrpition = ({description}:Pick<JobPosting,'description'>) => {
  return (
    <div className='w-[815px] h-[175px]' >
      <p className='w-[147px] h-[29px] font-[900] text-[24px] leading-[1.2] '>Description</p>
      <div className='w-[815px] h-[130px] font-[400] text-[17px] leading-[1.6] mt-4'>{description}</div>
    </div>
  )
}

export default Descrpition