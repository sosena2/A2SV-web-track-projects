
"use client";
import React, { useState, useMemo, useEffect } from "react";
import JobListCard from "./JobListCard";
import { JobType } from '../../../types/jobTypes';
import { useGetAllJobsQuery } from "../../../redux/services/jobApi";
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react";
import Link from 'next/link';
import { BookmarkIcon } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Home() {
  // All hooks at the top level
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data, isLoading, error } = useGetAllJobsQuery();
  const [sortOption, setSortOption] = useState("Most Relevant");
  const jobs: JobType[] = (data && Array.isArray(data.data)) ? data.data : [];
  const sortedJobs = useMemo(() => {
    if (!jobs) return [];
    let sorted = [...jobs];
    if (sortOption === "Alphabetical order") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "Date posted") {
      sorted.sort((a, b) => {
        const dateA = new Date(a.startDate || a.datePosted || 0).getTime();
        const dateB = new Date(b.endDate || b.datePosted || 0).getTime();
        return dateB - dateA;
      });
    }
    return sorted;
  }, [jobs, sortOption]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-[60vh]"><p className="text-3xl font-semibold text-gray-600 animate-pulse">Loading...</p></div>;
  }
  if (!session) return null;

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-3xl font-semibold text-gray-600 animate-pulse">
          Loading jobs...
        </p>
      </div>
    );
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

  return (
    <>
      <div className="flex flex-row justify-between mr-60 ml-30 mt-4">
        <div>
          <Link
            href="/bookmarks"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookmarkIcon size={16} />
            View Saved Jobs
          </Link>
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className="px-4 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            signout
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-[52px] mr-[123px] mb-[72px] ml-[124px] max-w-[919px] gap-5 text-[#25324B]">
        <div className="flex flex-row justify-between h-[68px] w-full">
          <div>
            <h1 className="font-black text-[32px] leading-[120%] ">Opportunities</h1>
            <p className="text-[16px] font-normal leading-[160%] text-gray-400">
              Showing {sortedJobs.length} results
            </p>
          </div>
          <div>
            <label className="w-full text-gray-400">Sort by:</label>
            <select
              className="p-2 border rounded-md border-white"
              value={sortOption}
              onChange={e => setSortOption(e.target.value)}
            >
              <option>Most Relevant</option>
              <option>Alphabetical order</option>
              <option>Date posted</option>
            </select>
          </div>
        </div>
        {sortedJobs.map(job => (
          <JobListCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}


