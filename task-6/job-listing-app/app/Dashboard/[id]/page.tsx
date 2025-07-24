import React from 'react'
import Descrpition from '@/app/components/Descrition';
import Responsibility from '@/app/components/Responsibility';
import Where from '@/app/components/Where';
import About from '@/app/components/About';
import Ideal from '@/app/components/Ideal';
import {jobs} from '@/data/jobs'

interface DashboardPageProps{
  params:{
    id: string;
  }
}

const Dashboard = async ({ params }: DashboardPageProps) => {
  // Debugging: Check what's being received
  console.log('Raw params.id:', params.id);
  
  // Convert to number safely
  const jobId = Number(params.id);

  // Debugging: Check available jobs
  console.log('All job IDs:', jobs.job_postings.map(j => j.id));
  
  const job = jobs.job_postings.find(job => job.id === jobId);
  
if (!job) {
   console.error(`Job ${jobId} not found. Available IDs: ${jobs.job_postings.map(j => j.id).join(', ')}`);
  return <div>Job not found</div>;
}
   
  return(
    <div className='w-full max-w-[1229px] p-8 flex flex-row gap-[62px] text-[#25324B]'>
      <div className='w-[815px] pt-[46px] pb-[46px] flex flex-col gap-[55px]'>
        <Descrpition description={job.description} />
        <Responsibility responsibilities={job.responsibilities} />
        <Ideal candidate={job.ideal_candidate} />
        <Where when_where={job.when_where} />
      </div>
      <div className='w-[352px] pt-[46px]'>
        <About about={job.about} />
      </div>
    </div>

  )
}

export default Dashboard