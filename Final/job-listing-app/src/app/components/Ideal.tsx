import React from 'react'
import { JobType } from '../../../types/jobTypes';

const Ideal= ({idealCandidate}: JobType) => {
  return (
    <div>
        <h2 className=' font-[900] text-[24px] leading-[1.2] mb-4'>Ideal Candidates We Want</h2>
       <ul className='space-y-3 list-disc pl-5'>
        <li>
        {idealCandidate}
        </li>
           
      </ul>
    </div>

    
)
}

export default Ideal