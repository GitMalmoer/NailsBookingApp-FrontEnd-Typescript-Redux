import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const logsApi = createApi({
    reducerPath:"logsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://localhost:7268/api/logs/"}),
    endpoints : (builder) => ({
        getErrorLogs: builder.query({
            query:() => ({
                url:"geterrorlogs",
                method:"GET",
            }),
        }),
        clearLogs: builder.mutation({
            query:() => ({
                url:"clearlogs",
                method:"DELETE",
                headers: { "content-type": "application/json" },
            }),
        }),
    })
})


export const {useGetErrorLogsQuery,useClearLogsMutation} = logsApi
export default logsApi;
