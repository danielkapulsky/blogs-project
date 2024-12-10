// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBlogsResponse } from "../interfaces/blogInterface";
import { IUserForm, IUsersResponse } from "../interfaces/userInterface";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2011/api/users" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUsersResponse, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags:["User"],
    }),
    createUser: builder.mutation<IUsersResponse, IUserForm>({
        query:(user) => ({
            url:"/signUp",
            method:"POST",
            body:{user,}
        })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useCreateUserMutation } = userApi;
