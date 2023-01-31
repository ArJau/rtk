import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    getUniqUsers: builder.query({
      query: (name) => `users?name=${name}`,
      providesTags: ["Users"],
    }),
    createUser: builder.mutation({
      query: (name) => ({
        url: "users",
        method: "POST",
        body: { name },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUniqUsersQuery, useCreateUserMutation } = apiSlice;
