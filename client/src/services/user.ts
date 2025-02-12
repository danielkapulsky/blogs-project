// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IUserForm,
  IUsersResponse,
  IUserAuth,
} from "../interfaces/userInterface";
import { RootState } from "../store/store";

// Define a service using a base URL and expected endpoints

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:2011/api/users",
  credentials: "include",
  prepareHeaders:(headers, {getState}) => {
    const token = (getState() as RootState).auth.token;
    if(token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers;
  }
});

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUsersResponse, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    createUser: builder.mutation<IUsersResponse, IUserForm>({
      query: (user) => ({
        url: "/signUp",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    logInUser: builder.mutation<IUsersResponse, IUserAuth>({
      query: (auth) => ({
        url: "/logIn",
        method: "POST",
        body: auth,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLogInUserMutation,
} = userApi;
