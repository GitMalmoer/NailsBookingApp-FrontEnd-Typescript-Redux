import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:7268/api/email" }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (message) => ({
        url: "SendMessage",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: message,
      }),
    }),
    getMessages: builder.query({
      query: () => ({
        url: "GetMessages",
        method: "GET",
      }),
    }),
  }),
});

export const {useSendMessageMutation, useGetMessagesQuery} = questionApi;
export default questionApi;