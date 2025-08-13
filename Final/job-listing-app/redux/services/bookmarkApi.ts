import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { JobType, ApiResponse, PaginatedResponse } from "../../types/jobTypes";

export const bookmark = createApi({
  reducerPath: "jobsbookmark",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com/",
    prepareHeaders: async (headers) => {
      const session = await getSession();
      const token = session?.user?.data?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Job", "Bookmark"],
  endpoints: (builder) => ({
    // Jobs
    getAllJobs: builder.query<PaginatedResponse<JobType>, void>({
      query: () => "/opportunities/search",
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: "Job" as const, id })),
              "Job",
            ]
          : ["Job"],
    }),

    getJobById: builder.query<ApiResponse<JobType>, string>({
      query: (id) => `/opportunities/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Job", id }],
    }),

    // Bookmarks
    getBookmarks: builder.query<ApiResponse<JobType[]>, void>({
      query: () => "/bookmarks",
      providesTags: (result) =>
        Array.isArray(result?.data)
          ? [
              ...result.data.flat().map((job: JobType) => ({
                type: "Bookmark" as const,
                id: job.id,
              })),
              "Bookmark",
            ]
          : ["Bookmark"],
    }),

    addBookmark: builder.mutation<ApiResponse<JobType>, string>({
      query: (eventID) => ({
        url: `/bookmarks/${eventID}`,
        method: "POST",
      }),
      invalidatesTags: ["Bookmark"],
    }),

    removeBookmark: builder.mutation<ApiResponse<void>, string>({
      query: (eventID) => ({
        url: `/bookmarks/${eventID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bookmark"],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} = bookmark;
