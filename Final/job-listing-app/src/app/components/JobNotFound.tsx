import React from 'react';

const JobNotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <p className="text-4xl font-bold text-red-600 mb-4">Job Not Found</p>
    <p className="text-lg text-gray-500 max-w-lg text-center">
      Sorry, the job you are looking for does not exist or has been removed.
    </p>
  </div>
);

export default JobNotFound;
