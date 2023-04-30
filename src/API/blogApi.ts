import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://localhost:7268/api/post/"}),
    endpoints:(builder) => ({
        getPosts : builder.query({
            query: () => ({
                url:"getposts",
                method:"GET",
            }),
        }),
    })

})

export const {useGetPostsQuery} = blogApi;


export default blogApi;