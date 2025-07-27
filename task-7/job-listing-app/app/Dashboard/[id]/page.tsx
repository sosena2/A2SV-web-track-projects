'use client';
import React, {use} from 'react'
import { JobType } from '@/types/jobtypes';
import { notFound } from 'next/navigation';
import { useGetJobsByIdQuery } from '@/redux/services/jobApi';

import Descrpition from '@/app/components/Description';
import Responsibility from '@/app/components/Responsibility';
import Where from '@/app/components/Where';
import About from '@/app/components/About';
import Ideal from '@/app/components/Ideal';

interface DashboardPageProps{
  params: Promise<{id: string}>;

}
const Dashboard = ({ params }: DashboardPageProps) => {
    const { id: jobId } = use(params);
    const { data, isLoading, error } = useGetJobsByIdQuery(jobId);

  // display loading state
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-3xl font-semibold text-gray-600 animate-pulse">
          Loading job details...
        </p>
      </div>
    );
  // display error state
  if (error) {
    const errorMessage =
      "data" in error && typeof error.data === "string"
        ? error.data
        : "status" in error
        ? `Request failed with status ${error.status}`
        : "Something went wrong. Please try again.";

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <p className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </p>
        <p className="text-lg text-red-500 max-w-lg text-center">
          {errorMessage}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  const job: JobType = data?.data;

  return(
    <div className='w-full max-w-[1229px] p-8 flex flex-row gap-[62px] text-[#25324B] text-[16px]'>
      <div className='w-[815px] pt-[46px] pb-[46px] flex flex-col gap-[55px]'>
        <Descrpition {...job} />
        <Responsibility {...job} />
        <Ideal {...job}/>
        <Where {...job} />
      </div>
      <div className='w-[352px] pt-[46px]'>
        <About {...job} />
      </div>
    </div>

  )
}

export default Dashboard