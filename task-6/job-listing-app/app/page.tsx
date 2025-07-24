import Image from "next/image";
import JobListCard from "./components/JobListCard";
import {jobs} from '@/data/jobs'

export default function Home() {

    return (
    <div className="flex flex-col mt-[72px] mr-[123px] mb-[72px] ml-[124px] max-w-[919px] gap-5 text-[#25324B]">
      <div className="flex flex-row justify-between h-[68px] w-full">
        <div>
          <h1 className="font-black text-[32px] leading-[120%] ">Opportunities</h1>
          <p className="text-[16px] font-normal leading-[160%] text-gray-400">
            Showing 73 results
          </p>
        </div>
        <div>
          <label className="w-full text-gray-400">Sort by:</label>
          <select className="p-2 border rounded-md border-white">
            <option>Most Recent</option>
            <option>Deadline</option>
            <option>Title</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
      
          {jobs.job_postings.map((job) => (
  <JobListCard key={job.id} job={job} />
))}
        
      </div>
    </div>
  );
  
}

 
    