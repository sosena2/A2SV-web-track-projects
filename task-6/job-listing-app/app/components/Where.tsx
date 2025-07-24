import React from 'react'
import type { JobPosting } from '@/types/jobs'

const Where = ({when_where}:Pick<JobPosting,"when_where">) => {
  return (
    <div className='w-[724px] h-[96px] mb-[23px]'>
        <p className='w-[187px] h-[29px] font-[900] text-[24px] leading-[1.2] mb-[16px]'>When & where</p>
        <div className='w-[875px] h-[44px]'>{when_where}</div>
    </div>
)
}

export default Where