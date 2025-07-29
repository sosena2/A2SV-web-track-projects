'use client'
import JobListCard from "./JobListCard";
import { JobType } from "@/types/jobTypes";
import { useGetAllJobsQuery } from "@/redux/services/jobApi";
import { signOut } from "next-auth/react";
export default function Home() {

  const { data, isLoading, error } = useGetAllJobsQuery();
  // display loading state
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-3xl font-semibold text-gray-600 animate-pulse">
          Loading jobs...
        </p>
      </div>
    );
  // display error message
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
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  console.log("data:", data);

  const job = data.data;

    return (
        <>
        <div className="flex justify-end mr-30">
        <button
        onClick={() => signOut()}
        className="px-4 py-4 bg-[#25324B] text-white rounded-2xl hover:bg-stone-900 transition mt-5"
      >signout</button>
        </div>
       
        <div className="flex flex-col mt-[72px] mr-[123px] mb-[72px] ml-[124px] max-w-[919px] gap-5 text-[#25324B]">
        <div className="flex flex-row justify-between h-[68px] w-full">
            <div>
            <h1 className="font-black text-[32px] leading-[120%] ">Opportunities</h1>
            <p className="text-[16px] font-normal leading-[160%] text-gray-400">
                Showing {job.length} results
            </p>
            </div>
            <div>
            <label className="w-full text-gray-400">Sort by:</label>
            <select className="p-2 border rounded-md border-white">
                <option >Most Relevant</option>
                <option>Alphabetical order</option>
                <option>Date posted</option>
            </select>
            </div>
        </div>
        <div className="flex flex-col gap-6">
        
            {job.map((job: JobType) => (
    <JobListCard key={job.id} {...job} />
    ))}
            
        </div>
        </div>
    </>
  );
  
}

 
    