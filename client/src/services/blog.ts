// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBlogEntity, IBlogForm, IBlogResponse, IBlogsResponse } from "../interfaces/blogInterface";
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
    getBlogById: builder.query<IBlogResponse, string>({
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
    }),
    getMyBlogs: builder.query<IBlogsResponse, void>({
      query: () => ({
        url: "/myBlogs",
        method: "GET"
      })
    }),
    editBlogById: builder.mutation<IBlogsResponse, {id:string, payload:IBlogForm}>({
      query: ({id, payload}) => ({
        url: `/${id}`,
        method: "PUT",
        body:payload,
      })
    }),
    deleteBlogById: builder.mutation<IBlogsResponse, string>({
      query: (id) => ({
        url:`/${id}`,
        method: "DELETE",
      })
    }),
    toggleBlogLike: builder.mutation< IBlogResponse, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "PATCH",
      }),
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBlogsQuery, useCreateBlogMutation , useGetBlogByIdQuery, useGetMyBlogsQuery, useEditBlogByIdMutation, useDeleteBlogByIdMutation, useToggleBlogLikeMutation} = blogApi;
