import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7268/api/auth/",
  prepareHeaders:(headers:Headers,api) => {
    const token = localStorage.getItem("token");
    token && headers.append("Authorization","Bearer " + token);
} }),
  tagTypes:["ProfilePic"],
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
    forgotUserPassword: builder.mutation({
      query: (forgotPasswordBody) => ({
        url: "forgotpassword",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: forgotPasswordBody,
      }),
    }),
    resetUserPassword: builder.mutation({
      query: (resetPasswordBody) => ({
        url: "resetpassword",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: resetPasswordBody,
      }),
    }),
    changeUserPassword: builder.mutation({
      query: (changePasswordBody) => ({
        url: "changepassword",
        body: changePasswordBody,
        method: "POST",
        headers: { "content-type": "application/json" },
      }),
    }),
    confirmEmail : builder.mutation({
      query: (confirmEmailBody) => ({
        url: "confirmemail",
        method:"POST",
        body:confirmEmailBody,
        headers: { "content-type": "application/json" },
      })
    }),
    getProfilePic: builder.query({
      query:(id) => ({
        url:`/profile/getprofilepic/${id}`,
        method:"GET",
      }),
      providesTags:["ProfilePic"],
    }),
    changeProfilePic: builder.mutation({
      query:(changePicBody) => ({
        url:"/profile/changeprofilepic",
        method:"POST",
        headers:{"content-type": "application/json"},
        body:changePicBody,
      }),
      invalidatesTags:["ProfilePic"],
    }),
    getAllAvatars: builder.query({
      query:() => ({
        url:"/profile/getallavatars",
        method:"GET",
      }),
    })
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetUsersQuery,
  useForgotUserPasswordMutation,
  useResetUserPasswordMutation,
  useChangeUserPasswordMutation,
  useConfirmEmailMutation,
  useGetProfilePicQuery,
  useChangeProfilePicMutation,
  useGetAllAvatarsQuery,
} = authApi;

// export const authApiReducer = authApi.reducer; // TEST

export default authApi;
