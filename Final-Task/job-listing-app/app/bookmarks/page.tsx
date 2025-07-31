'use client';

import React from 'react';
import { BookmarkMinus } from 'lucide-react';
import { useGetBookmarksQuery } from '@/redux/services/bookmarkApi';
import JobListCard from '../components/JobListCard';
import { JobType } from '@/types/jobTypes';

const BookmarkedJobs = () => {
  const { 
    data: bookmarksData, 
    error, 
    isLoading 
  } = useGetBookmarksQuery();

  const transformJobData = (data: any): JobType[] => {
    return (data?.data || []).map((job: any) => ({
      ...job,
      id: job.eventID,
      description: job.description || '',
      categories: job.categories || [],
      location: job.location ? [job.location] : [],
      isBookmarked: true,
      opType: job.opType || '',
      orgName: job.orgName || '',
      logoUrl: job.logoUrl || '',
      title: job.title || '',
    }));
  };

  const jobs = transformJobData(bookmarksData);

  const renderLoadingState = () => (
    <p className="text-3xl font-semibold text-gray-600 animate-pulse mt-20 text-center">
      Loading bookmarked jobs...
    </p>
  );

  const renderErrorState = () => {
    const getErrorMessage = () => {
      return 'Something went wrong. Please try again.';
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <p className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong.
        </p>
        <p className="text-lg text-red-500 max-w-lg text-center">
          {getErrorMessage()}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    );
  };

  const renderEmptyState = () => (
    <div className="flex flex-col items-center justify-center mt-32 text-gray-600">
      <h2 className="text-2xl font-semibold mb-2">No Bookmarked Jobs</h2>
    </div>
  );

  const renderJobList = () => (
    <>
      <h1 className="Maintext text-center mt-10">Saved jobs</h1>
      <div className="flex flex-col gap-6 mx-20 my-20">
        {jobs.map((job) => (
          <JobListCard key={job.id} {...job} isBookmarked={true} />
        ))}
      </div>
    </>
  );

  if (isLoading) return renderLoadingState();
  if (error) return renderErrorState();
  if (jobs.length === 0) return renderEmptyState();
  
  return renderJobList();
};

export default BookmarkedJobs;