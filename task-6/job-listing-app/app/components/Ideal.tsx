import React from 'react'
import type { IdealCandidate } from '@/types/jobs'
interface IdealProps{
  candidate: IdealCandidate
}
const Ideal: React.FC<IdealProps>= ({candidate}) => {
  return (
    <div className='w-[815px] h-[265px]'>
        <h2 className='w-[350px] h-[29px] font-[900] text-[24px] leading-[1.2]'>Ideal Candidates We Want</h2>
         <div className='mb-4'>
        <p className='font-semibold text-lg'>
          {candidate.age} year old {candidate.gender.toLowerCase()} social media manager
        </p>
      </div>
       <ul className='space-y-3'>
        {candidate.traits.map((trait, index) => (
          <li key={index} className='flex items-start'>
            <span className='mr-2 mt-1'>•</span>
            <p className='text-base leading-relaxed'>{trait}</p>
          </li>
        ))}
      </ul>
    </div>
)
}

export default Ideal