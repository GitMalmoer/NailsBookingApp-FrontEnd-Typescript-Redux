import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7268/api/auth/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "register",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "login",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: userData,
      }),
    }),
    getUsers: builder.query({
        query: () => ({
          url: "getusers",
          method: "GET",
        }),
    }),
  }),
});

export const {useLoginUserMutation, useRegisterUserMutation, useGetUsersQuery} = authApi;

// export const authApiReducer = authApi.reducer; // TEST

export default authApi;
