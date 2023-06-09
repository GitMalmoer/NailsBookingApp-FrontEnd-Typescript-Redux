import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nailsbookingapi.azurewebsites.net/api/booking/",
  }),
  tagTypes:["times"],
  endpoints: (builder) => ({
    getAvailableTimes: builder.query({
      query: (stringDate) => ({
        url: "GetAvailableTimes",
        method: "GET",
        params: { stringDate }, // PARAMS NEED TO BE THE SAME NAME AS IN API IN THIS CASE : GetAvailableTimes(string stringDate)
      }),
      providesTags:["times"],
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: "CreateAppointment",
        method: "POST",
        headers: {"content-type":"application/json"},
        body: data,
      }),
      invalidatesTags:["times"],
    }),
    initiatePayment: builder.mutation({
      query: (data) => ({
        url: "InitiatePayment",
        method: "POST",
        headers: {"content-type":"application/json"},
        body: data,
      }),
    }),
  }),
});

export default bookingApi;
export const { useGetAvailableTimesQuery, useCreateAppointmentMutation, useInitiatePaymentMutation } = bookingApi;
