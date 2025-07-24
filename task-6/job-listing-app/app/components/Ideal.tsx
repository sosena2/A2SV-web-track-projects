import React from 'react'
import type { IdealCandidate , JobPosting} from '@/types/jobs'

interface IdealProps{
  candidate: IdealCandidate
  job: JobPosting
}
const Ideal: React.FC<IdealProps>= ({candidate, job}) => {
  return (
    <div>
        <h2 className=' font-[900] text-[24px] leading-[1.2] mb-4'>Ideal Candidates We Want</h2>
       <ul className='space-y-3 list-disc pl-5'>
        <li>
          <strong>
                Young ({candidate.age}){" "}
                {candidate.gender.toLowerCase()} {job.title}
              </strong>
        </li>
        
       {candidate.traits.map((trait, index) => (
              <li className='text-[16px]' key={index}>{trait}</li>
            ))}
      </ul>
    </div>

    
)
}

export default Ideal