// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBlogEntity, IBlogForm, IBlogsResponse } from "../interfaces/blogInterface";
import { RootState } from "../store/store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:2011/api/blogs",
  credentials: "include",
  prepareHeaders:(headers, {getState}) => {
    const token = (getState() as RootState).auth.token;
    if(token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers;
  }
});

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery,
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getAllBlogs: builder.query<IBlogsResponse, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags:["Blog"],
    }),
    getBlogById: builder.query<IBlogEntity, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",

      }),
      providesTags:["Blog"],
    }),
    createBlog: builder.mutation<IBlogsResponse, IBlogForm>({
      query: (body) =>  ({
        url: "/", 
        method: "POST",
        body
      }),
      invalidatesTags: ["Blog"],
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBlogsQuery, useCreateBlogMutation , useGetBlogByIdQuery} = blogApi;
