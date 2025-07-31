import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobs",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    // to get all the job listing
    getAllJobs: builder.query<any, void>({
      query: () => "/opportunities/search",
    }),
    // to get a specific job listing
    getJobsById: builder.query<any, string>({
      query: (id: string) => `/opportunities/${id}`,
    }),
  }),
});

export const { useGetAllJobsQuery, useGetJobsByIdQuery } = jobsApi;
